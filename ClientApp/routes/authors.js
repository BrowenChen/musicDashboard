import Ember from 'ember';
console.log("Authors JS route file");

export default Ember.Route.extend({
    model: function() {
        return this.store.find('author');
    }
});
