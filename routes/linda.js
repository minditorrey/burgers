var express = require('express');
var router = express.Router();
var Linda = require('../models/linda');

router.get('/', (req, res) => {
	console.log(req);
  	Linda.find({}, (err, lindas) => {
    res.status(err ? 400 : 200).send(err || lindas);
    console.log(lindas);
  });
});

router.post('/', (req, res) => {
	console.log(req.body);
  	Linda.create(req.body, err => {
    	res.status(err ? 400 : 200).send(err);
  	});
});

router.route('/likes/:id')
    .put((req, res) => {
    	Linda.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, linda) => {
      		res.status(err ? 400 : 200).send(err || linda);
    	});
	});

router.route('/dislikes/:id')
    .put((req, res) => {
    	Linda.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, linda) => {
      		res.status(err ? 400 : 200).send(err || linda);
    	});
	});
	

module.exports = router;