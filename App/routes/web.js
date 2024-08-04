module.exports = (app) => {
const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/upload');

router.post('/upload', uploadController.uploadFiles);
router.get('/images', uploadController.getImages);

module.exports = router;

app.use('/api', router);
}