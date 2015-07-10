import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
    	console.log("Song");
        //return this.store.find('song');
        return ['Hey', 'Soul', 'Sister'];
    }
});
