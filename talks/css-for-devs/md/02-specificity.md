# Specificity
<!-- .slide: data-state="backEndBrian juniorJacob" -->

> Specificity determines, which CSS rule is applied by the browsers --[CSS Specificity: Things You Should Know](http://www.smashingmagazine.com/2007/07/27/css-specificity-things-you-should-know/)

------

## Specificity Hierarchy

<div class="Split">
  <div class="Split-column">
    <div class="fragment">
      <h4>1. Inline Styles</h4>
      <pre class="language-markup"><code>&lt;div style="color: red;"&gt;&lt;/div&gt;</code></pre>
    </div>
    <div class="fragment">
      <h4>2. IDs</h4>
      <pre class="language-css"><code>#updateItem {}
#shoppingCart {}</code></pre>
    </div>
  </div>
  <div class="Split-column">
    <div class="fragment">
      <h4>3. Classes, attributes, & pseudo-classes</h4>
      <pre class="language-css"><code>.selected {}
[href^='http://'] {}
:nth-child(2n+1) {}</code></pre>
    </div>
    <div class="fragment">
      <h4>4. Elements & <br /> psuedo-elements</h4>
      <pre class="language-css"><code>table {}
.fa:after {}</code></pre>
    </div>
  </div>
</div>

------

## How to Measure Specificity

“Start at 0, add 1000 for style attribute, add 100 for each ID, add 10 for each attribute, class or pseudo-class, add 1 for each element name or pseudo-element.

------

## Specificity Games
<!-- .slide: data-state="specificity" data-background="imgs/the-hunger-games.jpeg" -->

<div class="SpecificityGame">
  <div class="Specificity">
    <textarea class="Specificity-input">#nav .selected > a:hover</textarea>
    <div class="Specificity-score">
      <div class="Specificity-value Specificity-value--inline">0</div>
      <div class="Specificity-value Specificity-value--ids">0</div>
      <div class="Specificity-value Specificity-value--classes">0</div>
      <div class="Specificity-value Specificity-value--elements">0</div>
    </div>  
  </div>

  <div class="Specificity">
    <textarea class="Specificity-input">h1 > .myclass[hidden]</textarea>
    <div class="Specificity-score">
      <div class="Specificity-value Specificity-value--inline">0</div>
      <div class="Specificity-value Specificity-value--ids">0</div>
      <div class="Specificity-value Specificity-value--classes">0</div>
      <div class="Specificity-value Specificity-value--elements">0</div>
    </div>  
  </div>

  <button>May the odds be ever in your favor</button>
</div>

------

## Resources

* https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
* https://css-tricks.com/specifics-on-css-specificity/
* http://www.standardista.com/css3/css-specificity/
* http://www.stuffandnonsense.co.uk/archives/css_specificity_wars.html
* http://specificity.keegan.st/
