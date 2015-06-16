var express = require('express');
var router = express.Router();
var calc = require('./calc.js');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var depCity = req.body.departure;
  var arrCity = req.body.arrival;
  var bagsNum = req.body.bags;
  var classSel = req.body.flightClass;
  var weefee = req.body.wifi;
  var disc = req.body.disCode;
  var price = calc.discount(disc) * calc.routeCost(depCity, arrCity) + calc.classCost(classSel) + calc.bagsCost(bagsNum) + calc.wifiCost(weefee);

  res.render('index', {title: "Air Travel Calculator", output: "The cost of your flight is $" + price});
});


module.exports = router;
