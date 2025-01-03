// controllers/wishlistController.js

// Add to Wishlist
exports.addToWishlist = async (req, res) => {
    try {
      const { userId, productId } = req.body;
      const item = await Wishlist.create({ userId, productId });
      res.status(201).json({ message: 'Added to wishlist', item });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Get Wishlist Items
  exports.getWishlist = async (req, res) => {
    try {
      const { userId } = req.params;
      const items = await Wishlist.findAll({ where: { userId }, include: Product });
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  