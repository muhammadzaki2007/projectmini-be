module.exports = (app) => {
    const transaksi = require("../controllers/transaksi.controllers")
    const dtransaksi = require("../controllers/detailtransaksi.controllers")
    let router = require("express").Router()
    
    //transaksi
    router.get("/readall", transaksi.readAll)
    router.post("/create", transaksi.create)
    router.put("/update/:id", transaksi.update)
    router.delete("/delete/:id", transaksi.delete)
    router.get("/readid/:id", transaksi.readById)
    //dtransaksi
    router.get("/readall1", dtransaksi.readAll)
    router.post("/create1", dtransaksi.create)
    router.put("/update1/:id", dtransaksi.update)
    router.delete("/delete1/:id", dtransaksi.delete)
    router.get("/readid1/:id", dtransaksi.readById)


    app.use("/api/transaksi", router)

} 