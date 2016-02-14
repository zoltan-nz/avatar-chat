import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  text: DS.attr('string'),
  date: DS.attr('date')
});
