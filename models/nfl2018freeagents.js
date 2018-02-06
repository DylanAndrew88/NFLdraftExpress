'use strict';
module.exports = function(sequelize, DataTypes) {
  var nfl2018freeagents = sequelize.define('nfl2018freeagents', {
    currentteam: DataTypes.STRING,
    newteam: DataTypes.STRING,
    player: DataTypes.STRING,
    position: DataTypes.STRING,
    picwidth: DataTypes.STRING,
    nfllogo: DataTypes.STRING,
    playerimg: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return nfl2018freeagents;
};
