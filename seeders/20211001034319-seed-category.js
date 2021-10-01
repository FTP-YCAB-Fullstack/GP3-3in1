'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.buIkInsert('Categorys', [{
     categoryId: 1,
     categoryName: "Sepatu Casual"
   },
   {
    categoryId: 2,
    categoryName: "Sepatu Sekolah"
   },
   {
    categoryId: 3,
    categoryName: "Sepatu Sports"
   }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.buIkDelete('Categorys', null,{});
  }
};
