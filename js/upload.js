const { Router } = require('express')
const bodyParser = require('body-parser')
const path = require("path")
const multer = require("multer")
const uploadsDir = path.join(__dirname,"..","images")
const fs = require('fs');

const router = Router()


const fileFilter = (req, file, cb) => {
    cb(null, file.mimetype.match(/^image\//))
}

const upload = multer({
    dest: uploadsDir,
    fileFilter,
    limits: {
        fileSize: 10 * 1024 * 1024
    }
})

router.post('/upload',  upload.single('image') , (req, res) => {
    try {
if(req.file) {
    res.json(req.file)
}
    } catch ( error ) {
        console.error(error)
    }
})



module.exports = router