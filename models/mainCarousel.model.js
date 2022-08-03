const mongoose = require('mongoose');

const mainCarouselSchema = new mongoose.Schema({
  title: {type: String, required: true},
  img: {type: String, required: true},
  productId: {type: String, required: true},
});

module.exports = mongoose.model('MainCarousel', mainCarouselSchema);
