'use strict';

var mongoose = require('mongoose');

var louiseSchema = new mongoose.Schema({
  quote: { type: String },
  season: { type: Number },
  episode: { type : Number },
  likes: {type: Number, default: 0 },
  dislikes: {type: Number, default: 0 }
});


var louise = mongoose.model('louise', louiseSchema);

module.exports = louise;