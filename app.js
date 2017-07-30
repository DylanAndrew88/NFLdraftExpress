
  //Global Variables
  const express = require('express');
  const sequelize = require('sequelize');
  const db = require('pg');
  const models = require('./models');
  const mustacheExpress = require('mustache-express');
  const nfl2017draftpicks = require('./models/nfl2017draftpicks.js');

  const app = express();

  //View Engine
  app.engine('mustache', mustacheExpress());
  app.set('view engine', 'mustache');
  app.set('views', './views');
  app.use('/public',express.static(__dirname + '/public'));

  //Routes
  app.get('/', function(req, res) {
    res.render('index');
  });

  app.get('/draft2017_round1', function(req, res) {
    models.nfl2017draftpicks.findAll({where: {roundnumber: 1}}).then(function(picks){
    res.render('draft2017_round1', {picks: picks});
    // for(i=0; i>models.nfl2017draftpicks.picknumberround
    // models.nfl2017draftpicks.findAll({where: {picknumberround: ()}}).then(console.log);
    models.nfl2017draftpicks.findAll({where: {picknumberoverall: 1}}).then(function(topFive){
    console.log(topFive);
    });
    });
  });

  //Listening
  app.listen(3005, function() {
    console.log('Listening on Port 3005');
  })
