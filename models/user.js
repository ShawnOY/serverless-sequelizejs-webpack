'use strict'
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {}, {})
  User.associate = function (models) {
    // associations can be defined here
  }

  return User
}
