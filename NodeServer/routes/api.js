var express = require('express');  
var router = express.Router();

var posts = require('./api/post');
var authors = require('./api/author');
var comments = require('./api/comment');
var artists = require('./api/artist');
var songs = require('./api/song');

/* Posts routes */
router.route('/posts')
    .post(function(req,res) { posts.addPost(req,res) })
    .get(function(req,res) { posts.getAllPosts(req,res) });

/* Single post routes */
router.route('/posts/:post_id')
    .get(function(req, res) { posts.getSinglePost(req, res, req.params.post_id) })
    .put(function(req, res) { posts.updatePost(req, res, req.params.post_id) })
    .delete(function(req, res) { posts.deletePost(req, res, req.params.post_id) });

/* Authors routes */
router.route('/authors')  
    .post(function(req,res) { authors.addAuthor(req,res) })
    .get(function(req,res) { authors.getAllAuthors(req,res) });

/* Single author routes */
router.route('/authors/:author_id')
    .get(function(req, res) { authors.getSingleAuthor(req, res, req.params.author_id) })
    .put(function(req, res) { authors.updateAuthor(req, res, req.params.author_id) })
    .delete(function(req, res) { authors.deleteAuthor(req, res, req.params.author_id) });

/* Comments routes */
router.route('/comments')
    .post(function(req,res) { comments.addComment(req,res) })
    .get(function(req,res) { comments.getAllComments(req,res) });

/* Single comment routes */
router.route('/comments/:comment_id')
    .get(function(req, res) { comments.getSingleComment(req, res, req.params.comment_id) })
    .put(function(req, res) { comments.updateComment(req, res, req.params.comment_id) })
    .delete(function(req, res) { comments.deleteComment(req, res, req.params.comment_id) });

/* Artists routes */
router.route('/artists')
    .post(function(req,res) { artists.addArtist(req,res) })
    .get(function(req,res) { artists.getAllArtists(req,res) });

/* Single Artists routes */
router.route('/artists/:artist_id')
    .get(function(req, res) { artists.getSingleArtist(req, res, req.params.artist_id) })
    .put(function(req, res) { artists.updateArtist(req, res, req.params.artist_id) })
    .delete(function(req, res) { artists.deleteArtist(req, res, req.params.artist_id) });

/* Song routes */
router.route('/songs')
    .post(function(req,res) { songs.addSong(req,res) })
    .get(function(req,res) { songs.getAllSongs(req,res) });

/* Single song routes */
router.route('/songs/:song_id')
    .get(function(req, res) { songs.getSingleComment(req, res, req.params.song_id) })
    .put(function(req, res) { songs.updateComment(req, res, req.params.song_id) })
    .delete(function(req, res) { songs.deleteComment(req, res, req.params.song_id) });


module.exports = router;