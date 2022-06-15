
const db = require('../db/index')
const pick = require('lodash/pick')


const useCollection = (router, name, ...args) => {


    const unknownProductError = (id) => `Unknown product's ID: ${id}`
    const noPropError = 'Needed properties are not found'

    router.get('/', async (req, res) => {
        await db.createCollection(name)
        const items = await db.find(name, req.query)
        res.json(db.getPagination(items, pick(req.body, 'limit', 'page', args)))
    })

    router.get('/:id', async (req, res) => {
        const id = req.params.id
        try {
            await db.createCollection(name)
            const data = await db.get(name, id)
            res.json(data)
        } catch (err) {
            if (err.code === db.NO_ENTITY) {
                res.status(404).send(unknownProductError(id))
                return
            }
            throw err
        }
    })

    router.post('/', async (req, res) => {
        try {
            await db.createCollection(name)
            const id = await db.create(name, pick(req.body, args))
            res.header('Location', `${req.protocol}://${req.hostname}/${id}`)
                .sendStatus(201)
        } catch (err) {

            if (err.code === db.NO_PROP) {
                res.status(400).send(noPropError)
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
            await db.createCollection(name)
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



    return router

}

module.exports = useCollection