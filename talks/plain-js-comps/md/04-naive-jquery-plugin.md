# Naive jQuery Plugin

------

## Pretty Code

<!-- .slide: data-title="Naive jQuery Plugin" data-state="somestate" -->

https://github.com/Giphy/GiphyAPI

```js
```

------

## Giphy jQuery Plugin

<!-- .slide: data-title="Naive jQuery Plugin" data-state="somestate" -->

https://github.com/Giphy/GiphyAPI

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

<span class="fragment current-only focus-text" data-code-focus="5">Link in the CSS for the jQuery Giphy plugin</span>
<span class="fragment current-only focus-text" data-code-focus="12">Include the jQuery library</span>
<span class="fragment current-only focus-text" data-code-focus="13">Include the jQuery Giphy plugin code</span>
<span class="fragment current-only focus-text" data-code-focus="10, 17">jQuery Giphy plugin augments the input element when the DOM is ready</span>

------

## Demo

<!-- .slide: data-title="Naive jQuery Plugin" data-state="somestate" -->

<!-- TODO: Show demo here... -->

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

<span class="fragment current-only focus-text" data-code-focus="5">Link in the CSS for the jQuery Giphy plugin</span>

------

## Resources

<!-- .slide: data-title="Naive jQuery Plugin" data-state="resources" -->

* [Example Resource](http://elijahmanor.com)
