var express = require('express');
var router = express.Router();
var Bob = require('../models/bob');

router.get('/', (req, res) => {
	console.log(req);
  	Bob.find({}, (err, bobs) => {
    res.status(err ? 400 : 200).send(err || bobs);
    console.log(bobs);
  });
});

router.post('/', (req, res) => {
	console.log(req.body);
  	Bob.create(req.body, err => {
    	res.status(err ? 400 : 200).send(err);
  	});
});

router.route('/likes/:id')
    .put((req, res) => {
    	Bob.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, bob) => {
      		res.status(err ? 400 : 200).send(err || bob);
    	});
	});

router.route('/dislikes/:id')
    .put((req, res) => {
    	Bob.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, bob) => {
      		res.status(err ? 400 : 200).send(err || bob);
    	});
	});
	
module.exports = router;