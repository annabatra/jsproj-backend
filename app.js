const express = require("express");
const morgan = require('morgan');

const cors = require('cors');
const presentation = require('./routes/presentation');
const cookies = require('./routes/cookies');
const register = require('./routes/register');
const login = require('./routes/login');
const userpage = require('./routes/userpage');
const pricegraph = require('./routes/pricegraph');
const buy = require('./routes/buy');
const sell = require('./routes/sell');

const app = express();
const port = 3030;


//end of consts

app.use(cors());

// don't show the log when it is test
if (process.env.NODE_ENV !== 'test') {
    // use morgan to log at command line
    app.use(morgan('combined')); // 'combined' outputs the Apache style LOGs
}

app.use('/', presentation);
app.use('/cookies', cookies);
app.use('/register', register);
app.use('/login', login);
app.use('/userpage', userpage);
app.use('/pricegraph', pricegraph);
app.use('/buy', buy);
app.use('/sell', sell);
// This is middleware called for all routes.
// Middleware takes three parameters.
app.use((req, res, next) => {
    console.log(req.method);
    console.log(req.path);
    next();
});

// Add routes for 404 and error handling
// Catch 404 and forward to error handler
// Put this last
app.use((req, res, next) => {
    var err = new Error("Not Found");

    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    res.status(err.status || 500).json({
        "errors": [
            {
                "status": err.status,
                "title":  err.message,
                "detail": err.message
            }
        ]
    });
});

// Start up server
const server = app.listen(port, () => console.log(`Example API listening on port ${port}!`));

module.exports = server;
