// api paths
//get /api/burgers
//get one /api/burgers/:id
//post /api/burgers
//put /api/burgers/:id
//delete /api/burgers

// html paths
// /



var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// index
router.get("/", function (req, res) {
    burger.all(function (result) {
        res.render("index", { burgers: result });
    });
});

// create
router.post("/api/burgers", function (req, res) {
    burger.create(req.body, function (result) {
        res.json({ id: result.insertId });
    });
});

// update
router.put("/api/burgers/:id", function (req, res) {
    burger.update(req.body, req.params.id, function (result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function (req, res) {
    burger.delete(req.params.id, function (result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;