const { sequelize, DataTypes } = require("sequelize")

module.exports = (sequelize, DataTypes)=>{
    const admin = sequelize.define("admin",{
        id:{
           autoIncrement: true,
           type: DataTypes.BIGINT,
           allowNull : false,
           primaryKey: true
        },

        nama_kasir:{
            type: DataTypes.STRING(50),
            allowNull: true
        },
        id_kasir:{
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: true,
            primaryKey: false
        }
    },{
        sequelize,
        tableName : 'Admin',
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
   return  admin
}