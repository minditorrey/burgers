'use strict';

var mongoose = require('mongoose');

var tinaSchema = new mongoose.Schema({
  quote: { type: String },
  season: { type: Number },
  episode: { type : Number },
  likes: {type: Number, default: 0 },
  dislikes: {type: Number, default: 0 }
});


var tina = mongoose.model('tina', tinaSchema);

module.exports = tina;