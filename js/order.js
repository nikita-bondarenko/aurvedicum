const db = require('../db/index')
const pick = require('lodash/pick')
const router = require('express').Router()
const collection = 'orders'

const unknownProductError = (id) => `Unknown product's ID: ${id}`
const noPropError = 'Needed properties are not found'
const requiredArr = ['name', 'email', 'phone', 'address']

const getErrorData = (requiredArr, body) => {
    const error = requiredArr.reduce((obj, key) => {
        if (!body[key]) {
            obj[key] = 'Поле необходимо заполнить'
        }
        return obj
    }, {})

    return Object.keys(error).length > 0 ? error : false
}

router.post('/', async (req, res) => {
    const error = getErrorData(requiredArr, req.body)
    if (error) {
        res.status(400).json(error)
        return
    }
    const basket = await db.get('baskets', req.body.basketId)
    const statuses = await db.get('status')
    const status = statuses[2]
    const order = Object.assign({}, req.body, { basket, status })
    db.createCollection(collection)
    const orderId = await db.create(collection, order)
    try {
        const orders = await db.delete('baskets', req.body.basketId)
        if (orders) res.status(200).json({ orderId })

    } catch {
        res.sendStatus(404).end()
    }
})

router.get('/', async (req, res) => {

    console.log(req.query)
    let items = await db.find(collection, 'name')
    items = items.sort((a, b) => a.created > b.created ? -1 : 1)
    if (req.query.lowBorderParse) {
        items = items.filter(item => item.created >= Number(req.query.lowBorderParse))
    }
    if (req.query.highBorderParse) {
        items = items.filter(item => item.created <= Number(req.query.highBorderParse))
    }

    if (req.query.statusId) {
        items = items.filter(item => item.status.id === req.query.statusId)
    }

    res.json(db.getPagination(items, pick(req.query, 'limit', 'page')))
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const data = await db.get(collection, id)
        res.status(200).json(data)
    } catch (err) {
        if (err.code === db.NO_ENTITY) {
            res.status(404).send(unknownProductError(id))
            return
        }
        throw err
    }
})

router.patch('/:id', async (req, res) => {
    console.log(req.body)
    const error = getErrorData(requiredArr, req.body)
    if (error) {
        res.status(400).json(error)
        return
    }
    const id = req.params.id
    try {
        await db.createCollection(collection)
        const updateData = req.body
        console.log(req.body.basket)
        await db.update(collection, id, updateData)
        db.delete('baskets', req.body.basket.id).catch(() => res.sendStatus(404).end())

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
        const items = await db.delete(collection, id)
        res.status(200).json(db.getPagination(items, pick(req.query, 'limit', 'page')))
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
