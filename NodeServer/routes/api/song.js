var mongoose = require('mongoose');
var Song = require('../../models/song');

module.exports.addSong = function(req, res) {
	console.log("Adding song");
	var song = new Song(req.body.song);
	song.save(function(err) {
		if (err) {
			res.send(err);
		}
		res.json({song: song});
	});
};

module.exports.getAllSongs = function(req, res) {
	Song.find(function(err, songs) {
		if (err) {
			res.send(err);
		}
		res.json({songs: songs});
	});
};

module.exports.getSingleSong = function(req, res, id) {
	Song.findById(id, function(err, song) {
		if (err) {
			res.send(err);
		}
		res.json({song: song});
	});
};

module.exports.updateSong = function(req, res, id) {
	Song.findByIdAndUpdate(id, {$set: req.body.song}, function(err, song) {
		if (err) {
			res.send(err);
		}
		res.json({song: song});
	});
};

module.exports.deleteSong = function(req, res, id) {
	Song.findByIdAndRemove(id, function(err) {
		if (err) {
			res.send(err);
		}
		res.sendStatus(200);
	});
};