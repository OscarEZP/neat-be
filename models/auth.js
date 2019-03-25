'use strict';
module.exports = (sequelize, DataTypes) => {
  const Auth = sequelize.define('Auth', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    user_type_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'userType',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
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
      Auth.belongsTo(models.userType, {
        foreingKey: 'user_type_id',
        onDelete: 'CASCADE'
      })
  };
  return Auth;
};