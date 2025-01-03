const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  category: { type: DataTypes.STRING, allowNull: false },
  stock: { type: DataTypes.INTEGER, defaultValue: 0 },
  imageUrl1: { type: DataTypes.STRING, allowNull: false },  // Mandatory first image field
  imageUrl2: { type: DataTypes.STRING, allowNull: true },   // Optional second image field
  imageUrl3: { type: DataTypes.STRING, allowNull: true },   // Optional third image field
  imageUrl4: { type: DataTypes.STRING, allowNull: true },   // Optional fourth image field
  imageUrl5: { type: DataTypes.STRING, allowNull: true },   // Optional fifth image field
});

// Define associations
Product.associate = function (models) {
  Product.hasMany(models.Cart, { foreignKey: 'productId', as: 'carts' });
  Product.hasMany(models.Wishlist, { foreignKey: 'productId', as: 'wishlists' });
};

module.exports = Product;
