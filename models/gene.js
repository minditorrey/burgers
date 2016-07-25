'use strict';

var mongoose = require('mongoose');

var geneSchema = new mongoose.Schema({
  quote: { type: String },
  season: { type: Number },
  episode: { type : Number },
  likes: {type: Number, default: 0 },
  dislikes: {type: Number, default: 0 }
});


var gene = mongoose.model('gene', geneSchema);

module.exports = gene;