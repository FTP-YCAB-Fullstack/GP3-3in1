'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      // define association here
      // this.hasMany(User, {foreignKey: 'roleId'})
    }
  };
  Role.init({
    role: {
      type: DataTypes.STRING(15),
      allowNull: 'false',
      validate: {
        notNull: false
      }
    }
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};