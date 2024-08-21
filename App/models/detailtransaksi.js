const { Sequelize, DataTypes } = require("sequelize");

 module.exports = (Sequelize, DataTypes)=>{
    const dtransaksi = Sequelize.define("detailtransaksi ",{
        id:{
           autoIncrement: true,
           type: DataTypes.BIGINT,
           allowNull : false,
           primaryKey: true
        },

        id_transaksi:{
            type: DataTypes.STRING(50),
            allowNull: true
        },
        waktu:{
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: true,
            primaryKey: false
        },
        activity:{
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: true,
            primaryKey: false
        },
        detail:{
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: true,
            primaryKey: false
        }    
    },{
        Sequelize,
        tableName : 'detaltransaksi',
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
        ],
    
})
    return dtransaksi;
}