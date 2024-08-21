const { Sequelize, DataTypes } = require("sequelize");
const { kastangel, putrisalju, kuekacang, lidahkucing, kuesemprit } = require(".");

module.exports = (Sequelize, DataTypes)=>{
    const stok = Sequelize.define("stok ",{
        id:{
           autoIncrement: true,
           type: DataTypes.BIGINT,
           allowNull : false,
           primaryKey: true
        },

        nastar_stok:{
            type: DataTypes.STRING(50),
            allowNull: true
        },
       kastangel_stok:{
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: true,
            primaryKey: false
        },
        putrisalju_stok:{
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: true,
            primaryKey: false
        },
        kuekacang_stok:{
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: true,
            primaryKey: false
        },
        lidahkucing_stok: {
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: true,
            primaryKey: false
          },
        kuesemprit_stok: {
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: true,
            primaryKey: false
          }
    },{
        Sequelize,
        tableName : 'stok',
        timestamps: true,
        indexes: [
            {
              name:  "PRIMARY",
              unique: true,
              using: "BTREE",
              fields: [
                {name: "id"},
              ]
            },
        ]
    })
    return stok;


    
}