// Memuat modul mysql untuk koneksi dengan database MySQL
const mysql = require('mysql');

// Membuat koneksi dengan database MySQL
const db = mysql.createConnection({
    host: 'sql6.freesqldatabase.com', // Nama host database
    user: 'sql6695750', // Username untuk mengakses database
    password: 'KyklzMYFuw', // Password untuk mengakses database
    database: 'sql6695750' // Nama database yang digunakan
});

// Menghubungkan ke database
db.connect((err) => {
    if (err) throw err; // Jika terjadi kesalahan saat menghubungkan
    console.log('Database connected'); // Mencetak pesan ke konsol jika berhasil terhubung
});

// Menyediakan koneksi database untuk digunakan di file lain
module.exports = db;
