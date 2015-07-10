import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.belongsTo('author', { async: true }),
  post: DS.belongsTo('post', { async:true }),
  date: DS.attr('Date'),
  content: DS.attr('String')
});
