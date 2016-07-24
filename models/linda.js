'use strict';

var mongoose = require('mongoose');

var lindaSchema = new mongoose.Schema({
  quote: { type: String },
  season: { type: Number },
  episode: { type : Number },
  likes: {type: Number, default: 0 },
  dislikes: {type: Number, default: 0 }
});


var linda = mongoose.model('linda', lindaSchema);

module.exports = linda;