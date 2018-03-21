var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;



/* GET users listing. */
router.get('/', (req, res, next) => {
  // res.send('respond with a resource');

  // res.json([{
  // 	id: 1,
  // 	username: "samsepi0l"
  // }, {
  // 	id: 2,
  // 	username: "D0loresH4ze"
  // }]);

    var db;

    MongoClient.connect('mongodb://localhost:27017', (err,client) => {
      if (err) return console.log(err);
      db = client.db('mydndb');
      db.collection('spells').find().toArray((err, result) => {
        if (err) return console.log(err)
        // renders index.ejs
        res.send(result)
      })
    })
});

module.exports = router;
