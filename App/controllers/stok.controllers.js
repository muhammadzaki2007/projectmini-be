const { where } = require('sequelize');
const db = require('../models');
const stok = db.stok


exports.readAll = async (req, res) => {


    await stok.findAll({where: {id: "1" }})
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
        
         const data_stok = {
        
            elemenData: req.body.elemenData,
           
            //stok
            nastar_stok: req.body.nastar_stok,
            kastangel_stok: req.body.kastangel_stok,
            putrisalju_stok: req.body.putrisalju_stok,
            kuekacang_stok: req.body.kuekacang_stok,
            lidahkucing_stok: req.body.lidahkucing_stok,
            kuesemprit_stok: req.body.kuesemprit_stok,
        }
        
        console.log("data_",data_stok)  
        
          await stok.create(data_stok) //menyimpan data_peserta ke table peserta
        
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
          
            await stok.update(req.body, { where: { id: id}})
          
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
          
            await stok.destroy({ where: { 
          
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
        
            await stok.findOne({where: { id: id}})
        
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


