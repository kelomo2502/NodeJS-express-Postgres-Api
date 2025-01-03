// controllers/cartController.js
const Cart = require('../models/Cart');

// Add Item to Cart
exports.addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const cartItem = await Cart.create({ userId, productId, quantity });
    res.status(201).json({ message: 'Item added to cart', cartItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Cart Items
exports.getCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const cartItems = await Cart.findAll({ where: { userId } });
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
