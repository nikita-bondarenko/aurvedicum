
const db = require('../db/index')
const pick = require('lodash/pick')

const useCollection = (router, name, ...args) => {

    const unknownProductError = (id) => `Unknown product's ID: ${id}`
    const noPropError = 'Needed properties are not found'

    const validateArticleData = (req, res) => {
        const emptyErrorText = 'Необходимо заполнить'
        const error = {}
        const { header, filename } = req.body
        if (!header) error.header = emptyErrorText
        if (!filename && name !== 'additions') error.filename = emptyErrorText
        return (Object.keys(error).length > 0) ? error : false
    }

    const validateContactData = (req, res) => {
        const emptyErrorText = 'Необходимо заполнить'
        const error = {}
        const { header, phone } = req.body
        if (!header) error.header = emptyErrorText
        if (!phone) error.phone = emptyErrorText
        return (Object.keys(error).length > 0) ? error : false
    }
    const validateProductData = (req, res) => {
        const emptyErrorText = 'Необходимо заполнить'

        if (Object.keys(req.body).includes('volumes') && Object.keys(req.body).includes('categories') && Object.keys(req.body).includes('images')) {
            const error = {}
            const { name, volumes, descriptions } = req.body
            if (!name) error.name = emptyErrorText
            volumes.forEach((item) => {
                if (!item.volume || !item.price || !item.quantity) {
                    const obj = { id: item.id }
                    if (!item.volume) obj.volume = emptyErrorText
                    if (!item.price) obj.price = emptyErrorText
                    if (!item.quantity) obj.quantity = emptyErrorText
                    if (!error.volumes) error.volumes = []
                    error.volumes.push(obj)
                }
            })
            const check = (section, property) => {
                req.body[section].forEach((item) => {
                    if (!item[property]) {
                        const obj = { id: item.id }
                        obj[property] = emptyErrorText
                        if (!error[section]) error[section] = []
                        error[section].push(obj)
                    }
                })
            }
            check('categories', 'categoryId')
            check('brands', 'brandId')


            check('images', 'filename')

            return (Object.keys(error).length > 0) ? error : false

        }
    }

    router.get('/', async (req, res) => {
        db.createCollection(name)
        let items = await db.find(name, pick(req.query, args))
        if (items.length && Object.keys(items[0]).includes('title')) {
            items = items.sort((a, b) => a.title > b.title ? 1 : -1)
        }
        if (name === 'articles' || name === 'news') items = items.sort((a, b) => a.created > b.created ? 1 : -1)
        res.json(db.getPagination(items, pick(req.query, 'limit', 'page')))
    })

    router.get('/:id', async (req, res) => {
        const id = req.params.id
        try {
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

        name === 'articles' || name === 'news' || name === 'additions' ? error = validateArticleData(req, res) : 1
        name === 'contacts' ? error = validateContactData(req, res) : 1
        name === 'products' ? error = validateProductData(req, res) : 1

        if (error) {
            res.status(400).json(error).end()
            return
        }
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
        name === 'articles' || name === 'news' || name === 'additions' ? error = validateArticleData(req, res) : 1
        name === 'contacts' ? error = validateContactData(req, res) : 1
        name === 'products' ? error = validateProductData(req, res) : 1
        if (error) {
            console.log(error)
            res.status(400).json(error).end()
            return
        }

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
            const items = await db.delete(name, id)
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
    return router
}

module.exports = useCollection