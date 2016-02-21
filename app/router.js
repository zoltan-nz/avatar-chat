import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('avatar', { path: '/avatar/:avatar_id' }, function() {
    this.route('all');
    this.route('filtered');
  });
});

export default Router;
