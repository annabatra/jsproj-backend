var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('./db/texts.sqlite');
const db = require("../db/database.js");
const bodyParser = require("body-parser");

// let config = require('../config/config.json');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

router.use(bodyParser.json());
router.use(express.json());


// Route to get cookies content
router.get("/cookies/:id", function(req, res, next) {
    db.each("SELECT * FROM cookies WHERE id = " + req.params.id, function(err, row) {
        const data = {
            data: {
                id: req.params.id,
                title: row.title,
                description: row.description
            }
        }
        res.json(data);
    });
})

// function to verify user
function checkToken(req, res, next) {
    const token = req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, jwtSecret, function(err) {
            if(err) {
                console.log("crashed");
                return res.status(500).json({
                    errors: {
                        status: 500,
                        title: "Token not verified",
                        detail: "Token expired, cannot make changes"
                    }
                })
            }
            console.log("successfully validated token");
            next();

            return undefined;
        });
    } else {
        return res.status(401).json({
            errors: {
                status: 401,
                source: req.path,
                title: "No token",
                detail: "No token provided in request headers"
            }
        });
    }
};



module.exports = router;
