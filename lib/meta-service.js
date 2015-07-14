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
//# sourceMappingURL=meta-service.js.map