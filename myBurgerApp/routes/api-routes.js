// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/api/burgers/", function(req, res) {
    db.Burgers.findAll({})
      .then(function(dbBurgers) {
        res.json(dbBurgers);
        console.table(dbBurgers.burgers);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/burgers/:id", function(req, res) {
    db.Burgers.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbBurgers) {
        res.json(dbBurgers);
      });
  });

  // POST route for saving a new post
  app.post("/api/burgers", function(req, res) {
    console.log(req.body);
    db.Burgers.create({
      name: req.body.name,
      devoured: req.body.devoured
    })
      .then(function(dbBurgers) {
        res.json(dbBurgers);
      });
  });

  // DELETE route for deleting burgers
  app.delete("/api/burgers/:id", function(req, res) {
    db.Burgers.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbBurgers) {
        res.json(dbBurgers);
      });
  });


  // PUT route for deleting burgers
  app.put("/api/burgers/:id", function(req, res) {
    db.Burgers.update({
      devoured: req.body.devoured
    }, 
    
    {
      id: req.params.id
    })
      .then(function(dbBurgers) {
        res.json(dbBurgers);
      });

  });


};
