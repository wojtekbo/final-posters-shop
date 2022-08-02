const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  name: {type: String, required: true},
  surname: {type: String, required: true},
  phone: {type: String, required: true},
  email: {type: String, required: true},
  street: {type: String, required: true},
  houseNo: {type: String, required: true},
  apartmentNo: {type: String},
  city: {type: String, required: true},
  zipCode: {type: String, required: true},
  orderTotalPrice: {type: Number, required: true},
  products: {type: Array, required: true},
});

module.exports = mongoose.model('Order', postSchema);
