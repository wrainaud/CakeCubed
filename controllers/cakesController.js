var express = require("express");

var router = express.Router();

var db = require("../models");

router.get("/", function(req, res) {
    res.redirect("/cakes");
});

router.get("/cakes", function(req, res) {
    db.Cake.findAll({
            include: [db.Customer],
            order: [
                ["cake_name", "ASC"]
            ]
        })
        .then(function(dbCake) {
            var hbsObject = {
                cake: dbCake
            };
            return res.render("index", hbsObject);
        });
});

router.post("/cakes/create", function(req, res) {
    db.Cake.create({
            cake_name: req.body.cake_name
        })
        .then(function(dbCake) {
            console.log(dbCake);
            res.redirect("/");
        });
});

router.put("/cakes/update", function(req, res) {
    if (req.body.customer) {
        db.Customer.create({
                customer: req.body.customer,
                CakeId: req.body.cake_id
            })
            .then(function(dbCustomer) {
                return db.Cake.update({
                    devoured: true
                }, {
                    where: {
                        id: req.body.cake_id
                    }
                });
            })
            .then(function(dbCake) {
                res.redirect("/");
            });
    } else {
        db.Cake.update({
                devoured: true
            }, {
                where: {
                    id: req.body.cake_id
                }
            })
            .then(function(dbCake) {
                res.redirect("/");
            });
    }
});

module.exports = router;