module.exports = (app) => {
    const order = require("../controllers/order.controllers")
    let router = require("express").Router()

    router.get("/readall", order.readAll)
    router.post("/create", order.create)
    router.put("/update/:id", order.update)
    router.delete("/delete/:id", order.delete)
    router.get("/readid/:id", order.readById)

    app.use("/api/order", router)

} 