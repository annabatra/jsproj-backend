var express = require('express');
var router = express.Router();
// const sqlite3 = require('sqlite3').verbose();
const db = require("../db/database.js");
const bodyParser = require("body-parser");

router.use(bodyParser.json()); // for parsing application/json
const bcrypt = require('bcryptjs');
const saltRounds = 5;


// Testing routes with method
router.get("/", function(req, res) {
    const data = {
        data: {
            msg: "Got a GET request"
        }
    };

    res.json(data);
});

router.post("/", (req, res) => {
    console.log(req.body.email + "emailhär");
    console.log(req.body.password + "lösenhär");

    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        db.run("INSERT INTO users (depot, email, cookie1, cookie2, cookie3, password) VALUES (?, ?, ?, ?, ?, ?)",
            0,
            req.body.email,
            0,
            0,
            0,
            hash, (err) => {
                if (err) {
                    console.log(err);
                }
                res.status(201).json({
                    data: {
                        msg: "Got a POST request, sending back 201 Created"
                    }
                });
            });
    });
});

router.put("/", (req, res) => {
    // PUT requests should return 204 No Content
    res.status(204).send();
});

router.delete("/", (req, res) => {
    // DELETE requests should return 204 No Content
    res.status(204).send();
});


module.exports = router;
