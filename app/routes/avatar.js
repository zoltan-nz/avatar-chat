import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.find('avatar', params.avatar_id);
  },

  actions: {
    createMessage(text, avatar) {
      this.store.createRecord('message', { text, avatar }).save();
      avatar.save();

      this.controller.set('textMessageFromInput', '');
    }
  }

});
