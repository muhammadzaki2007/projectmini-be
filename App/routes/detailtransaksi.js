module.exports = (app) => {
    const transaksi = require("../controllers/detailtransaksi.controllers")
    let router = require("express").Router()

    router.get("/readall", transaksi.readAll)
    router.post("/create", transaksi.create)
    router.put("/update/:id", transaksi.update)
    router.delete("/delete/:id", transaksi.delete)
    router.get("/readid/:id", transaksi.readById)

    app.use("/api/dtransaksi", router)
}
