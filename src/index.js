import MetaService from './meta-service';
import MetaDirective from './meta-directive';

angular.module('mr-angular-meta', [])
  .service('MetaService', MetaService)
  .directive('MetaDirective', MetaDirective);
