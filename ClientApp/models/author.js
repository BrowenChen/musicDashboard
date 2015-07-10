import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('String'),
	registerDate: DS.attr('Date'),
	posts: DS.hasMany('post', { async: true}),
	comments: DS.hasMany('comment', { async: true })
});
