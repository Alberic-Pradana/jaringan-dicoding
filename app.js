'use strict'

const express = require('express')

const app = express()

// Sesuaikan nama variabel dengan yang lebih deskriptif
const app_port = 8000
const app_host = '0.0.0.0'

// Buat router untuk mengelola logika aplikasi
const router = express.Router()
router.get('/', (req, res) => {
    res.send('Hello, My name is Alberic Pradana!\n')
})

// Gunakan router untuk menangani permintaan
app.use('/', router)

app.listen(app_port, app_host)
console.log(`Running on http://${app_host}:${app_port}`)