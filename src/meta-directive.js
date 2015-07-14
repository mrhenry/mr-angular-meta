function MetaDirective($compile) {
  return {
    restrict: 'A',
    link: function($scope, $element) {
      let elems = $compile(TMPL)($scope);
      $element.prepend(elems);
    }
  };
};

const TMPL = `
<title ng-bind-template="{{ meta.title }}"></title>
<meta name="description" content="{{ meta.description }}" />
<meta name="prerender-status-code" content="{{ meta.status }}">
<link rel="canonical" ng-href="{{ meta.url }}" />
<meta property="og:site_name"
  ng-if="meta.siteName"
  content="{{ meta.siteName }}" />
<meta property="og:url"
  ng-if="meta.url"
  content="{{ meta.url }}" />
<meta property="og:title"
  ng-if="meta.title"
  content="{{ meta.title }}" />
<meta property="og:type"
  ng-if="meta.type"
  content="{{ meta.type }}" />
<meta property="og:description"
  ng-if="meta.description"
  content="{{ meta.description }}" />
<meta property="og:image"
  ng-if="meta.image"
  content="{{ meta.image }}" />
<meta name="twitter:card"
  ng-if="meta.twitterHandle"
  content="summary_large_image">
<meta name="twitter:site"
  ng-if="meta.twitterHandle"
  content="{{ meta.twitterHandle }}">
<meta name="twitter:title"
  ng-if="meta.title"
  content="{{ meta.title }}">
<meta name="twitter:description"
  ng-if="meta.description"
  content="{{ meta.description }}">
<meta name="twitter:image"
  ng-if="meta.image"
  content="{{ meta.image }}">
`;

export default ['$compile', MetaDirective];
