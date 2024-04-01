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

// Update data produk (PUT)
app.put('/produk/:id', (req, res) => {
    const id_produk = req.params.id;
    const { nama_produk, harga, stok } = req.body;
    const values = { nama_produk, harga, stok };

    db.query('UPDATE produk SET ? WHERE id_produk = ?', [values, id_produk], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Gagal memperbarui data produk.");
        } else {
            res.json({
                message: "Data produk berhasil diperbarui."
            });
        }
    });
});
//delete produk
app.delete('/produk/:id', (req, res) => {
    const id_produk = req.params.id;

    db.query('DELETE FROM produk WHERE id_produk = ?', id_produk, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Gagal menghapus data produk.");
        } else {
            res.json({
                message: "Data produk berhasil dihapus."
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

// Update data pelanggan (PUT)
app.put('/pelanggan/:id', (req, res) => {
    const id_pelanggan = req.params.id;
    const { nama_pelanggan, alamat, email } = req.body;
    const values = { nama_pelanggan, alamat, email };

    db.query('UPDATE pelanggan SET ? WHERE id_pelanggan = ?', [values, id_pelanggan], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Gagal memperbarui data pelanggan.");
        } else {
            res.json({
                message: "Data pelanggan berhasil diperbarui."
            });
        }
    });
});

// Hapus data pelanggan (DELETE)
app.delete('/pelanggan/:id', (req, res) => {
    const id_pelanggan = req.params.id;

    db.query('DELETE FROM pelanggan WHERE id_pelanggan = ?', id_pelanggan, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Gagal menghapus data pelanggan.");
        } else {
            res.json({
                message: "Data pelanggan berhasil dihapus."
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

// Update data transaksi (PUT)
app.put('/transaksi/:id', (req, res) => {
    const id_transaksi = req.params.id;
    const { id_pelanggan, tanggal_transaksi, total } = req.body;
    const values = { id_pelanggan, tanggal_transaksi, total };

    db.query('UPDATE transaksi SET ? WHERE id_transaksi = ?', [values, id_transaksi], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Gagal memperbarui data transaksi.");
        } else {
            res.json({
                message: "Data transaksi berhasil diperbarui."
            });
        }
    });
});
// Hapus data transaksi (DELETE)
app.delete('/transaksi/:id', (req, res) => {
    const id_transaksi = req.params.id;

    db.query('DELETE FROM transaksi WHERE id_transaksi = ?', id_transaksi, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Gagal menghapus data transaksi.");
        } else {
            res.json({
                message: "Data transaksi berhasil dihapus."
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

// Update data detail transaksi (PUT)
app.put('/detail_transaksi/:id', (req, res) => {
    const id_detail_transaksi = req.params.id;
    const { id_transaksi, id_produk, jumlah, subtotal } = req.body;
    const values = { id_transaksi, id_produk, jumlah, subtotal };

    db.query('UPDATE detail_transaksi SET ? WHERE id_detail_transaksi = ?', [values, id_detail_transaksi], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Gagal memperbarui data detail transaksi.");
        } else {
            res.json({
                message: "Data detail transaksi berhasil diperbarui."
            });
        }
    });
});

// Hapus data detail transaksi (DELETE)
app.delete('/detail_transaksi/:id', (req, res) => {
    const id_detail_transaksi = req.params.id;

    db.query('DELETE FROM detail_transaksi WHERE id_detail_transaksi = ?', id_detail_transaksi, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Gagal menghapus data detail transaksi.");
        } else {
            res.json({
                message: "Data detail transaksi berhasil dihapus."
            });
        }
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
