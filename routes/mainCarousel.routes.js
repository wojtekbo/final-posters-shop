const express = require('express');
const router = express.Router();

const MainCarousel = require('../models/mainCarousel.model');

router.get('/mainCarousel', async (req, res) => {
  try {
    const result = await MainCarousel.find();
    if (!result) res.status(404).json({product: 'Not found'});
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
