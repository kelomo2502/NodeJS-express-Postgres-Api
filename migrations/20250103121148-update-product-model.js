'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 1. Remove ProductImage table if it exists
    await queryInterface.dropTable('ProductImages');

    // 2. Add new columns to the Products table
    await queryInterface.addColumn('Products', 'imageUrl1', {
      type: Sequelize.STRING,
      allowNull: false,  // Making this field mandatory
    });

    await queryInterface.addColumn('Products', 'imageUrl2', {
      type: Sequelize.STRING,
      allowNull: true,  // Optional field
    });

    await queryInterface.addColumn('Products', 'imageUrl3', {
      type: Sequelize.STRING,
      allowNull: true,  // Optional field
    });

    await queryInterface.addColumn('Products', 'imageUrl4', {
      type: Sequelize.STRING,
      allowNull: true,  // Optional field
    });

    await queryInterface.addColumn('Products', 'imageUrl5', {
      type: Sequelize.STRING,
      allowNull: true,  // Optional field
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Reverse the changes in case of rollback
    await queryInterface.removeColumn('Products', 'imageUrl1');
    await queryInterface.removeColumn('Products', 'imageUrl2');
    await queryInterface.removeColumn('Products', 'imageUrl3');
    await queryInterface.removeColumn('Products', 'imageUrl4');
    await queryInterface.removeColumn('Products', 'imageUrl5');

    // Recreate the ProductImage table if needed
    await queryInterface.createTable('ProductImages', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      productId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'Products', key: 'id' },
      },
      imageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
};
