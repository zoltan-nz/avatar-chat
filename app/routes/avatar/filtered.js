import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    const avatar = this.modelFor('avatar');

    return avatar.get('messages');
  }
});
