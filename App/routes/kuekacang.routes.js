module.exports = (app) => {
    const kuekacang = require("../controllers/kuekacang.controllers")
    let router = require("express").Router()

    router.get("/readll", kuekacang.readAll)
    router.post("/create", kuekacang.create)
    router.put("/update/:id", kuekacang.update)
    router.delete("/delete/:id", kuekacang.delete)
    router.get("/readid/:id", kuekacang.readById)

    app.use("/api/kuekacang", router)

} 