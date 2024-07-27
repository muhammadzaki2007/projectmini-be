//mulai kembali dari index models
const dbConfig = require("../config/barang.db.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize (dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
host: dbConfig.HOST,
dialect: dbConfig.dialect,
operatorsAliases: false,
});
// membuat module 
const db = {};
// sequelize
db.Sequelize = Sequelize;
db.sequelize = sequelize;
// model
db.kastangel = require("./kastangel.model.js") (sequelize, Sequelize);
db.kuekacang = require("./kuekacang.model.js") (sequelize, Sequelize);
db.kuesemprit = require("./kuesemprit.model.js") (sequelize, Sequelize);
db.lidahkucing= require("./lidahkucing.model.js") (sequelize, Sequelize);
db.nastar = require("./nastar.model.js") (sequelize, Sequelize);
db.putrisalju = require("./putrisalju.model.js") (sequelize, Sequelize);
db.user = require("./user.model.js") (sequelize, Sequelize);
db.transaksi = require("./transaksi.model.js") (sequelize, Sequelize);
db.order = require("./order.model.js")(sequelize, Sequelize);
db.images = require("./image.model.js")(sequelize, Sequelize);
module.exports = db; 