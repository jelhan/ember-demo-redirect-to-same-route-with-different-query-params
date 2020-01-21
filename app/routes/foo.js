import Route from '@ember/routing/route';

export default class FooRoute extends Route {
  async beforeModel(transition) {
    if (!transition.to.queryParams.bar) {
      // uncommented next line to fix the bug
      // transition.abort();

      await this.transitionTo('foo', { queryParams: { bar: "1" }});
    }
  }
}
