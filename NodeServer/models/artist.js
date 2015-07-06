var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArtistSchema = new Schema({
	name: String,
	date: Date,
	duration: Number,
	info: String,
	weakness: String,
	songs: [{ type: mongoose.Schema.ObjectId, ref: 'Song'}]
});

module.exports = mongoose.model('Artist', ArtistSchema);