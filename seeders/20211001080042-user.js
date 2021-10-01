'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Users', [
      {
       nama : 'Kelvin', 
       email : 'kelvin_admin@mail.com',
       password : 'kelvinadmin',
       contact : '123456789',
       roleId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     }
   ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});

  }
};
