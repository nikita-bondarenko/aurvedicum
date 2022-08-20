if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()

}
const fs = require("fs");
const path = require("path");
const randomId = require("random-id");
const idLength = 10;
const idPattern = 'aA0'
let DATA = { products: [] }

const dbFile = path.join(__dirname, "db.json");

const NO_COLLECTION = "NO_COLLECTION";
const NO_ENTITY = "NO_ENTITY"
const NO_PROP = "NO_PROP"
const created = Date.now()
const changed = Date.now()
const sync = () => {
    fs.writeFileSync(dbFile, JSON.stringify(DATA), "utf-8")
}

const { MongoClient } = require("mongodb");

const clientPromise = MongoClient.connect(process.env.DB_URI);
const getMongoDB = async () => {
    const client = await clientPromise;
    const dataBase = client.db("aurvedicum");
    const [data] = await dataBase.collection('data').find().toArray()
    fs.writeFileSync(dbFile, JSON.stringify(data))

}

try { DATA = JSON.parse(fs.readFileSync(dbFile, "utf-8")) } catch (error) {
    console.error(error)
    getMongoDB()
}

const updateMongoDB = async () => {
    const client = await clientPromise;
    const dataBase = client.db("aurvedicum");
    try {
        if (DATA) {
            const isDeleted = await dataBase.dropDatabase()
            if (isDeleted) {
                const { acknowledged } = dataBase.collection('data').insertOne(DATA)
                console.log(acknowledged)
            }
        }
    } catch (error) {
        console.error(error)
    }
}
setInterval(() => updateMongoDB(), 1000 * 60 * 60 * 24)


const noCollectionError = () => {
    const err = new Error("Collection does not exist")
    err.code = NO_COLLECTION
    return err
}

const noPropertyError = () => {
    const err = new Error("No properties")
    err.code = NO_PROP
    return err
}

const noEntityError = () => {
    const err = new Error("Entity does not exist")
    err.code = NO_ENTITY
    return err
}

const searchByName = async (collection, filter) => {

    return DATA[collection].filter(item => filter.name.toLowerCase().split(" ").every(word => item.name.toLowerCase().includes(word)))
}

const findItemById = (items, id) => {
    return items.find(item => item.id === id)
}

const db = {
    getPagination: (list, properties) => {
        if (!list) {
            throw noCollectionError()
        }
        list = Object.keys(properties).reduce((arr, key) => {
            return key === "page" || key === "limit" ? arr : arr.filter(item => item[key] === properties[key])
        }, list)
        const total = list.reduce(acc => acc += 1, 0)
        const limit = Number(properties.limit) || 1000
        const pages = Math.ceil(total / limit) || 1
        const page = Number(properties.page) || 1
        const pagination = {
            total,
            limit,
            pages,
            page
        }


        const data = {
            items: list.slice(limit * (page - 1), limit * page),
            pagination
        }

        return data
    },
    find: async (collection, filter) => {
        if (!DATA[collection]) {
            throw noCollectionError()
        }
        let data = DATA[collection]
        if (filter.name) {
            data = await searchByName(collection, filter)
        }
        if (filter.minPrice) {
            data = await data.filter(item => item.volumes.length > 0 ? (item.volumes.some(volume => volume.price >= filter.minPrice)) : false)
        }
        if (filter.maxPrice) {
            data = await data.filter(item => item.volumes.length > 0 ? (item.volumes.some(volume => volume.price <= filter.maxPrice)) : false)
        }
        if (filter.brandId) {
            data = await data.filter(item => item.brands.length > 0 ? (item.brands.some(brand => brand.brandId === filter.brandId)) : false)
        }

        if (filter.categoryId) {
            data = await data.filter(item => item.categories.length > 0 ? (item.categories.some(category => category.categoryId === filter.categoryId)) : false)
        }

        return data;
    },
    get: async (collection, id) => {

        if (!DATA) return
        if (!DATA[collection]) {
            throw noCollectionError()
        }

        const data = DATA[collection]
        if (!!id) {
            const o = data.find((o) => o.id === id)
            if (!o) {
                throw noEntityError()
            }
            return o
        }


        return data
    },
    createBasket: async (data) => {
        const id = randomId(idLength, idPattern)

        if (data) {
            try {
                const basket = await db.get('baskets', data.id)
                console.log(basket)

                if (basket) return data.id

            } catch {
                DATA.baskets.push(data)
                sync()
                return data.id
            }

        }
        DATA.baskets.push({
            itemsQuantity: 0,
            totalPrice: 0,
            items: [],
            id,
            created,
            changed,
        })
        sync()
        return id
    }
    ,
    craeteBasketItem: async (basketId, data) => {
        const id = randomId(idLength, idPattern)
        let basket = findItemById(DATA.baskets, basketId)
        const item = basket.items.find(item => item.productId === data.productId && item.volumeId === data.volumeId)
        const product = await db.get('products', data.productId)
        const price = product.volumes.find(volume => volume.id === data.volumeId).price
        if (item) {
            basket = await db.updateBasketItemQuantity(basketId, item.id, data.quantity, data.isAdd)

        } else {
            basket.items.push({ ...data, id, price })
            db.updateStorageItemQuantity(data.productId, data.volumeId, data.quantity)
            basket.itemsQuantity = basket.items.reduce((acc, item) => acc + item.quantity, 0)
            basket.totalPrice = basket.items.reduce((acc, item) => acc + item.price * item.quantity, 0)

        }

        basket.changed = changed
        sync()
        return basket
    },
    updateBasketItemQuantity: async (basketId, itemId, quantity, isAdd = false) => {
        const basket = findItemById(DATA.baskets, basketId)
        const item = findItemById(basket.items, itemId)
        const res = await db.updateStorageItemQuantity(item.productId, item.volumeId, quantity, !isAdd)
        item.quantity = isAdd ? item.quantity + quantity : item.quantity - quantity
        basket.itemsQuantity = basket.items.reduce((acc, item) => acc + item.quantity, 0)
        basket.totalPrice = basket.items.reduce((acc, item) => {
            console.log(item)
            return acc + item.price * item.quantity
        }, 0)

        sync()
        if (res) return basket
    },
    updateStorageItemQuantity: async (productId, volumeId, quantity, isAdd) => {
        const product = findItemById(DATA.products, productId)
        const volume = findItemById(product.volumes, volumeId)
        if (!isAdd) {
            volume.quantity -= quantity
        } else {
            volume.quantity += quantity
        }
        if (volume.quantity <= 0) volume.quantity = 0
        sync()
        return true
    },
    create: async (collection, data) => {
        if (!DATA[collection]) {
            throw noCollectionError()
        }
        if (Object.keys(data).length === 0) {
            throw noPropertyError()
        }
        const id = randomId(idLength, idPattern)


        DATA[collection].push({
            ...data,
            id,
            created,
            changed,
        })
        sync()
        return id

    },
    update: async (collection, id, data) => {

        const o = await db.get(collection, id)
        Object.assign(o, data, { changed })
        sync()
    },
    delete: async (collection, id) => {
        if (!DATA[collection]) {
            throw noCollectionError()
        }
        if (DATA[collection].filter(o => o.id === id).length === 0) {
            throw noCollectionError()
        }
        DATA[collection] = DATA[collection].filter((o) => o.id !== id)
        sync()
        return DATA[collection]
    },
    deleteBasketItem: async (basketId, itemId) => {
        const basket = findItemById(DATA.baskets, basketId)
        const item = findItemById(basket.items, itemId)
        const res = await db.updateStorageItemQuantity(item.productId, item.volumeId, item.quantity, true)

        const index = basket.items.indexOf(item)
        basket.items.splice(index, 1)
        basket.itemsQuantity = basket.items.reduce((acc, item) => acc + item.quantity, 0)
        basket.totalPrice = basket.items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
        sync()
        if (res) return basket
    },
    totalDelete: async (collection, prop) => {
        if (prop.delete !== 'true') {
            throw noPropertyError()

        }
        delete DATA[collection]

        sync()
    },
    collections: async () => {
        return Object.keys(DATA)
    },
    createCollection: async (collection, obj = []) => {
        DATA[collection] = DATA[collection] || obj
        sync()
    },
    getUser: async (username) => {
        // console.log(DATA.users)
        const user = await DATA.users.find(user => user.username === username)
        if (!user) {
            noEntityError()
        }
        return user
    },
    getUserBySesssionId: async (sessionId) => {
        const user = await db.get('users', DATA.sessions[sessionId].userId)
        if (!user) {
            noEntityError()
        }
        return user
    },
    createSession: async (userId) => {
        const sessionId = randomId()
        DATA.sessions[sessionId] = { userId, changed }
        sync()
        return sessionId
    },
    deleteSession: async (sessionId) => {
        delete DATA.sessions[sessionId]
        sync()

    },
    touchSession: async (sessionId) => {
        DATA.sessions[sessionId].changed = changed
        sync()
    }
    ,


    NO_COLLECTION,
    NO_ENTITY,
    NO_PROP
}

module.exports = db
