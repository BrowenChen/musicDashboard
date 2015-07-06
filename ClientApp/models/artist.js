import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('String'),
	date: DS.attr('Date'),
	duration: DS.attr('Number'),
	info: DS.attr('String'),
	weakness: DS.attr("String")
	// songs: DS.hasMany('Song', { async: true})
});
