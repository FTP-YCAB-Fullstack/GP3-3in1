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
   return queryInterface.bulkInsert('Categories', [
    {
      categoryName: "Sepatu Casual",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: "Sepatu Sekolah",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: "Sepatu Sports",
      createdAt: new Date(),
      updatedAt: new Date()
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
    return queryInterface.buIkDelete('Categories', null,{});
  }
};
