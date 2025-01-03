
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cart = sequelize.define('Cart', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  userId: { type: DataTypes.UUID, allowNull: false },
  productId: { type: DataTypes.UUID, allowNull: false },
  quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
});

// Define associations
Cart.associate = function (models) {
  Cart.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  Cart.belongsTo(models.Product, { foreignKey: 'productId', as: 'product' });
};

module.exports = Cart;

