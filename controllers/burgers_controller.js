//this is our router controller

var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(err, data) {
        if (err) throw err;

        var hdbrsObj = {
            burgers: data
        };
        console.log(hdbrsObj);
        res.render("index", hdbrsObj);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(
        ["burger_name", "devoured"], [req.body.burger_name, req.body.devoured],
        function(result) {
            // Send back the ID of new burger
            res.json({ id: result.insertId });
        }
    );
});





router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    burger.updateOne({ devoured: req.body.devoured }, condition, function(
        result
    ) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});



router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.deleteOne(condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.post("/api/burgers/html", function(req, res) {
    burger.insertOne(
        ["burger_name", "devoured"], [req.body.burger_name, req.body.devoured],
        function(result) {
            res.redirect("/")
        }
    );
});
router.post("/api/burgers/html/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    burger.updateOne({ devoured: req.body.devoured }, condition, function(
        result
    ) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.redirect("/")
        }
    });
});
router.post("/api/burgers/html/del/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.deleteOne(condition, function(result) {

        res.redirect("/")
    });
});
module.exports = router;