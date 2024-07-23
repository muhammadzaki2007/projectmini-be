module.exports = (app) => {
    const kastangel = require("../controllers/kastangel.controllers")
    let router = require("express").Router()

    router.get("/readall", kastangel.readAll)
    router.post("/create", kastangel.create)
    router.put("/update/:id", kastangel.update)
    router.delete("/delete/:id", kastangel.delete)
    router.get("/readid/:id", kastangel.readById)

    app.use("/api/kastangel", router)

} 