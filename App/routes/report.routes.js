module.exports = (app) => {
let router = require("express").Router()
const report = require('../controllers/report.Api');

// Route untuk mengambil data
router.get('/get/:id', report.readData);

app.use("/api/report", router)
}
