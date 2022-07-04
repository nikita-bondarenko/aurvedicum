const router = require('express').Router()
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




