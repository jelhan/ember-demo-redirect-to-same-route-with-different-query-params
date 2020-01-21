import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class FooController extends Controller {
  @service router;

  queryParams = ['bar'];
}
