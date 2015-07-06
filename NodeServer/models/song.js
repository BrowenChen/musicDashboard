var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SongSchema = new Schema({
    artist: { type: mongoose.Schema.ObjectId, ref: 'Artist'},
    date: Date,
    title: String
});

module.exports = mongoose.model('Song', SongSchema);