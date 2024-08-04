const { where } = require('sequelize');
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const db = require('../models');
const putrisalju = db.putrisalju
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'resources/static/assets/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Menambahkan timestamp untuk nama file unik
  }
});



exports.readAll = async (req, res) => {


    await putrisalju.findAll({where: {id: "1" }})
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

    const upload = multer({ storage: storage }).single('file');
//Create Data
exports.create = (req, res) => {
  upload(req, res, (err) => {
    // memasukkan data ke database

    const data_putrisalju = {
      nama: req.body.nama,
      harga: req.body.harga,
      deskripsi: req.body.deskripsi,
      rasa: req.body.rasa,
    };

    console.log("data_",data_putrisalju) 

    putrisalju.create({
      elemenData: req.body.elemenData,
      //kastangel
      nama: req.body.nama,
      harga: req.body.harga,
      deskripsi: req.body.deskripsi,
      rasa: req.body.rasa,
      name: req.file.originalname,
      path: req.file.path,
      type: req.file.mimetype,
    }

    ).then(data => {

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

  })
}

        
        //update data

        exports.update = async (req, res) => {

            const id = req.params.id
          
            await putrisalju.update(req.body, { where: { id: id}})
          
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
          
            await putrisalju.destroy({ where: { 
          
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
        
            await putrisalju.findOne({where: { id: id}})
        
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


        exports.getImages = async(req, res) => {
          Image.findAll()
            .then(images => {
              res.status(200).json(images);
            })
            .catch(error => {
              console.log(error);
              res.status(500).send(`Error retrieving images: ${error}`);
            });
        };
        
       