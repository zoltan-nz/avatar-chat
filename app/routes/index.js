import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('message');
  },

  actions: {
    sendMessage(text, email) {
      this.store.createRecord('message', { email, text }).save();
    }
  }
});
