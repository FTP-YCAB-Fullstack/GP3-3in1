'use strict';

const bcrypt = require("bcryptjs/dist/bcrypt");


module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    
     await queryInterface.bulkInsert('Users', [
      {
       nama : 'admin', 
       email : 'admin@mail.com',
       password : bcrypt.hashSync('admin') ,
       contact : '123456789',
       role: 'admin',
       createdAt: new Date(),
       updatedAt: new Date()
     }
   ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});

  }
};
