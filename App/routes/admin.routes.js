module.exports = (app) => {
    const admin = require("../controllers/admin.controllers")
    let router = require("express").Router()

    router.get("/readall", admin.readAll)
    router.post("/create", admin.create)
    router.put("/:id", admin.update)
    router.delete("/:id", admin.delete)
    router.get("/:id", admin.readById)

    app.use("/api/admin", router)

} 