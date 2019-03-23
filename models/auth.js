'use strict';
module.exports = (sequelize, DataTypes) => {
  const Auth = sequelize.define('Auth', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: {
      field: 'createdAt',
      type: DataTypes.DATE,
    },
    updatedAt: {
        field: 'updatedAt',
        type: DataTypes.DATE,
    }
    }, {
      tableName: 'auth'
    });
  
    Auth.associate = function(models) {
    // associations can be defined here
  };
  return Auth;
};