const express = require('express');
const router = express.Router();

const Order = require('../models/order.model');

router.post('/orders', async (req, res) => {
  try {
    const {name, surname, phone, email, street, houseNo, apartmentNo, city, zipCode, products, orderTotalPrice} = req.body;
    const newOrder = new Order({
      name: name,
      surname: surname,
      phone: phone,
      email: email,
      street: street,
      houseNo: houseNo,
      apartmentNo: apartmentNo,
      city: city,
      zipCode: zipCode,
      orderTotalPrice: orderTotalPrice,
      products: products,
    });
    await newOrder.save();
    res.json(newOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
