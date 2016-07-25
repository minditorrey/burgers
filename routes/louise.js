var express = require('express');
var router = express.Router();
var Louise = require('../models/louise');

router.get('/', (req, res) => {
	console.log(req);
  	Louise.find({}, (err, louises) => {
    res.status(err ? 400 : 200).send(err || louises);
    console.log(louises);
  });
});

router.post('/', (req, res) => {
	console.log(req.body);
  	Louise.create(req.body, err => {
    	res.status(err ? 400 : 200).send(err);
  	});
});

router.route('/likes/:id')
    .put((req, res) => {
    	Louise.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, louise) => {
      		res.status(err ? 400 : 200).send(err || louise);
    	});
	});

router.route('/dislikes/:id')
    .put((req, res) => {
    	Louise.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, louise) => {
      		res.status(err ? 400 : 200).send(err || louise);
    	});
	});
	

module.exports = router;