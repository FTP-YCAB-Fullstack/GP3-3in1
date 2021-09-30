'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orderBarangs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderDate: {
        type: Sequelize.STRING, 
        allowNull: false,
        validate: {
          notNull: true
        }
      },
      orderbarangQuantity: {
        type: Sequelize.STRING, 
        allowNull: false,
        validate: {
          notNull: true
        }
      },
      orderTotalPrice: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        validate: {
          notNull: true
        }
      },
      barangId: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        validate: {
          notNull: true
        }
      },
      orderId: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        validate: {
          notNull: true
        }
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
    await queryInterface.dropTable('orderBarangs');
  }
};