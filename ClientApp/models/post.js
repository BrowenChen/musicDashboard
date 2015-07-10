import DS from 'ember-data';


export default DS.Model.extend({
  name: DS.attr('String'),
  date: DS.attr('Date'),
  creator: DS.attr('String'),
  author: DS.belongsTo('author', { async: true }),
  comments: DS.hasMany('comment', { async: true }),
  content: DS.attr('String')
});

// import App from 'app.js';

// App.Post = DS.Model.extend({
//   name: DS.attr('String'),
//   date: DS.attr('Date'),
//   creator: DS.attr('String'),
//   content: DS.attr('String')
// });