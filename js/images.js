const router = require('express').Router()
const db = require('../db/index')
const fs = require("fs").promises
const path = require('path')
const multer = require('multer')
const { Router } = require('express')
const uploadsDir = path.join(__dirname, "..", "public", "uploads")
const fileFilter = (req, file, cb) => {
    cb(null, file.mimetype.match(/^image\//))
}
const upload = multer({
    dest: uploadsDir,
    fileFilter,
    limits: {
        fileSize: 2 * 1024 * 1024
    }
})
const storage = multer.memoryStorage()

const uploadPhoto = multer({ storage: storage })

router.post("/", upload.single('image'), async (req, res) => {
    if (req.file) {
        res.status(201).json(req.file.filename)

    } else {
        res.sendStatus(400)
    }
})

const researchImages = async () => {
    const images = (await fs.readdir(uploadsDir))
    const products = await db.get('products')
    const usedImages = products.reduce((arr, product) => {
        product.images.forEach(image => arr.push(image.filename))
        return arr
    }, [])
    const unusedImages = images.filter(image => usedImages.every(item => image !== item))
    unusedImages.forEach(image => fs.unlink(path.join(uploadsDir, image))
    )
}
setTimeout(() => researchImages(), 1000 * 60 * 60 * 24 * 7)


router.delete("/", async (req, res) => {
    const image = req.query.filename
    const images = (await fs.readdir(uploadsDir))
    if (!images.includes(image)) {
        return res.sendStatus(404)
    }
    fs.unlink(path.join(uploadsDir, req.query.filename))
    res.sendStatus(200)
})


module.exports = router




