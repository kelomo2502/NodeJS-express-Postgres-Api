models/Wishlist.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Wishlist = sequelize.define('Wishlist', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  userId: { type: DataTypes.UUID, allowNull: false },
  productId: { type: DataTypes.UUID, allowNull: false },
});

Wishlist.associate = function (models) {
  Wishlist.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  Wishlist.belongsTo(models.Product, { foreignKey: 'productId', as: 'product' });
};
module.exports = Wishlist;

