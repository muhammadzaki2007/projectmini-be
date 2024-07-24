const { where } = require('sequelize');
const db = require('../models');
const Peserta = db.peserta


exports.readAll = async (req, res) => {


    await Peserta.findAll({where: {id: "1" }})
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
        
         const data_peserta = {
        
            elemenData: req.body.elemenData,
        
            nama: req.body.nama,
            alamat: req.body.alamat,
        
        }
        
        console.log("data_peserta",data_peserta)  
        
          await Peserta.create(data_peserta) //menyimpan data_peserta ke table peserta
        
          .then(data => {
        
            res.send({
        
              message: "Data was insert successfully."
        
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
          
            await Peserta.update(req.body, { where: { id: id}})
          
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
          
            await Peserta.destroy({ where: { 
          
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
        
            await Peserta.findOne({where: { id: id}})
        
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


