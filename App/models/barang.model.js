const { Sequelize, DataTypes } = require("sequelize")

module.exports = (Sequelize, DataTypes)=>{
    const barang = Sequelize.define("barang ",{
        id:{
           autoIncrement: true,
           type: DataTypes.BIGINT,
           allowNull : false,
           primaryKey: true
        },

        nama:{
            type: DataTypes.STRING(50),
            allowNull: true
        },
       harga:{
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: true,
            primaryKey: false
        },
        deskripsi:{
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: true,
            primaryKey: false
        },
        rasa:{
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: true,
            primaryKey: false
        },
        stok:{
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: true,
            primaryKey: false
        },
        type: {
            type: DataTypes.STRING,
          },
        name: {
            type: DataTypes.STRING,
          },
    },{
        Sequelize,
        tableName : 'produk',
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
    return barang;


}