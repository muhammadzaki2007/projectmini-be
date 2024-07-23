module.exports = (app) => {
    const putrisalju = require("../controllers/putrisalju.controllers")
    let router = require("express").Router()

    router.get("/readall", putrisalju.readAll)
    router.post("/create", putrisalju.create)
    router.put("/update/:id", putrisalju.update)
    router.delete("/delete/:id", putrisalju.delete)
    router.get("/readid/:id", putrisalju.readById)

    app.use("/api/putrisalju", router)

} 