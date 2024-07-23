const { Sequelize, DataTypes } = require("sequelize")

module.exports = (Sequelize, DataTypes)=>{
    const kastangel = Sequelize.define("kastangel ",{
        id:{
           autoIncrement: true,
           type: DataTypes.BIGINT,
           allowNull : false,
           primaryKey: true
        },

        nama:{
            type: DataTypes.STRING(50),
            allowNull: false
        },
       harga:{
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: false,
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
        tableName : 'kastangel',
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
    return kastangel;
}