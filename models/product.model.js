const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  img: {type: String, required: true},
  productId: {type: String, required: true},
});

module.exports = mongoose.model('Product', productSchema);
