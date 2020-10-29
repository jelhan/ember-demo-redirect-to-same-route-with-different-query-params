import Application from 'ember-demo-redirect-to-same-route-with-different-query-params/app';
import config from 'ember-demo-redirect-to-same-route-with-different-query-params/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
