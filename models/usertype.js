'use strict';
module.exports = (sequelize, DataTypes) => {
  const userType = sequelize.define('userType', {
    slug: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    tableName: 'userTypes',
    underscored: true,
    freezeTableName: true
  });
  userType.associate = function(models) {
    // associations can be defined here
    userType.hasMany(models.Auth, {
      foreignKey: 'id',
      as: 'queryDetails'
    })
  };
  return userType;
};