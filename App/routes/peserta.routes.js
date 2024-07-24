module.exports = (app) => {
    const peserta = require("../controllers/peserta.controllers")
    let router = require("express").Router()

    router.get("/", peserta.readAll)
    router.post("/", peserta.create)
    router.put("/:id", peserta.update)
    router.delete("/:id", peserta.delete)
    router.get("/:id", peserta.readById)

    app.use("/api/peserta", router)

}