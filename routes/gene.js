var express = require('express');
var router = express.Router();
var Gene = require('../models/gene');

router.get('/', (req, res) => {
	console.log(req);
  	Gene.find({}, (err, genes) => {
    res.status(err ? 400 : 200).send(err || genes);
    console.log(genes);
  });
});

router.post('/', (req, res) => {
	console.log(req.body);
  	Gene.create(req.body, err => {
    	res.status(err ? 400 : 200).send(err);
  	});
});

router.route('/likes/:id')
    .put((req, res) => {
    	Gene.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, gene) => {
      		res.status(err ? 400 : 200).send(err || gene);
    	});
	});

router.route('/dislikes/:id')
    .put((req, res) => {
    	Gene.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, gene) => {
      		res.status(err ? 400 : 200).send(err || gene);
    	});
	});

module.exports = router;