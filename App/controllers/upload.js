const fs = require("fs");
const path = require("path");
const multer = require("multer");
const db = require("../models");
const Image = db.images;

// Konfigurasi penyimpanan file menggunakan Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'resources/static/assets/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Menambahkan timestamp untuk nama file unik
  }
});

const upload = multer({ storage: storage }).single('file');

const uploadFiles = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(`Error when trying to upload images: ${err}`);
    }

    if (!req.file) {
      return res.status(400).send(`You must select a file.`);
    }

    // memasukkan data ke database
    Image.create({
      name: req.file.originalname,
      path: req.file.path,
      type: req.file.mimetype,
    }).then((image) => {
      res.status(200).send(`File has been uploaded.`);
    }).catch((error) => {
      console.log(error);
      res.status(500).send(`Error when trying to upload images: ${error}`);
    });
  });
};

// Fungsi untuk mendapatkan daftar gambar
const getImages = (req, res) => {
    Image.findAll()
      .then(images => {
        res.status(200).json(images);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(`Error retrieving images: ${error}`);
      });
  };
  
  module.exports = {
    uploadFiles,
    getImages,
  };