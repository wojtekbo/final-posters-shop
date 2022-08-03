const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const path = require('path');

const productsRoutes = require('./routes/products.routes');
const mainCarouselRoutes = require('./routes/mainCarousel.routes');
const ordersRoutes = require('./routes/orders.routes');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '/client/build')));

/* API ENDPOINTS */
app.use('/api', productsRoutes);
app.use('/api', mainCarouselRoutes);
app.use('/api', ordersRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({info: 'Not found... :P'});
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.use((req, res) => {
  res.status(404).send('404 not found...');
});

/* MONGOOSE */
const NODE_ENV = process.env.NODE_ENV;
let dbUri = '';

if (NODE_ENV === 'production') dbUri = `mongodb+srv://${process.env.DB_login}:${process.env.DB_password}@cluster0.rine5a0.mongodb.net/?retryWrites=true&w=majority`;
else if (NODE_ENV === 'test') dbUri = 'mongodb://localhost:27017/postersShopDB';
else dbUri = 'mongodb://localhost:27017/postersShopDB';

mongoose.connect(dbUri, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
