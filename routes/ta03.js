//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();

const Products = require('../models/product');

const fetch = require('node-fetch');
const Product = require('../models/product');

const products = [];

fetch('https://byui-cse.github.io/cse341-course/lesson03/items.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
      let product = new Product(
        element.tags,
        element.imageUrl,
        element.price,
        element.name,
        element.description
      );
      products.push(product);
    });
  });

  router.get('/', (req, res, next) => {
    res.render('pages/ta03', {
      title: 'Team Activity 03',
      path: '/ta03', // For pug, EJS
      activeTA03: true, // For HBS
      contentCSS: true, // For HBS 
      products: products
    });
  });

  router.post('/ta03', (req, res, next) => {
    console.log(req.body.userInput);
  });


module.exports = router;
