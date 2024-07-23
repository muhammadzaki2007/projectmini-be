module.exports = (app) => {
    const nastar = require("../controllers/nastar.controllers")
    let router = require("express").Router()

    router.get("/readall", nastar.readAll)
    router.post("/create", nastar.create)
    router.put("/update/:id", nastar.update)
    router.delete("/delete/:id", nastar.delete)
    router.get("/readid/:id", nastar.readById)

    app.use("/api/nastar", router)

} 