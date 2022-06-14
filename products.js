const express = require("express")

const pick = require('lodash/pick')

const db = require('./db/index')

const router = express.Router()

const unknownProductError = (id) => `Unknown product's ID: ${id}`


const pickProperties = (body) => pick(body, 'name', 'status', 'volume', 'content')

router.get('/', async (req, res) => {
    await db.createCollection('products')
    const products = await db.find('products', req.query)
    res.json(products)
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        await db.createCollection('products')
        const products = await db.get("products", id)
        res.json(products)
    } catch (err) {
        if (err.code === db.NO_ENTITY) {

            res.status(404).send(unknownProductError(id))
            return
        }
        throw err
    }
})

router.post('/', async (req, res) => {
    await db.createCollection("products")
    const id = await db.create("products", pickProperties(req.body))
    res.header('Location', `${req.protocol}://${req.hostname}/${id}`)
        .sendStatus(201)

})

router.patch('/:id', async (req, res) => {
    const id = req.params.id
    try {
        await db.createCollection('products')
        const updateData = pickProperties(req.body)
        await db.update("products", id, updateData)
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
        await db.createCollection('products')
        await db.delete("products", id)
        res.sendStatus(204)
    } catch (err) {
        if (err.code === db.NO_COLLECTION) {
            res.status(404).send(unknownProductError(id))
            return
        }
        throw err
    }
})


module.exports = router