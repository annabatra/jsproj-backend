var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = require("../db/database.js");
const bodyParser = require("body-parser");
router.use(bodyParser.json());
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
router.use(express.json());
const jwtSecret = process.env.secret;


// uppdatera userns depå
router.post("/", (req, res, next) => {
    //console.log(req);
    const epost = req.body.email;
    const currentPrice = req.body.currentPrice;
    const id = req.body.id;
    const cookie = "cookie" + id.toString();
    cookie.toString();
    epost.toString();

    var sqlVar = "UPDATE users SET depot = depot + " + currentPrice + ", " + cookie + " = " + cookie + " - 1 WHERE email = " + "'" + epost + "'";

    console.log(sqlVar);

    db.run(sqlVar,
        (err) => {
        if (err) {
            console.log(err);
        }
        res.status(201).json({
            data: {
                title: "Got a POST request, sending back 201 Created",
                msg: "KAKAN ÄR SÅLD"
            }
        });
    });
});

module.exports = router;
