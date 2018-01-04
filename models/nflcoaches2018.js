'use strict';
module.exports = function(sequelize, DataTypes) {
  var nflcoaches2018 = sequelize.define('nflcoaches2018', {
    team: DataTypes.STRING,
    name: DataTypes.STRING,
    experience: DataTypes.STRING,
    nfllogo: DataTypes.STRING,
    coachpic: DataTypes.STRING,
    picwidth: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return nflcoaches2018;
};
