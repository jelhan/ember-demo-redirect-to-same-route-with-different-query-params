import EmberRouter from '@ember/routing/router';
import config from 'ember-demo-redirect-to-same-route-with-different-query-params/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('foo');
});
