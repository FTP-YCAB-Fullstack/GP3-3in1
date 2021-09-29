'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Barangs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      barangNama: {
        type: Sequelize.STRING
      },
      barangPrice: {
        type: Sequelize.INTEGER
      },
      barangDes: {
        type: Sequelize.STRING
      },
      barangBrand: {
        type: Sequelize.STRING
      },
      barangQuantity: {
        type: Sequelize.INTEGER
      },
      barangCategoryName: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Barangs');
  }
};