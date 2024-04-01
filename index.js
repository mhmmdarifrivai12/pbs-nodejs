const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const db = require('./config.js');
const response = ('./response.js')

// Menggunakan body-parser middleware
app.use(bodyParser.json());

// Get data produk
app.get('/produk', (req, res) => {
    db.query('SELECT * FROM produk', (error, results) => { 
        if (error) {
            console.error(error);
            res.status(500).send("Internal server error");
        } else {
            res.json(results);
        }
    });
});
// Insert data (POST) produk
app.post('/produk', (req, res) => {
    const { nama_produk, harga, stok } = req.body;
    const values = { nama_produk, harga, stok };

    db.query('INSERT INTO produk SET ?', values, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Gagal menambahkan data produk.");
        } else {
            // Ambil kembali data yang baru ditambahkan
            db.query('SELECT * FROM produk WHERE id_produk = ?', result.insertId, (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).send("Internal server error");
                } else {
                    res.json({
                        message: "Data produk berhasil ditambahkan.",
                        data: results[0] // Mengirimkan detail data yang baru ditambahkan
                    });
                }
            });
        }
    });
});

// Get data Pelanggan
app.get('/pelanggan', (req, res) => {
    db.query('SELECT * FROM Pelanggan', (error, results) => { 
        if (error) {
            console.error(error);
            res.status(500).send("Internal server error");
        } else {
            res.json(results);
        }
    });
});
// Insert data Pelanggan (POST)
app.post('/pelanggan', (req, res) => {
    const { nama_pelanggan, alamat, email } = req.body;
    const values = { nama_pelanggan, alamat, email };

    db.query('INSERT INTO Pelanggan SET ?', values, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Gagal menambahkan data pelanggan.");
        } else {
            // Ambil kembali data yang baru ditambahkan
            db.query('SELECT * FROM Pelanggan WHERE id_pelanggan = ?', result.insertId, (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).send("Internal server error");
                } else {
                    res.json({
                        message: "Data pelanggan berhasil ditambahkan.",
                        data: results[0] // Mengirimkan detail data yang baru ditambahkan
                    });
                }
            });
        }
    });
});

// Get data Transaksi
app.get('/transaksi', (req, res) => {
    db.query('SELECT * FROM Transaksi', (error, results) => { 
        if (error) {
            console.error(error);
            res.status(500).send("Internal server error");
        } else {
            res.json(results);
        }
    });
});
// Insert data Transaksi (POST)
app.post('/transaksi', (req, res) => {
    const { id_pelanggan, tanggal_transaksi, total } = req.body;
    const values = { id_pelanggan, tanggal_transaksi, total };

    db.query('INSERT INTO Transaksi SET ?', values, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Gagal menambahkan data transaksi.");
        } else {
            // Ambil kembali data yang baru ditambahkan
            db.query('SELECT * FROM Transaksi WHERE id_transaksi = ?', result.insertId, (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).send("Internal server error");
                } else {
                    res.json({
                        message: "Data transaksi berhasil ditambahkan.",
                        data: results[0] // Mengirimkan detail data yang baru ditambahkan
                    });
                }
            });
        }
    });
});


// GET data Detail Transaksi (GET)
app.get('/detail_transaksi', (req, res) => {
    db.query('SELECT * FROM Detail_Transaksi', (error, results) => { 
        if (error) {
            console.error(error);
            res.status(500).send("Internal server error");
        } else {
            res.json(results);
        }
    });
});
// Insert data Detail_Transaksi (POST)
app.post('/detail_transaksi', (req, res) => {
    const { id_transaksi, id_produk, jumlah, subtotal } = req.body;
    const values = { id_transaksi, id_produk, jumlah, subtotal };

    db.query('INSERT INTO Detail_Transaksi SET ?', values, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Gagal menambahkan data detail transaksi.");
        } else {
            // Ambil kembali data yang baru ditambahkan
            db.query('SELECT * FROM Detail_Transaksi WHERE id_detail_transaksi = ?', result.insertId, (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).send("Internal server error");
                } else {
                    res.json({
                        message: "Data detail transaksi berhasil ditambahkan.",
                        data: results[0] // Mengirimkan detail data yang baru ditambahkan
                    });
                }
            });
        }
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
