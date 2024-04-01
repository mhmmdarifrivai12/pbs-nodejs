// Memuat modul mysql untuk koneksi dengan database MySQL
const mysql = require('mysql');

// Membuat koneksi dengan database MySQL
const db = mysql.createConnection({
    host: 'localhost', // Nama host database
    user: 'root', // Username untuk mengakses database
    password: '', // Password untuk mengakses database
    database: 'db_minimarket' // Nama database yang digunakan
});

// Menghubungkan ke database
db.connect((err) => {
    if (err) throw err; // Jika terjadi kesalahan saat menghubungkan
    console.log('Database connected'); // Mencetak pesan ke konsol jika berhasil terhubung
});

// Menyediakan koneksi database untuk digunakan di file lain
module.exports = db;
