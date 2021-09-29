'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderBarang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  orderBarang.init({
    orderDate: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    orderbarangQuantity: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    orderTotalPrice: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    barangId: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    orderId: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      validate: {
        notNull: true
      }
    }
  }, {
    sequelize,
    modelName: 'orderBarang',
  });
  return orderBarang;
};