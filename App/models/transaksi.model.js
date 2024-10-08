const { sequelize, DataTypes } = require("sequelize")

 module.exports = (sequelize, DataTypes)=>
    {const transaksi = sequelize.define("transaksi",{
        id:{
           autoIncrement: true,
           type: DataTypes.BIGINT,
           allowNull : false,
           primaryKey: true
        },

        order:{
            type: DataTypes.STRING(50),
            allowNull: true
        },
        id_order:{
            type: DataTypes.STRING(50),
            allowNull: true
        },
        id_produk:{
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: true,
            primaryKey: false
        },
        total_pembayaran:{
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: true,
            primaryKey: false
        },
        metode_pembayaran:{
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: true,
            primaryKey: false
        },
        
    },{
        sequelize,
        tableName : 'transaksi',
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
    return transaksi;
}