
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.ENUM('customer', 'admin'), defaultValue: 'customer' }
});

User.associate = function (models) {
  User.hasMany(models.Cart, { foreignKey: 'userId', as: 'carts' });
  User.hasMany(models.Wishlist, { foreignKey: 'userId', as: 'wishlists' });
};

module.exports = User;

