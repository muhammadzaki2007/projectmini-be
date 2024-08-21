module.exports = (app) => {
    const stok = require("../controllers/stok.controllers")
    let router = require("express").Router()

    router.get("/readall", stok.readAll)
    router.post("/create", stok.create)
    router.put("/update/:id", stok.update)
    router.delete("/delete/:id", stok.delete)
    router.get("/readid/:id", stok.readById)

    app.use("/api/stok", router)
}