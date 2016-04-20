# jQuery Adapter

------

<!-- .slide: data-title="jQuery Adapter" data-state="somestate" data-menu-title="Usage" -->

```html
<!DOCTYPE html>
<html>
<head>
  <title>Giphy</title>
  <link href="./Giphy.css" rel="stylesheet" type="text/css" />
</head>
<body>
  <h1>Giphy jQuery Plugin</h1>

  <input type="search" />

  <script src="./Giphy.js"></script>
  <script src="https://code.jquery.com/jquery-2.1.4.js"></script>
  <script src="./jquery.giphy.js"></script>
  <script>
  ( function() {
    $( "input" ).giphy( { ajax: { rating: "pg" } } );
  }() );
  </script>
</body>
</html>
```
<!-- .element: class="stretch" -->

<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="5">Link in the CSS for the Giphy library</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="12">Include the Giphy library</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="13">Include the jQuery library</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="14">Include the Giphy jQuery Plugin Adapter</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="17">Select the `input` and invoke the `giphy` jQuery Plugin Adapter</span>

------

## Adapter

<!-- .slide: data-title="jQuery Adapter" data-state="somestate" -->

```js
( function( $, window, document, undefined ) {
	var pluginName = "giphy";

	$.fn[ pluginName ] = function( options ) {
		return this.each( function() {
			var $this = $( this );
			if ( !$this.data( pluginName) ) {
				$this.data( pluginName, new Giphy( this, options ) );
			}
		} );
	};
} ( jQuery, window, document ) );
```

<div class="stretch">
	<p class="fragment current-only focus-text" data-code-focus="4">Define the jQuery Plugin</p>
	<p class="fragment current-only focus-text" data-code-focus="5-10">Iterate over the matched element and return to support chaining</p>
	<p class="fragment current-only focus-text" data-code-focus="6-9">Create an instance of the Plugin object and attach to the element with `$.data()`</p>
</div>

------

## Resources

<!-- .slide: data-title="jQuery Adapter" data-state="resources" -->

* [Source Code](https://github.com/elijahmanor/framework-independent-javascript-components/tree/master/src/5-jquery-adapter)
