var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.json(presentation);
});

var presentation = `
      <h1>Crunchy cookies, bästa stället att tradea kakor!<br/><br/></h1>
      <img src="ownlogo.png" className="App-logo" alt="logo" />
      <p>
      Välkommen till sidan där kakor är vardagen! De är gott med kakor, det är gott med pengar, varför inte kombinera det?
      </p>`;

module.exports = router;
