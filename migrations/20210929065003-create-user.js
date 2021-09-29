'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING(50),
        allowNull: false, 
        validate : {
          notNull: true ,
        }
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false, 
        validate : {
          notNull: true ,
          isEmail: true
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false, 
        validate : {
          notNull: true ,
        }
      },
      contact: {
        type: Sequelize.INTEGER(50),
        allowNull: false, 
        validate : {
          notNull: true ,
        }
      },
      roleId: {
        type: Sequelize.INTEGER(10), 
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
    await queryInterface.dropTable('Users');
  }
};