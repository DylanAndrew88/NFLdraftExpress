
  'use strict';
  module.exports = function(sequelize, DataTypes) {
    var nfl2017draftpicks = sequelize.define('nfl2017draftpicks', {
      picknumberround: DataTypes.INTEGER,
      picknumberoverall: DataTypes.INTEGER,
      roundnumber: DataTypes.INTEGER,
      team: DataTypes.STRING,
      player: DataTypes.STRING,
      position: DataTypes.STRING,
      college: DataTypes.STRING,
      tradedfrom: DataTypes.STRING
    }, {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    });
    return nfl2017draftpicks;
  };
