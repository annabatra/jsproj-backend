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

// hämta rätt inloggad user
router.get("/:email", (req, res, next) => {
    var email = req.params.email;
    db.get("SELECT * FROM users WHERE email = ?",
        email,
        (err, row) => {
        const data = {
            email: email,
            depot: row.depot,
            cookie1: row.cookie1,
            cookie2: row.cookie2,
            cookie3: row.cookie3
        }
        res.json(data);
    });
});

// uppdatera userns depå
router.post("/", (req, res, next) => {
    console.log(req);
    const deposit = req.body.changedepo;
    const epost = req.body.email;

    console.log(deposit);
    console.log(epost);

    db.run("UPDATE users SET depot = depot + (?) WHERE email = (?)",
    deposit,
    epost, (err) => {
        if (err) {
            console.log(err);
        }
        res.status(201).json({
            data: {
                title: "Got a POST request, sending back 201 Created",
                msg: "funds added to user depot"
            }
        });
    });
});

module.exports = router;
