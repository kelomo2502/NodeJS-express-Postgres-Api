// routes/productRoutes.js
const express = require('express');
const { addProduct, getProducts } = require('../controllers/productController');
const { verifyAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', verifyAdmin, addProduct);
router.get('/', getProducts);

module.exports = router;

