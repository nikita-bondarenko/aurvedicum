const db = require('../db/index')
const pick = require('lodash/pick')
const router = require('express').Router()
const collection = 'orders'

const unknownProductError = (id) => `Unknown product's ID: ${id}`
const noPropError = 'Needed properties are not found'

router.post('/', async (req, res) => {
    const requiredArr = ['name', 'email', 'phone', 'address']
    const error = requiredArr.reduce((obj, key) => {
        if (!req.body[key]) {
            obj[key] = 'Поле необходимо заполнить'
        }
        return obj
    }, {})

    if (Object.keys(error).length > 0) {
        res.status(400).json(error)
        return
    }
    const basket = await db.get('baskets', req.body.basketId)
    const order = Object.assign({}, req.body, { basket })
    db.createCollection(collection)
    const orderId = await db.create(collection, order)
    db.delete('baskets', req.body.basketId).catch(() => res.status(404).message('Корзина не найдена').end())
    res.status(200).json({ orderId })
})

router.get('/', async (req, res) => {
    let items = await db.find(collection, pick(req.query, args))
    if (items.length && Object.keys(items[0]).includes('title')) {
        items = items.sort((a, b) => a.title > b.title ? 1 : -1)
    }
    res.json(db.getPagination(items, pick(req.query, 'limit', 'page')))
})

router.get('/:id', async (req, res) => {
    const id = req.params.id


    try {
        const data = await db.get(collection, id)
        res.json(data)
    } catch (err) {
        if (err.code === db.NO_ENTITY) {
            res.status(404).send(unknownProductError(id))
            return
        }
        throw err
    }
})


router.patch('/:id', async (req, res) => {
    const id = req.params.id
    try {
        await db.createCollection(name)
        const updateData = pick(req.body, args)
        await db.update(name, id, updateData)
        res.sendStatus(204)
    } catch (err) {
        if (err.code === db.NO_ENTITY) {
            res.status(404).send(unknownProductError(id))
            return
        }
        throw err
    }
})




router.delete('/:id', async (req, res) => {
    const id = req.params.id

    try {
        await db.delete(name, id)
        res.sendStatus(204)
    } catch (err) {
        if (err.code === db.NO_COLLECTION) {
            res.status(404).send(unknownProductError(id))
            return
        }
        throw err
    }
})

router.delete('/', async (req, res) => {
    try {
        await db.totalDelete(name, pick(req.body, 'delete'))
        res.sendStatus(204)

    } catch (err) {
        if (err.code === db.NO_PROP) {
            res.status(400).send(noPropError)
            return
        }
        throw err
    }
})


module.exports = router
