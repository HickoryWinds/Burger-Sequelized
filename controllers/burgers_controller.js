// import express for and burger.js for routing
var express = require('express');
var router = express.Router();
// var burger = require('../models/burger.js');
var db = require('../models')

module.exports = function(app){

    // redirect from '/' to '/burgers'
    app.get('/', function(req, res){
        res.redirect('/burgers')
    });
    // get information for all burgers
    app.get('/burgers', function(req, res){
        db.burgers.findAll({}).then(function(dbBurgers){
            // console.log(res.json(dbBurgers));
            // var hbsObject = {burgers: data};
            res.render('index', {burgers: dbBurgers});
            // res.render('index', dbBurgers);
        });
    });
    
    // update 'devoured' status in table burgers
    app.put('/burgers/update/:id', function(req, res){
        var condition = req.params.id;
        db.burgers.update({
            devoured: true
        },
        {
          where: {
              id: condition
          }  
        })
        .then(function(){
            res.redirect('/burgers');
        });
    });
    
    // add a new burger to the list
    app.post('/burgers/create', function(req, res){
        db.burgers.create({
            burger_name: req.body.sandwich
        })
        .then(function(){
            res.redirect('/burgers')
        });
    });
    
}
    // module.exports = router;
    
    console.log('7')