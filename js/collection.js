
const db = require('../db/index')
const pick = require('lodash/pick')


const useCollection = (router, name, ...args) => {

    const unknownProductError = (id) => `Unknown product's ID: ${id}`
    const noPropError = 'Needed properties are not found'

    router.get('/', async (req, res) => {
        let items = await db.find(name, pick(req.query, args))
        if (items.length && Object.keys(items[0]).includes('title')) {
            items = items.sort((a, b) => a.title > b.title ? 1 : -1)
        }
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
        if (Object.keys(req.body).includes('volumes') && Object.keys(req.body).includes('categories') && Object.keys(req.body).includes('images')) {
            const emptyErrorText = 'Необходимо заполнить или удалить'
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
            check('brands', 'brandId')
            check('categories', 'categoryId')
            check('images', 'filename')
            descriptions.forEach((section) => {
                if (section.content.some((item) => !item.paragraph)) {
                    const obj = { id: section.id, content: [] }
                    if (!error.descriptions) error.descriptions = []
                    section.content.forEach(part => {
                        if (!part.paragraph) {
                            const body = { id: part.id }
                            body.paragraph = emptyErrorText
                            obj.content.push(body)
                        }
                    })
                    error.descriptions.push(obj)
                }

            })

            if (Object.keys(error).length > 0) {
                res.status(400).json(error).end()
                return
            }
        }

        try {
            console.log('hi')
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