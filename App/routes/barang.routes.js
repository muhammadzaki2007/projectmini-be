module.exports = (app) => {
    const barang = require("../controllers/barang.controllers")
    let router = require("express").Router()

    router.get("/", barang.readAll)
    router.post("/", barang.create)
    router.put("/:id", barang.update)
    router.delete("/:id", barang.delete)
    router.get("/:id", barang.readById)

    app.use("/api/barang", router)

} 