(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.MrAngularMeta = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./meta-directive":2,"./meta-service":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function MetaDirective($compile) {
  return {
    restrict: 'A',
    link: function link($scope, $element) {
      var elems = $compile(TMPL)($scope);
      $element.prepend(elems);
    }
  };
};

var TMPL = '\n<title ng-bind-template="{{ meta.title }}"></title>\n<meta name="description" content="{{ meta.description }}" />\n<meta name="prerender-status-code" content="{{ meta.status }}">\n<link rel="canonical" ng-href="{{ meta.url }}" />\n<meta property="og:site_name"\n  ng-if="meta.siteName"\n  content="{{ meta.siteName }}" />\n<meta property="og:url"\n  ng-if="meta.url"\n  content="{{ meta.url }}" />\n<meta property="og:title"\n  ng-if="meta.title"\n  content="{{ meta.title }}" />\n<meta property="og:type"\n  ng-if="meta.type"\n  content="{{ meta.type }}" />\n<meta property="og:description"\n  ng-if="meta.description"\n  content="{{ meta.description }}" />\n<meta property="og:image"\n  ng-if="meta.image"\n  content="{{ meta.image }}" />\n<meta name="twitter:card"\n  ng-if="meta.twitterHandle"\n  content="summary_large_image">\n<meta name="twitter:site"\n  ng-if="meta.twitterHandle"\n  content="{{ meta.twitterHandle }}">\n<meta name="twitter:title"\n  ng-if="meta.title"\n  content="{{ meta.title }}">\n<meta name="twitter:description"\n  ng-if="meta.description"\n  content="{{ meta.description }}">\n<meta name="twitter:image"\n  ng-if="meta.image"\n  content="{{ meta.image }}">\n';

exports['default'] = ['$compile', MetaDirective];
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MetaService = (function () {
  function MetaService($rootScope, $location) {
    _classCallCheck(this, MetaService);

    this.$rootScope = $rootScope;
    this.$location = $location;

    this.stack = [];
    this.top = null;
  }

  _createClass(MetaService, [{
    key: 'push',
    value: function push() {
      var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var top = this.top;
      var loc = this.$location;

      if (!data.url) {
        data.url = loc.absUrl();
      }

      if (top) {
        if (!data.siteName) {
          data.siteName = top.siteName;
        }

        if (!data.title) {
          data.title = top.title;
        }

        if (!data.image) {
          data.image = top.image;
        }

        if (!data.description) {
          data.description = top.description;
        }

        if (!data.type) {
          data.type = top.type;
        }

        if (!data.twitterHandle) {
          data.twitterHandle = top.twitterHandle;
        }

        if (!data.status) {
          data.status = top.status;
        }
      }

      if (!data.type) {
        data.type = 'website';
      }

      if (!data.status) {
        data.status = 200;
      }

      data.image = toAbsUrl(data.image);

      data.url = toAbsUrl(data.url);

      this.stack.push(data);
      this.top = data;
      this.$rootScope.meta = this.top;
    }
  }, {
    key: 'pop',
    value: function pop() {
      if (this.stack.length > 1) {
        this.stack.pop();
      }

      this.top = this.stack[this.stack.length - 1];
      this.$rootScope.meta = this.top;
    }
  }]);

  return MetaService;
})();

function toAbsUrl(url) {
  if (!url) {
    return null;
  }

  if (url.indexOf('http') === 0) {
    return url;
  }

  if (url.indexOf('//') === 0) {
    return '' + window.location.protocol + url;
  }

  if (url.indexOf('/') === 0) {
    return window.location.protocol + '//' + window.location.host + url;
  }

  return window.location.protocol + '//' + window.location.host + '/' + url;
}

exports['default'] = ['$rootScope', '$location', MetaService];
module.exports = exports['default'];

},{}]},{},[1])(1)
});
//# sourceMappingURL=mr-angular-meta.js.map
