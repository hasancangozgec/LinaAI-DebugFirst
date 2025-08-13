require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB veritabanına başarıyla bağlanıldı."))
.catch(err => console.error("MongoDB bağlantı hatası:", err));

// Routes
app.get('/', (req, res) => {
    res.send('Yapay Zeka Platformu API Çalışıyor!');
});
app.use('/api/auth', require('./routes/auth'));
app.use('/api/profile', require('./routes/profile'));

// Start Server
app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor.`);
});