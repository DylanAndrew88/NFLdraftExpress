
  //Global Variables
  const express = require('express');
  const sequelize = require('sequelize');
  const db = require('pg');
  const models = require('./models');
  const mustacheExpress = require('mustache-express');
  const nfl2017draftpicks = require('./models/nfl2017draftpicks.js');
  const nfl2018draftpicks = require('./models/nfl2018draftpicks.js');
  const nflcoaches2018 = require('./models/nflcoaches2018.js');
  const nfl2018freeagents = require('./models/nfl2018freeagents.js');

  const app = express();

  //View Engine
  app.engine('mustache', mustacheExpress());
  app.set('view engine', 'mustache');
  app.set('views', './views');
  app.set('port', (process.env.PORT || 3005));
  app.use('/public',express.static(__dirname + '/public'));

  //Routes
  app.get('/', function(req, res) {
    res.render('index');
  });

  app.get('/draft2017_round1', function(req, res) {
    models.nfl2017draftpicks.findAll({where: {roundnumber: 1}, order: [['picknumberround']]}).then(function(picks){
    res.render('draft2017_round1', {picks: picks});
    });
  });

  app.get('/draft2017_round2', function(req, res) {
    models.nfl2017draftpicks.findAll({where: {roundnumber: 2}, order: [['picknumberround']]}).then(function(picks){
    res.render('draft2017_round2', {picks: picks});
    });
  });

  app.get('/draft2018_round1', function(req, res) {
    models.nfl2018draftpicks.findAll({where: {roundnumber: 1}, order: [['picknumberround']]}).then(function(picks){
    res.render('draft2018_round1', {picks: picks});
    });
  });

  app.get('/draft2018_round2', function(req, res) {
    models.nfl2018draftpicks.findAll({where: {roundnumber: 2}, order: [['picknumberround']]}).then(function(picks){
    res.render('draft2018_round2', {picks: picks});
    });
  });

  app.get('/head_coaches2018', function(req, res) {
    models.nflcoaches2018.findAll({order: [['id']]}).then(function(picks){
    res.render('head_coaches2018', {picks: picks});
    });
  });

  app.get('/free_agentQBs2018', function(req, res) {
    models.nfl2018freeagents.findAll({where: {position: 'QB'}, order: [['id']]}).then(function(picks){
    res.render('free_agentQBs2018', {picks: picks});
    });
  });

  app.get('/free_agentCBs2018', function(req, res) {
    models.nfl2018freeagents.findAll({where: {position: 'CB'}, order: [['id']]}).then(function(picks){
    res.render('free_agentCBs2018', {picks: picks});
    });
  });

  app.get('/free_agentWRs2018', function(req, res) {
    models.nfl2018freeagents.findAll({where: {position: 'WR'}, order: [['id']]}).then(function(picks){
    res.render('free_agentWRs2018', {picks: picks});
    });
  });

  //Listening
  app.listen(app.get('port'), function() {
    console.log('Listening on Port 3005');
  });
