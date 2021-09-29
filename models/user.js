'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    nama: {
     type: DataTypes.STRING,
     allowNull: false, 
     validate : {
       notNull: true,
     }
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false, 
      validate : {
        notNull: true,
        isEmail: true
      }
     },
    password:{
      type: DataTypes.STRING,
      allowNull: false, 
      validate : {
        notNull: true,
      }
     },
    contact:{
      type: DataTypes.NUMBER,
      allowNull: false, 
      validate : {
        notNull: true,
      }
     },
    roleId:{
      type: DataTypes.INTEGER,
      allowNull: false, 
      validate : {
        notNull: true,
      }
     }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};