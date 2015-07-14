'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _metaService = require('./meta-service');

var _metaService2 = _interopRequireDefault(_metaService);

var _metaDirective = require('./meta-directive');

var _metaDirective2 = _interopRequireDefault(_metaDirective);

angular.module('mr-angular-meta', []).service('MetaService', _metaService2['default']).directive('mrMeta', _metaDirective2['default']);

exports['default'] = 'mr-angular-meta';
module.exports = exports['default'];
//# sourceMappingURL=index.js.map