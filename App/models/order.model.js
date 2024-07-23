const { Sequelize, DataTypes } = require("sequelize")

 module.exports = (Sequelize, DataTypes)=>{const order = Sequelize.define("order ",{
        id:{
           autoIncrement: true,
           type: DataTypes.BIGINT,
           allowNull : false,
           primaryKey: true
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
        total_belanja:{
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: true,
            primaryKey: false
        },
        subtotal:{
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: true,
            primaryKey: false
        }
        
    },{
        Sequelize,
        tableName : 'order',
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
    return order;
}