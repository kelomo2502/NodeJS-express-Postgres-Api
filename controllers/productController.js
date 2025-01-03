// controllers/productController.js
const Product = require('../models/Product');

// Add Product
exports.addProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock,imageUrl1,imageUrl2,imageUrl3,imageUrl4,imageUrl5 } = req.body;
    const product = await Product.create({ name, description, price, category, stock,imageUrl1,imageUrl2,imageUrl3,imageUrl4,imageUrl5 });
    res.status(201).json({ message: 'Product added successfully', product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// controllers/productController.js

// Get Products with Filters, Sorting, and Pagination
exports.getProducts = async (req, res) => {
  try {
    const { category, name, minPrice, maxPrice, sortBy, order = 'ASC', page = 1, limit = 10 } = req.query;

    const filters = {};
    if (category) filters.category = category;
    if (name) filters.name = { [Op.iLike]: `%${name}%` }; // Case-insensitive search
    if (minPrice || maxPrice) {
      filters.price = {};
      if (minPrice) filters.price[Op.gte] = minPrice;
      if (maxPrice) filters.price[Op.lte] = maxPrice;
    }

    const offset = (page - 1) * limit;

    const products = await Product.findAll({
      where: filters,
      order: [[sortBy || 'name', order.toUpperCase()]],
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10),
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
