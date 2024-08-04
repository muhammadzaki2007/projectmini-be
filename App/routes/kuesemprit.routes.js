module.exports = (app) => {
    const kuesemprit = require("../controllers/kuesemprit.controllers")
    let router = require("express").Router()

    router.get("/readall", kuesemprit.readAll)
    router.post("/create", kuesemprit.create)
    router.put("/update/:id", kuesemprit.update)
    router.delete("/delete/:id", kuesemprit.delete)
    router.get("/readid/:id", kuesemprit.readById)
    router.get('/images', kuesemprit.getImages);

    app.use("/api/kuesemprit", router)

} 