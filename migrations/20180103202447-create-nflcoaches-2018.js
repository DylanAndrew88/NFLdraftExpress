'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('nflcoaches2018s', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      team: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      experience: {
        type: Sequelize.STRING
      },
      nfllogo: {
        type: Sequelize.STRING
      },
      coachpic: {
        type: Sequelize.STRING
      },
      picwidth: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.INTEGER
      },
      updatedAt: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('nflcoaches2018s');
  }
};
