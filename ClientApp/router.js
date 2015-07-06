import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

// Router.map(function() {
//   this.route('artists', function() {
//     this.route('song');
//   });
// });


Router.map(function() {
  this.resource("authors", function() {});

  this.route('artists', function() {
    this.route('song', { path: "song"});
  });
});



export default Router;
