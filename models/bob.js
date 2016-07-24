'use strict';

var mongoose = require('mongoose');


var bobSchema = new mongoose.Schema({
  quote: { type: String },
  season: { type: Number },
  episode: { type : Number },
  likes: {type: Number, default: 0 },
  dislikes: {type: Number, default: 0 }
});


var bob = mongoose.model('bob', bobSchema);

module.exports = bob;