const fs = require("fs");
const path = require("path");
const randomId = require("random-id");
const idLength = 8;
const idPattern = 'aA0'

const dbFile = path.join(__dirname, "db.json");
const DATA = JSON.parse(fs.readFileSync(dbFile, "utf-8"));

const NO_COLLECTION = "NO_COLLECTION";
const NO_ENTITY = "NO_ENTITY"
const NO_PROP = "NO_PROP"
const created = Date.now()
const changed = Date.now()
const sync = () => {


    fs.writeFileSync(dbFile, JSON.stringify(DATA), "utf-8")
}

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

const db = {
    getPagination: (list, properties) => {
        if (!list) {
            throw noCollectionError()
        }
        list = Object.keys(properties).reduce((arr, key) => {
            return key === "page" || key === "limit" ? arr : arr.filter(item => item[key] === properties[key])
        }, list)
        const total = list.reduce(acc => acc += 1, 0)
        const limit = Number(properties.limit) || 100
        const pages = Math.ceil(total / limit)
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
        const data = DATA[collection]
        if (filter.name) {
            const searchedArray = await searchByName(collection, filter)
            return searchedArray
            // data.filter((o) => (Object.keys(filter).every((k) => (o[k] === filter[k]))))
        }

        return data;
    },
    get: async (collection, id) => {
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

    },
    totalDelete: async (collection, prop) => {
        if (prop.delete !== 'true') {
            throw noPropertyError()

        }
        DATA[collection] = []

        sync()
    },
    collections: async () => {
        return Object.keys(DATA)
    },
    createCollection: async (collection) => {
        DATA[collection] = DATA[collection] || []
        sync()
    },
    reset: async () => {
        DATA = {}
        sync()
    },

    NO_COLLECTION,
    NO_ENTITY,
    NO_PROP
}

module.exports = db
