const router = require("express").Router();
const uploader = require("./../config/cloduinary.config")

router.post('/image', uploader.single('imageData'), (req, res) =>{

    if (!req.file) {
        res.status(500).json({ errorMessage: 'There is an error uploading the file' })
        return
    }

    res.json({ cloudinary_url: req.file.path })
})

module.exports = router