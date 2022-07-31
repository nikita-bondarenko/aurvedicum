const db = require('../db/index')
const pick = require('lodash/pick')
const router = require('express').Router()
const collection = 'baskets'

setInterval(async () => {
    const baskets = await db.get(collection)
    baskets.forEach((basket => {
        const timeFromLastChange = Math.floor((Date.now() - basket.changed) / 1000 / 60)
        if (timeFromLastChange > 60) {
            basket.items.forEach(item => db.updateStorageItemQuantity(item.productId, item.volumeId, item.quantity, true))

            db.delete(collection, basket.id)
        }
    }))
}, 1000 * 60)

const getBasket = async (userAccessKey) => {
    const baskets = await db.get(collection)
    let basketId

    if (userAccessKey) {
        basketId = baskets.find(basket => basket.id === userAccessKey) ? userAccessKey : await db.createBasket()
    } else {
        basketId = await db.createBasket()
    }

    return basketId
}


router.post("/", async (req, res) => {
    console.log(req.body)
    const basketId = await getBasket(req.query.userAccessKey)
    const basket = await db.craeteBasketItem(basketId, { ...req.body })
    const { items, pagination } = await db.getPagination(basket.items, pick(req.body, 'limit', 'page'))
    res.status(200).json({ ...basket, items, pagination, userAccessKey: basketId, })
})

router.post("/fromOrder", async (req, res) => {
    console.log(req.body)
    basketId = await db.createBasket(req.body)
    // console.log(basketId)

    res.status(200).send(basketId)
})

router.get("/", async (req, res) => {
    const basketId = await getBasket(req.query.userAccessKey)
    const basket = await db.get(collection, basketId)
    const { items, pagination } = await db.getPagination(basket.items, pick(req.query, 'limit', 'page'))

    res.status(200).json({ ...basket, items, pagination, userAccessKey: basketId })
})

// db.delete('baskets', 'j3PvFmFhAQ').then(() => db.get('baskets').then(res => console.log(res)))
// db.get('baskets').then(res => console.log(res))
// db.delete('baskets')
// db.totalDelete('baskets', { delete: 'true' })
// db.createCollection((collection))

router.patch('/', async (req, res) => {

    if (!req.body.basketId || !req.body.itemId || !req.body.quantity) {
        return res.sendStatus(400)
    }
    try {
        const basket = await db.updateBasketItemQuantity(req.body.basketId, req.body.itemId, req.body.quantity, req.body.isAdd)
        if (basket) {
            const { items, pagination } = await db.getPagination(basket.items, pick(req.body, 'limit', 'page'))
            res.status(200).json({ ...basket, items, pagination })
        }
    } catch {
        return res.sendStatus(404)
    }

})

router.delete('/', async (req, res) => {
    console.log(req.query)
    if (!req.query.basketId || !req.query.itemId) {
        return res.sendStatus(400)
    }
    let basket
    try {
        basket = await db.deleteBasketItem(req.query.basketId, req.query.itemId)
    } catch {
        return res.sendStatus(404)
    }
    const { items, pagination } = await db.getPagination(basket.items, pick(req.query, 'limit', 'page'))
    res.status(200).json({ ...basket, items, pagination })
})

router.delete('/:id', async (req, res) => {
    console.log(req.params.id)
    try {
        const basket = await db.get(collection, req.params.id)
        if (basket) {

            const res = await db.updateStorageItemQuantity(item.productId, item.volumeId, item.quantity, true)
            if (res) {
                db.delete(collection, req.params.id).then(() => res.sendStatus(204).end())
            }
        }
    } catch {
        res.sendStatus(404).end()
    }

})

module.exports = router



