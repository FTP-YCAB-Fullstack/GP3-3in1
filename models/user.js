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
<<<<<<< HEAD
    static associate({role}) {
=======
    static associate({Role}) {
>>>>>>> cf9acdb0cae0ec038963bfe818f23512480f9df3
      // define association here
      this.belongsTo(Role, {foreignKey:'roleId'})
    }
  };
  User.init({
    nama: {
     type: DataTypes.STRING(50),
     allowNull: false, 
     validate : {
       notNull: true,
     }
    },
    email:{
      type: DataTypes.STRING(50),
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
      type: DataTypes.INTEGER(50),
      allowNull: false, 
      validate : {
        notNull: true,
      }
     },
    roleId:{
      type: DataTypes.INTEGER(10),
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