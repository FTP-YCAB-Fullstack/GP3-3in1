'use strict';

const { type } = require("express/lib/response");

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.removeColumn('orderBarangs' , 'orderDate' ); 
     await queryInterface.removeColumn('orderBarangs' , 'orderbarangQuantity' ); 
     await queryInterface.removeColumn('orderBarangs' , 'orderTotalPrice' ); 

  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.addColumn('orderBarangs', 'orderDate', {type: Sequelize.STRING});
    await queryInterface.addColumn('orderBarangs', 'orderbarangQuantity', {type: Sequelize.INTEGER});
    await queryInterface.addColumn('orderBarangs', 'orderTotalPrice',{type: Sequelize.INTEGER});

  }
};
