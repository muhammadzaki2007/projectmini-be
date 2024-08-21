const { where } = require('sequelize');
const db = require('../models');
const login = db.login
const register = db.register

exports.readAll = async (req, res) => {


    await login.findAll({where: {id: "1" }})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({ 
                message:
                    err.message || "Maaf, Terjadi kesalahan dalam pengambilan data."
            });
        });
        
    }

    //Create Data

    exports.create = async (req, res) => { 
 
        console.log(req.body)
        
         const data_login = {
        
            elemenData: req.body.elemenData,
           
            //transaks i
            order: req.body.order,
            id_order: req.body.id_order,
            id_produk: req.body.id_produk,
            total_pembayaran: req.body.total_pembayaran,
            metode_pembayaran: req.body.metode_pembayaran,
         }
        console.log(data_login)  

        const id_login = await login.findOne({
          order: [['id', 'DESC']]
        })
        console.log("id =", id_login.id);

          await login.create(data_login) //menyimpan data_peserta ke table peserta
        
          const data_register = {
            id_login: id_login.id,
            waktu: "11:14",
            activity: "login",
            detail: "pembelian produk  " + req.body.order + "dengan total biaya  " + req.body.total_pembayaran + "berhasil"
         }    
        console.log("data_",data_register)  
        
          await register.create(data_register) 
          .then(data => {
        
            res.send({
        
              message: "Data berhasil dimasukkan!"
        
            })
        
            })
        
          .catch(err => {
        
            res.status(500).send({
        
              message:
        
                err.message || "Some error occurred while creating data."
        
            });
        
          })
        
        }

        
        //update data

        exports.update = async (req, res) => {

            const id = req.params.id
          
            await login.update(req.body, { where: { id: id}})
          
            .then(num => {
          
                num == 1 ? res.send({
          
                  message: "Data was updated successfully."
          
                }) : res.send({
          
                  message: `Cannot update Data with id=${id}. Maybe Data was not found or req.body is empty!`
          
                });
          
            })
          
            .catch(err => {
          
              res.status(500).send({
          
                message: `Error updating Data with id=${id}`,
          
                error: err
          
              })
          
            })
          
          }

          //delete data

          exports.delete = async (req, res) => {

            const id = req.params.id
          
            await login.destroy({ where: { 
          
              id: id
          
          }})
          
          .then(num => {
          
            num == 1 ? res.send({
          
              message: "Data was deleted successfully."
          
            }) : res.send({
          
              message: `Cannot delete Data with id=${id}. Maybe Data was not found or req.body is empty!`
          
            });
          
          })
          
            .catch(err => {
          
              res.status(500).send({
          
                message: `Error deleting Data with id=${id}`,
          
                error: err
          
              })
          
            })
          
          }
          
          //readById

          exports.readById = async (req, res) =>{

            const id = req.params.id
        
            await login.findOne({where: { id: id}})
        
            .then(data => {
        
              res.send(data);
        
            })
        
            .catch(err => {
        
              res.status(500).send({
        
                message:
        
                  err.message || "Some error occurred while retrieving data."
        
              });
        
            });
        
        }


