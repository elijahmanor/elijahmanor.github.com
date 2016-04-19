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

## Dragula

<!-- .slide: data-title="Good Examples" data-state="somestate" -->

```
```

------

## Resources

<!-- .slide: data-title="Good Examples" data-state="resources" -->

* [`mailcheck.js`](https://github.com/mailcheck/mailcheck)
* [Dragula]()
