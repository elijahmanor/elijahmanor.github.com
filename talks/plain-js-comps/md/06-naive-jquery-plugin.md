# Naive jQuery Plugin

Notes:

------

<!-- .slide: data-title="Naive jQuery Plugin" data-state="somestate" data-menu-title="Giphy API" -->

![](./img/giphy-funny-cat.png)
<!-- .element: style="height: 400px;" -->

### [github.com/Giphy/GiphyAPI](https://github.com/Giphy/GiphyAPI)

```
http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmz
```

------

## Giphy jQuery Plugin

<!-- .slide: data-title="Naive jQuery Plugin" data-state="somestate" -->

```html
<!DOCTYPE html>
<html>
<head>
  <title>Giphy</title>
  <link href="./jquery.giphy.css" rel="stylesheet" type="text/css" />
</head>
<body>
  <h1>Giphy jQuery Plugin</h1>

  <input type="search" />

  <script src="https://code.jquery.com/jquery-2.1.4.js"></script>
  <script src="./jquery.giphy.js"></script>
  <script>
  ( function( $ ) {
    $( document ).ready( function() {
      $( "input" ).giphy();
    } );
  }( jQuery ) );
  </script>
</body>
</html>
```
<!-- .element: class="stretch" -->

<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="5">Link in the CSS for the jQuery Giphy plugin</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="12">Include the jQuery library</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="13">Include the jQuery Giphy plugin code</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="10, 17">jQuery Giphy plugin augments the input element when the DOM is ready</span>

------

### Demo

<!-- .slide: data-title="Naive jQuery Plugin" data-state="somestate" -->

![](./img/jquery-giphy-demo.gif)
<!-- .element: style="height: 500px;" -->

------

## Code

<!-- .slide: data-title="Naive jQuery Plugin" data-state="somestate" -->

```js
( function( $ ) {
  $.fn.giphy = function() {
    var items = [];
    var itemIndex = 0;
    var $gif = null;
    var $controls = null;
    var preloaded = [];

    function preload( items ) {
      items.forEach( function( item, index ) {
        preloaded[ index ] = new Image();
        preloaded[ index ].src = item.images.downsized.url;
      } );
    }

    function navigate( difference ) {
      if ( difference < 0 ) {
        if ( itemIndex >= 1 ) { itemIndex--; }
      } else if ( difference > 0 ) {
        if ( itemIndex < items.length - 1 ) { itemIndex++; }
      }
      $gif.attr( "src", items[ itemIndex ].images.downsized.url );
      $controls.attr( "data-count", ( itemIndex + 1 ) + " of " + items.length );
      $gif.blur();
    }

    return this.each( function() {
      var $input = $( this );
      var $giphy = $input.wrap( "<div class='Giphy'></div>" ).closest( ".Giphy" );
      var $search = $( "<div class='Giphy-toggle'></div>" ).appendTo( $giphy );
      $controls = $( "<div class='Giphy-controls' tabindex='0'><span class='Giphy-prev'></span><span class='Giphy-next'></span></div>" ).hide().appendTo( $giphy );
      var $prev = $controls.find( ".Giphy-prev" );
      var $next = $controls.find( ".Giphy-next" );

      $controls.on( "keydown keypress input", function( e ) {
        if ( e.which === 37 ) {
          navigate( -1 );
        } else if ( e.which === 39 ) {
          navigate( +1 );
        }
      } );

      $prev.on( "click", function() {
        navigate( -1 );
      } );

      $next.on( "click", function() {
        navigate( +1 );
      } );

      $search.on( "click", function() {
        $controls.hide();
        $gif.remove();
        $giphy.removeClass( "Giphy--search" );
      } );

      $input.on( "keypress", function( e ) {
        if ( e.which === 13 ) {
          $.ajax( {
            url: "http://api.giphy.com/v1/gifs/search",
            data: {
              q: this.value,
              api_key: "dc6zaTOxFJmzC", // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
              rating: "g"
            }
          } ).then( function( response ) {
            items = ( response && response.data ) || [];
            var item = items && items.length ? items[ 0 ] : {};
            $gif = $( "<img />", {
              src: item.images.downsized.url
            } );

            preload( items );

            $giphy.addClass( "Giphy--search" );
            $controls.show();
            $gif.appendTo( $giphy );
            $controls.attr( "data-count", ( itemIndex + 1 ) + " of " + items.length );
          } );
        }
      } );
    } );
  };
}( jQuery ) );
```
<!-- .element: class="stretch" -->

<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="2">Define the jQuery Plugin off of `$.fn` a.k.a. `jQuery.prototype`</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="3-7">Module global variables used throughout the plugin</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="9-14">preload</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="16-25">Navigation logic</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="27">Iterate over each element matched and return to support chaining</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="28">Save off and wrap the raw DOM Element with jQuery</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="29-33">Build up the markup needed for the plugin</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="35-41">Support keyboard arrow for navigation</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="43-49">Support clicking next and previous buttons for navigation</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="51-55">Support clicking next and previous buttons for navigation</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="57-58">Listen for the enter key in the input to trigger search</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="59-66">Search request to Giphy API</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="66-71">Handle response data from Giphy API</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="73">Preload images returned from Giphy for faster navigation</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="75-78">Update the user interface to indicate search mode</span>

------

## So... It Works

<!-- .slide: data-title="Naive jQuery Plugin" data-state="somestate" -->

![](./img/batman-vs-superman.gif)
<!-- .element: style="height: 400px;" -->

### but it could be better
<!-- .element: class="fragment" -->

------

## Problems with the Code

<!-- .slide: data-title="Naive jQuery Plugin" data-state="somestate" -->

* Rigid (not extensible)<!-- .element: class="fragment" -->
* No Unit or Integration Tests (not testable)<!-- .element: class="fragment" -->
* Tightly Coupled to jQuery<!-- .element: class="fragment" -->

------

## Resources

<!-- .slide: data-title="Naive jQuery Plugin" data-state="resources" -->

* [Giphy API](https://github.com/Giphy/GiphyAPI)
* [Source Code](https://github.com/elijahmanor/framework-independent-javascript-components/tree/master/src/1-jquery)
