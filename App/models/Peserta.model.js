const { Sequelize } = require("sequelize")

module.exports = (Sequelize, DataType)=>{
    const peserta = Sequelize.define("peserta ",{
        id:{
           autoIncrement: true,
           type: DataType.BIGINT,
           allowNull : false,
           primaryKey: true
        },

        nama:{
            type: DataType.STRING(50),
            allowNull: true
        },
        alamat: {

            autoIncrement: false,

            type: DataType.TEXT,

            allowNull: false,

            primaryKey: false

          },
    },{
        Sequelize,
        tableName : 'peserta',
        timestamps: true,
        indexes: [
            {
              name:  "PRIMARY",
              unique: true,
              using: "BTREE",
              fields: [
                {name: "id"},
              ]
            }
        ]
    })
    return peserta;
}