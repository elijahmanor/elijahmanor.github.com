# Example

------

## Pretty Code

<!-- .slide: data-title="Example" data-state="somestate" -->

```js
function linkify( selector ) {
  if( supports3DTransforms ) {

    var nodes = document.querySelectorAll( selector );

    for( var i = 0, len = nodes.length; i &lt; len; i++ ) {
      var node = nodes[i];

      if( !node.className ) {
        node.className += ' roll';
      }
    }
  }
}
```

------

<!-- .slide: data-title="Example" data-state="somestate" data-menu-title="Usage" -->

```html
<section>
  <pre><code>
  // Useless comment.
  alert('hi');
  </pre></code>
  <p class="fragment" data-code-focus="1">
    This focuses on the comment.
  </p>
  <p class="fragment" data-code-focus="1-2">
    Another fragment.
  </p>
</section>
```

<span class="fragment current-only" data-code-focus="1-12">This section is a slide.</span>
<span class="fragment current-only" data-code-focus="2-5">This will be highlighted by `highlight.js`.</span>
<span class="fragment current-only" data-code-focus="6-8">This fragment focuses on the first line.</span>
<span class="fragment current-only" data-code-focus="9-11">This fragment focuses on lines 1 and 2.</span>
<span class="fragment current-only" data-code-focus="1-12">See the next slide for a demo with the contents of this code block.</span>

------

## Demo

<!-- .slide: data-title="Example" data-state="somestate" -->

```js
// Useless comment.
alert('hi');
```

<p class="fragment" data-code-focus="1">This focuses on the comment.</p>
<p class="fragment" data-code-focus="1-2">Another fragment.</p>

------

## Resources

<!-- .slide: data-title="Example" data-state="resources" -->

* [Example Resource](http://elijahmanor.com)
