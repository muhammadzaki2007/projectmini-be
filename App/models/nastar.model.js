const { Sequelize, DataTypes } = require("sequelize")

module.exports = (Sequelize, DataTypes)=>{
    const nastar = Sequelize.define("nastar ",{
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
        }
    },{
        Sequelize,
        tableName : 'nastar',
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
    return nastar;


    
}