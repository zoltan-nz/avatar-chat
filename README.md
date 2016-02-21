# Avatar-chat

```
$ ember new avatar-chat
```

Add bootstrap 

```
$ ember install ember-bootstrap
```

Create index route

```
$ ember g route index
```

Add basic array to the model

```javascript
import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return [
      {
        name: 'Black Mango',
        url: 'http://cadeaucavaliers.com/files/boys/vinniehead.jpg'
      },

      {
        name: 'Darth Vader',
        url: 'http://bturn.com/wp-content/uploads/2011/11/darth-vader-face.jpeg'
      }
    ];
  }
});
```

* Add bootstrap to application.hbs
* Wrapp the list in bootstrap's panel style

* Setup database and api server:

```
$ ember install emberfire
```

We need a proper model:

```
$ ember g model avatar name url
```

Create a form to add new avatar

Add action to route

```
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
```

Create a new route /avatar/:avatar_id

Update router.js

```
Router.map(function() {
  this.route('avatar', { path: '/avatar/:avatar_id' })  
});
```

Add model to avatar.js

```
model(params) {
  return this.store.find('avatar', params.avatar_id);
}
```

