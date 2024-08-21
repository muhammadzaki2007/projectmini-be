const db = require('../models'); // Mengimpor model dari folder models
const Admin = db.admin; // Pastikan nama model sesuai
const Transaksi = db.transaksi;
const DetailTransaksi = db.dtransaksi;

exports.readData = async (req, res) => {
    try {
        const idTransaksi = req.params.id; // Ambil ID transaksi dari parameter
        
        // Ambil data dari tabel transaksi
        const transaksi = await Transaksi.findOne({ where: { id: req.params.id } });
        console.log("ransaksi",transaksi);
        if (!transaksi) {
            return res.status(404).send({ message: "Transaksi tidak ditemukan." });
        }

        // Ambil data detail transaksi
        const detailTransaksi = await DetailTransaksi.findOne({ where: { id_transaksi: idTransaksi } });
        if (!detailTransaksi) {
            return res.status(404).send({ message: "Detail transaksi tidak ditemukan." });
        }

        // Ambil data admin (misalnya, admin yang terkait dengan transaksi)
        const admin = await Admin.findOne({ where: { id: transaksi.id } });

        // Gabungkan data
        const result = {
            nama_kasir: admin ? admin.nama_kasir : null,
            order: transaksi.order,
            id_order: transaksi.id_order,
            id_transaksi: transaksi.id,
            total_pembayaran: transaksi.total_pembayaran,
            detail: detailTransaksi.detail
        };

        res.send(result);
    } catch (err) {
        res.status(500).send({ message: err.message || "Terjadi kesalahan saat mengambil data." });
    }
};
  