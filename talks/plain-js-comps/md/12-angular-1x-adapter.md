# Angular 1.x Adapter

------

<!-- .slide: data-title="Angular 1.x Adapter" data-state="somestate" data-menu-title="Usage" -->

```html
<!DOCTYPE html>
<html>
<head>
  <title>Giphy: Angular 1</title>
  <link href="./Giphy.css" rel="stylesheet" type="text/css" />
</head>
<body ng-controller="MainCtrl">
  <div ng-app="myApp">
    <h3>Giphy Angular 1.x Directive</h3>
    <my-giphy></my-giphy>
  </div>

  <script src="./src/Giphy.js"></script>
  <script src="./libs/angular.js/1.5.4/angular.js"></script>
  <script src="./src/giphy.directive.js"></script>
  <script src="./src/app.js"></script>
</body>
</html>
```
<!-- .element: class="stretch" -->

<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="5">Link in the CSS for the Giphy library</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="7">Let Angular know what Controller to use</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="8">Let Angular know what Application to use</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="10">Use Angular `my-giphy` Directive Adapter</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="13">Include the Giphy Library</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="14">Include the Angular Framework</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="15">Include the custom Angular Directive</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="16">Include the main Angular Application</span>

------

## App Module

<!-- .slide: data-title="Angular 1.x Adapter" data-state="somestate" -->

```js
// app.js
( function( app ) {
	app.controller( "AppController", function( $scope ) {
		$scope.name = "World";
	} );
}( angular.module( "myApp", [
	"giphy"
] ) ) );
```

<span class="fragment current-only focus-text" data-code-focus="6-8">The `myApp` modules depends on the `giphy` module</span>
<span class="fragment current-only focus-text" data-code-focus="3-5">The `AppController` will have a `$scope.name` set to "World"</span>

------

## Adapter

<!-- .slide: data-title="Angular 1.x Adapter" data-state="somestate" -->

```js
// giphy.directive.js
angular.module( "giphy", [] )
	.directive( "myGiphy", function() {
		return {
			restrict: "E",
			replace: "true",
			template: "<input />",
			link: function( scope, el, atts ) {
				this.giphy = new Giphy( el[ 0 ], {} );
			}
		};
	} );
```

<span class="fragment current-only focus-text" data-code-focus="2">This is its own `giphy` module</span>
<span class="fragment current-only focus-text" data-code-focus="3">The `giphy` module has a `myGiphy` directive</span>
<span class="fragment current-only focus-text" data-code-focus="4-11">Directive is an `input` <strong>E</strong>lement without a wrapper element</span>
<span class="fragment current-only focus-text" data-code-focus="9">Create a `Giphy` object passing in the element and options<span>

Notes:

TODO: Support attributes!!!!

------

## Resources

<!-- .slide: data-title="Angular 1.x Adapter" data-state="resources" -->

* [Source Code](https://github.com/elijahmanor/framework-independent-javascript-components/tree/master/src/7-angular1-adapter)
