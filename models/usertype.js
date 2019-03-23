'use strict';
module.exports = (sequelize, DataTypes) => {
  const userType = sequelize.define('userType', {
    slug: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    tableName: 'userTypes'
  });
  userType.associate = function(models) {
    // associations can be defined here
  };
  return userType;
};