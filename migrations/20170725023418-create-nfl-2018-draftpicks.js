
  'use strict';
  module.exports = {
    up: function(queryInterface, Sequelize) {
      return queryInterface.createTable('nfl2018draftpicks', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        picknumberround: {
          type: Sequelize.INTEGER
        },
        picknumberoverall: {
          type: Sequelize.INTEGER
        },
        roundnumber: {
          type: Sequelize.INTEGER
        },
        team: {
          type: Sequelize.STRING
        },
        player: {
          type: Sequelize.STRING
        },
        position: {
          type: Sequelize.STRING
        },
        college: {
          type: Sequelize.STRING
        },
        tradedfrom: {
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        nfllogo: {
          type: Sequelize.STRING
        },
        playerpic: {
          type: Sequelize.STRING
        },
        collegelogo: {
          type: Sequelize.STRING
        }
      });
    },
    down: function(queryInterface, Sequelize) {
      return queryInterface.dropTable('nfl2018draftpicks');
    }
  };
