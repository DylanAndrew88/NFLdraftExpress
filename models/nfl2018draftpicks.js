
  'use strict';
  module.exports = function(sequelize, DataTypes) {
    let nfl2018draftpicks = sequelize.define('nfl2018draftpicks', {
      picknumberround: DataTypes.INTEGER,
      picknumberoverall: DataTypes.INTEGER,
      roundnumber: DataTypes.INTEGER,
      team: DataTypes.STRING,
      player: DataTypes.STRING,
      position: DataTypes.STRING,
      college: DataTypes.STRING,
      tradedfrom: DataTypes.STRING,
      nfllogo: DataTypes.STRING,
      playerpic: DataTypes.STRING,
      collegelogo: DataTypes.STRING,
    }, {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    });
    return nfl2018draftpicks;
  };
