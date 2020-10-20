var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.json(presentation);
});

var presentation = `
      <h1>PROJEKT JSRAMVERK, TRADING WOLF OF WALL STREET!<br/><br/></h1>
      <img src="ownlogo.png" className="App-logo" alt="logo" />
      <p>
      Detta ska bli en sida för trading... typ.
      </p>`;

module.exports = router;
