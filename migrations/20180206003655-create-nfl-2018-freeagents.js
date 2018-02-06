'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('nfl2018freeagents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      currentteam: {
        type: Sequelize.STRING
      },
      newteam: {
        type: Sequelize.STRING
      },
      player: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      picwidth: {
        type: Sequelize.STRING
      },
      nfllogo: {
        type: Sequelize.STRING
      },
      playerimg: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('nfl2018freeagents');
  }
};
