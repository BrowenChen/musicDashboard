var mongoose = require('mongoose');
var Artist = require('../../models/artist');

module.exports.addArtist = function(req, res) {
	console.log("Adding artists");
	console.log(req.body);

	var artist = new Artist(req.body.artist);
	artist.save(function(err) {
		if (err) {
			res.send(err);
		}
		res.json({artist: artist});
	});
};

module.exports.getAllArtists = function(req, res) {
	Artist.find(function(err, artists) {
		if (err) {
			res.send(err);
		}
		res.json({artists: artists});
	});
};

module.exports.getSingleArtist = function(req, res, id) {
	Artist.findById(id, function(err, artist) {
		if (err) {
			res.send(err);
		}
		res.json({artist: artist});
	});
};

module.exports.updateArtist = function(req, res, id) {
	Artist.findByIdAndUpdate(id, {$set: req.body.artist}, function(err, artist) {
		if (err) {
			res.send(err);
		}
		res.json({artist: artist});
	});
};

module.exports.deleteArtist = function(req, res, id) {
	Artist.findByIdAndRemove(id, function(err) {
		if (err) {
			res.send(err);
		}
		res.sendStatus(200);
	});
};