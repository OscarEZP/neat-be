'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};