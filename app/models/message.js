import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  
  avatar: DS.belongsTo('avatar')
});
