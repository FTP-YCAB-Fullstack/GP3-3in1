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
   return queryInterface.buIkInsert('Categorys', [
    {
     categoryName: "Sepatu Casual"
    },
    {
      categoryName: "Sepatu Sekolah"
    },
    {
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
