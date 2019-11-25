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
            include: [db.customers]
        }).then(function(dbBurgers){
            console.log('mmmmmmmmmmmmmmmmmmmmm')
            console.log(dbBurgers)
            res.render('index', {burgers: dbBurgers});
        });
       
    });
    
    // update 'devoured' status in table burgers
    app.put('/burgers/update/:id', function(req, res){
        // console.log(req.params.id);
        // console.log(req.body.devoured);
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
            console.log('next step');
        });
        var eater = req.body.eater;
        db.customers.create({
            customer_name: eater,
            burgerId: condition
        }).then(function(){
            res.redirect('/burgers');
        })
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