# Good Examples

------

### `npm install --save mailcheck`

<!-- .slide: data-title="Good Examples" data-state="somestate" data-menu-title="mailcheck.js" -->

> "The Javascript library and jQuery plugin that suggests a right domain when your users misspell it in an email address."

![](./img/mailcheck.png)
<!-- .element: style="height: 125px;" -->

<small>Used by [Dropbox](http://dropbox.com/), [Kickstarter](http://kickstarter.com/), [Khan Academy](http://khanacademy.org/), [Lyft](http://lyft.com/), [Minecraft](http://minecraft.net/), [The Verge](http://theverge.com/), etc...</small>

------

## jQuery Usage

<!-- .slide: data-title="Good Examples" data-state="somestate" data-menu-title="mailcheck.js - jQuery Usage" -->

```js
var domains = [ 'gmail.com', 'aol.com' ];
var secondLevelDomains = [ 'hotmail' ]
var topLevelDomains = [ "com", "net", "org" ];

$( "#email" ).on( "blur", function() {
  $( this ).mailcheck( {
    domains: domains,                       // optional
    secondLevelDomains: secondLevelDomains, // optional
    topLevelDomains: topLevelDomains,       // optional
    suggested: function( element, suggestion ) {
      $( "#suggestion" )
        .html( "Did you mean <b>" + suggestion.full + "</i>?" );
    },
    empty: function( element ) {
      $( "#suggestion" ).html( "" );
    }
  } );
} );
```
<!-- .element: class="stretch" -->

<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="1-3,7-9">Optional domain overrides</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="5">Listen to blur event of input element</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="10-13">Provide a suggestion to the user</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="14-16">Clear suggestion if there is none</span>

------

## Vanilla JavaScript Usage

<!-- .slide: data-title="Good Examples" data-state="somestate" data-menu-title="mailcheck.js - Vanilla JavaScript Usage" -->

```js
var email = document.getElementById( "email" );
email.addEventListener( "blur", function() {
  Mailcheck.run( {
    email: this.value,
    domains: domains,                       // optional
    secondLevelDomains: secondLevelDomains, // optional
    topLevelDomains: topLevelDomains,       // optional
    suggested: function( suggestion ) {
      document.getElementById( "suggestion" ).innerHTML =
        "Did you mean <b>" + suggestion.full + "</b>?";
    },
    empty: function() {
      document.getElementById( "suggestion" ).innerHTML = "";
    }
  } );
} );
```

<span class="fragment current-only focus-text" data-code-focus="1-2">Listen to blur event of input element</span>
<span class="fragment current-only focus-text" data-code-focus="3">Manually call `Mailcheck.run`</span>
<span class="fragment current-only focus-text" data-code-focus="4">Provide the value of your input</span>
<span class="fragment current-only focus-text" data-code-focus="5-7">Optional domain overrides</span>
<span class="fragment current-only focus-text" data-code-focus="8-11">Provide a suggestion to the user</span>
<span class="fragment current-only focus-text" data-code-focus="12-14">Clear suggestion if there is none</span>

------

## `npm install dragula --save`

<!-- .slide: data-title="Good Examples" data-state="somestate" data-menu-title="Dragula" -->

> "Drag and drop so simple it hurts http://bevacqua.github.io/dragula/
> Browser support includes every sane browser and IE7+"

------

## Demo

<!-- .slide: data-title="Good Examples" data-state="somestate" data-menu-title="Dragula - Demo" -->

<iframe data-src="http://bevacqua.github.io/dragula/" class="stretch"></iframe>

------

## Vanilla JavaScript Usage

<!-- .slide: data-title="Good Examples" data-state="somestate" data-menu-title="Dragula - Vanilla JavaScript Usage" -->

```js
dragula( containers, {
  isContainer: function( el ) { return false; },
  moves: function( el, source, handle, sibling ) { return true; },
  accepts: function(el, target, source, sibling ) { return true; },
  invalid: function( el, handle ) { return false; },
  direction: 'vertical',
  copy: false,
  copySortSource: false,
  revertOnSpill: true,
  removeOnSpill: true,
  mirrorContainer: document.body,
  ignoreInputTextSelection: true
});
```

<span data-extended class="fragment current-only focus-text" data-code-focus="1">Call the `dragula` function and pass the draggable containers to be used</span>
<span data-extended class="fragment current-only focus-text" data-code-focus="2">You can specify any sort of logic that defines what is a container</span>
<span data-extended class="fragment current-only focus-text" data-code-focus="3">Triggered whenever an element is clicked. Reject drag by returning `false`</span>
<span data-extended class="fragment current-only focus-text" data-code-focus="4">Make sure that `el`, that came from `container`, can be dropped on `target`</span>
<span data-extended class="fragment current-only focus-text" data-code-focus="5">This method should return true for elements that shouldn't trigger a drag</span>
<span data-extended class="fragment current-only focus-text" data-code-focus="6">Y axis when determining dropped element</span>
<span data-extended class="fragment current-only focus-text" data-code-focus="7">Elements are moved by default, not copied</span>
<span data-extended class="fragment current-only focus-text" data-code-focus="8">Reorder elements in source containers</span>
<span data-extended class="fragment current-only focus-text" data-code-focus="9">Spilling will put the element back</span>
<span data-extended class="fragment current-only focus-text" data-code-focus="10">Spilling will `.remove` the element</span>
<span data-extended class="fragment current-only focus-text" data-code-focus="11">DOM element where the mirror element displayed while dragging will be appended to</span>
<span data-extended class="fragment current-only focus-text" data-code-focus="12">Allows users to select input text</span>

------

## Adapters

<!-- .slide: data-title="Good Examples" data-state="somestate" data-menu-title="Dragula - Adapters" -->

* Official [Angular 1.x Adapter](https://github.com/bevacqua/angular-dragula) for `dragula` ([demo](http://bevacqua.github.io/angular-dragula/))
* Official [Angular 2.x Adapter](https://github.com/valor-software/ng2-dragula) for `dragula` ([demo](http://valor-software.com/ng2-dragula/index.html))
* Official [React Adapter](https://github.com/bevacqua/react-dragula) for `dragula` ([demo](http://bevacqua.github.io/react-dragula/))

------

## Resources

<!-- .slide: data-title="Good Examples" data-state="resources" -->

* [mailcheck.js](https://github.com/mailcheck/mailcheck)
* [Dragula](https://github.com/bevacqua/dragula)
