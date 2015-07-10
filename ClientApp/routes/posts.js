import Ember from 'ember';
console.log("Posts model JS file");
export default Ember.Route.extend({
    model: function() {
        return this.store.find('post');
    }
});