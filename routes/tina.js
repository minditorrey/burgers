var express = require('express');
var router = express.Router();
var Tina = require('../models/tina');

router.get('/', (req, res) => {
	console.log(req);
  	Tina.find({}, (err, tinas) => {
    res.status(err ? 400 : 200).send(err || tinas);
    console.log(tinas);
  });
});

router.post('/', (req, res) => {
	console.log(req.body);
  	Tina.create(req.body, err => {
    	res.status(err ? 400 : 200).send(err);
  	});
});

router.route('/likes/:id')
    .put((req, res) => {
    	Tina.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, tina) => {
      		res.status(err ? 400 : 200).send(err || tina);
    	});
	});

router.route('/dislikes/:id')
    .put((req, res) => {
    	Tina.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, tina) => {
      		res.status(err ? 400 : 200).send(err || tina);
    	});
	});
	

module.exports = router;