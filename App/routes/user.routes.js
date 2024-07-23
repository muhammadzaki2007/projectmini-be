module.exports = (app) => {
    const user = require("../controllers/user.controllers")
    let router = require("express").Router()

    router.get("/readall", user.readAll)
    router.post("/create", user.create)
    router.put("/update/:id", user.update)
    router.delete("/delete/:id", user.delete)
    router.get("/readid/:id", user.readById)

    app.use("/api/user", router)

} 