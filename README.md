# mr-angular-meta

Backport from [https://github.com/fd/fd-angular-meta/](https://github.com/fd/fd-angular-meta/).

## Getting started

```js
import MrAngularMeta from './vendor/meta/meta';

angular.module('yourApp', [ MrAngularMeta ]);

angular
    .module('yourApp', [])
    .controller('yourController', function(MetaService) {
        MetaService.push({
            description: 'Custom description',
            image: 'og-image.png',
            siteName: 'Your site name',
            title: 'Your site',
            url: 'http://your-canonical-domain.com'
        });
});
```

```html
<head fd-meta>
</head>
```

## Options

* **description** Description of the current page.
* **image** Link to an image
* **siteName** Name of the website
* **status** of the current page (default to `200`)
* **title** Title of the current page.
* **type** og:type (defaults to `"website"`)
* **twitterHandle** for the the twitter card.
* **url** The cannonical url to the current page (defaults to `$location.absUrl()`)
