var express = require('express');
var router = express.Router();
var db = require('../db/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express /shelters' });
});



// router.get('/pets', db.getAllPets);
router.get('/shelters', db.getShelters)


module.exports = router;
