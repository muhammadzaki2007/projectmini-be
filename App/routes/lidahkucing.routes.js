module.exports = (app) => {
    const lidahkucing = require("../controllers/lidahkucing.controllers")
    let router = require("express").Router()

    router.get("/readall", lidahkucing.readAll)
    router.post("/create", lidahkucing.create)
    router.put("/update/:id", lidahkucing.update)
    router.delete("/delete/:id", lidahkucing.delete)
    router.get("/readid/:id", lidahkucing.readById)
    router.get('/images', lidahkucing.getImages);

    app.use("/api/lidahkucing", router)

} 