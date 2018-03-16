var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
  	id: 1,
  	username: "sean"
  }, {
  	id: 2,
  	username: "poop"
  }]);
});

module.exports = router;
