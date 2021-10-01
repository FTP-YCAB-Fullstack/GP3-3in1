'use strict';

const { type } = require("express/lib/response");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     * 
     * 
     */
     await queryInterface.removeColumn('orderBarangs' , 'orderDate' ); 
     await queryInterface.removeColumn('orderBarangs' , 'orderbarangQuantity' ); 
     await queryInterface.removeColumn('orderBarangs' , 'orderTotalPrice' ); 

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.addColumn('orderBarangs', 'orderDate', {type: Sequelize.STRING});
    await queryInterface.addColumn('orderBarangs', 'orderbarangQuantity', {type: Sequelize.INTEGER});
    await queryInterface.addColumn('orderBarangs', 'orderTotalPrice',{type: Sequelize.INTEGER});

  }
};
