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
<<<<<<< HEAD
   return queryInterface.buIkInsert('Barangs', [
    {
     barangNama: "VANS ORIGINAL OLD SKOOL PRO BLACK/GUM",
     barangPrice: 699000,
     barangImage:"https://www.sneakers.co.id/wp-content/uploads/2019/11/img_5ddbe36ed0b66.png",
=======
   return queryInterface.bulkInsert('Barangs', [{
     barangNama: "VANS ORIGINAL OLD SKOOL PRO BLACK/GUM",
     barangPrice: 699000,
    //  barangImage:"https://www.sneakers.co.id/wp-content/uploads/2019/11/img_5ddbe36ed0b66.png",
>>>>>>> e2b7364fd44daefdcc7a1ce28bfce39f6d02c32f
     barangDes: "Vans Old Skool Classic Black White Kualitas Premium, Made In China Kondisi Baru/Newb bahan Canvas, Suede dan Rubber Sole",
     barangBrand: "Vans",
     barangQuantity: 20,
     barangCategoryName:"Sepatu Casual",
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
    barangNama: "Homyped Lucio Sepatu Sekolah",
    barangPrice: 399900,
<<<<<<< HEAD
    barangImage:"https://cdn.elevenia.co.id/g/3/2/9/5/7/5/25329575_B.jpg",
=======
    // barangImage:"https://cdn.elevenia.co.id/g/3/2/9/5/7/5/25329575_B.jpg",
>>>>>>> e2b7364fd44daefdcc7a1ce28bfce39f6d02c32f
    barangDes: "Sepatu sekolah anak hitam 100% ORIGINAL buatan asli INDONESIA",
    barangBrand: "Homyped",
    barangQuantity: 20,
    barangCategoryName:"Sepatu Sekolah",
    createdAt: new Date(),
    updatedAt: new Date()
  }
  ], {})
  },
 
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Barangs', null, {});
  }
};
