// import express for and burger.js for routing
var express = require('express');
// var router = express.Router();
var db = require('../models')

module.exports = function(app){

    // redirect from '/' to '/burgers'
    app.get('/', function(req, res){
        res.redirect('/burgers')
    });
    // get information for all burgers
    app.get('/burgers', function(req, res){
        db.burgers.findAll({
            // include information on customers
            include: [db.customers]
        }).then(function(dbBurgers){
            res.render('index', {burgers: dbBurgers});
        });
       
    });
    
    // update 'devoured' status in burgers table and add customer who ate
    // burger to customers table
    app.put('/burgers/update/:id', function(req, res){
        console.log(req.body.eater);
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
            // dummy function to fill space
            console.log('next step');
        });
        // add name of person who and what burger they ate to 
        // customers table using input from index.handelbars
        var eater = req.body.eater;
        db.customers.create({
            customer_name: eater,
            burgerId: condition
        }).then(function(){
            res.redirect('/burgers');
        })
    });
    
    // add a new burger to the list in the database
    // using input from index.handelbars
    app.post('/burgers/create', function(req, res){
        db.burgers.create({
            burger_name: req.body.sandwich
        })
        .then(function(){
            res.redirect('/burgers')
        });
    });
    
}
