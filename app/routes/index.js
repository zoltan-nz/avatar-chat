import Ember from "ember";

export default Ember.Route.extend({

  model() {
    return this.store.findAll('avatar');

    // return [
    //   {
    //     name: 'Black Mango',
    //     url: 'http://cadeaucavaliers.com/files/boys/vinniehead.jpg'
    //   },
    //
    //   {
    //     name: 'Darth Vader',
    //     url: 'http://bturn.com/wp-content/uploads/2011/11/darth-vader-face.jpeg'
    //   }
    // ];
  },

  actions: {
    addNewAvatar(name, url) {

      this.store.createRecord('avatar', {
        name,
        url
      }).save();

      this.controller.set('name', '');
      this.controller.set('url', '');
    }
  }
});
