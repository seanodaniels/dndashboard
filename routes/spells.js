var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;

/* GET users listing. */
router.get("/", (req, res, next) => {
  var db;

  MongoClient.connect(process.env.MONGODB_DNDASH_URI, (err, client) => {
  // MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    if (err) return console.log(err);
    // db = client.db("mydndb");
    db = client.db("heroku_p9db9w4j");
    db
      .collection("spells")
      .find()
      .toArray((err, result) => {
        if (err) return console.log(err);
        // renders index.ejs
        res.send(result);
      });
  });
});

module.exports = router;
