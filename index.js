const express = require('express')
const app = express() 
const port = 3000 
const cors = require('cors')
app.use(cors())

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public/images')))



const bodyPs = require('body-parser'); 
app.use(bodyPs.urlencoded({ extended: false}));
app.use(bodyPs.json());


const kasirRouter = require('./routes/kasir');
app.use( kasirRouter);

const kategoriRouter = require('./routes/kategori');
app.use( kategoriRouter);

const produkRouter = require('./routes/produk');
app.use( produkRouter);


 // Import rute register dan login
 const auth = require('./routes/auth/auth');
 app.use('/api/auth', auth);

app.listen(port, () => {
   
    console.log(`aplikasi berjalan di http:://localhost:${port}`)
})