# Specificity
<!-- .slide: data-state="backEndBrian juniorJacob" -->

> Specificity determines, which CSS rule is applied by the browsers --[CSS Specificity: Things You Should Know](http://www.smashingmagazine.com/2007/07/27/css-specificity-things-you-should-know/)

------

## Scenario
<!-- .slide: data-title="Specificity" data-state="backEndBrian juniorJacob" -->

<div class="Split">
  <div class="Split-column">
    <div class="fragment">
      <h4>Have you ever wanted to do this...</h4>
      <pre data-codemirror data-mode="text/css" data-line-numbers="false">.big-html-area {
  width: 400px;
  height: 300px;
}</pre>
    </div>
    <div class="fragment">
      <h4>But it didn't work so you did this...</h4>
      <pre data-codemirror data-mode="text/css" data-line-numbers="false">.big-html-area {
  width: 400px !important;
  height: 300px !important;
}</pre>
    </div>
  </div>
  <div class="Split-column">
    <div class="fragment">
      <h4>Or maybe you tried this...</h4>
      <textarea data-codemirror data-mode="text/html" data-line-numbers="false"><div class="big-html-area"
  style="width: 400px; height: 300px;">
</div></textarea>
    </div>
    <div class="fragment">
      <h4>Or even this...</h4>
      <pre data-codemirror data-mode="text/javascript" data-line-numbers="false">$(".big-html-area").css({
  width: '400px',
  height: '300px'
});</pre>
    </div>
  </div>
</div>

------

## Specificity Hierarchy
<!-- .slide: data-title="Specificity" data-state="backEndBrian juniorJacob" -->

<div class="Split">
  <div class="Split-column">
    <div class="fragment">
      <h4>1. Inline Styles</h4>
      <pre data-codemirror data-mode="text/html" data-line-numbers="false"><div style="color: red;"></div></pre>
    </div>
    <div class="fragment">
      <h4>2. IDs</h4>
      <pre data-codemirror data-mode="text/css" data-line-numbers="false">#updateItem {}
#shoppingCart {}</pre>
    </div>
  </div>
  <div class="Split-column">
    <div class="fragment">
      <h4>3. Classes, attributes, & pseudo-classes</h4>
      <pre data-codemirror data-mode="text/css" data-line-numbers="false">.selected {}
[href^='http://'] {}
:nth-child(2n+1) {}</pre>
    </div>
    <div class="fragment">
      <h4>4. Elements & <br /> psuedo-elements</h4>
      <pre data-codemirror data-mode="text/css" data-line-numbers="false">table {}
.fa:after {}</pre>
    </div>
  </div>
</div>

------

## How to Measure Specificity
<!-- .slide: data-title="Specificity" data-state="backEndBrian juniorJacob" -->

1. Start at 0
2. Add 1000 for each inline style
3. Add 100 for each ID
4. Add 10 for each class, attribute & pseudo-class
5. Add 1 for each element and pseudo-element

------

## Examples of Specificity
<!-- .slide: data-title="Specificity" data-state="backEndBrian juniorJacob" -->

<div class="Split">
  <div class="Split-column">
    <div class="fragment">
      <pre data-codemirror data-mode="text/css" data-line-numbers="false">#submitButton {}</pre>
      <div class="Specificity">
        <div class="Specificity-score">
          <div class="Specificity-value Specificity-value--inline">0</div>
          <div class="Specificity-value Specificity-value--ids">1</div>
          <div class="Specificity-value Specificity-value--classes">0</div>
          <div class="Specificity-value Specificity-value--elements">0</div>
        </div>
      </div>
    </div>
    <div class="fragment">
      <pre data-codemirror data-mode="text/css" data-line-numbers="false">.Widget {}</pre>
      <div class="Specificity">
        <div class="Specificity-score">
          <div class="Specificity-value Specificity-value--inline">0</div>
          <div class="Specificity-value Specificity-value--ids">0</div>
          <div class="Specificity-value Specificity-value--classes">1</div>
          <div class="Specificity-value Specificity-value--elements">0</div>
        </div>
      </div>
    </div>
  </div>
  <div class="Split-column">
    <div class="fragment">
      <textarea data-codemirror data-mode="text/css" data-line-numbers="false">.Widget.selected > ul {}</textarea>
      <div class="Specificity">
        <div class="Specificity-score">
          <div class="Specificity-value Specificity-value--inline">0</div>
          <div class="Specificity-value Specificity-value--ids">0</div>
          <div class="Specificity-value Specificity-value--classes">2</div>
          <div class="Specificity-value Specificity-value--elements">1</div>
        </div>
      </div>
    </div>
    <div class="fragment">
      <pre data-codemirror data-mode="text/css" data-line-numbers="false">#status[data-type='error'] {}</pre>
      <div class="Specificity">
        <div class="Specificity-score">
          <div class="Specificity-value Specificity-value--inline">0</div>
          <div class="Specificity-value Specificity-value--ids">1</div>
          <div class="Specificity-value Specificity-value--classes">1</div>
          <div class="Specificity-value Specificity-value--elements">0</div>
        </div>
      </div>
    </div>
  </div>
</div>

------

## Specificity Games
<!-- .slide: data-title="Specificity" data-state="specificity backEndBrian juniorJacob midLevelMelissa" data-background="imgs/the-hunger-games.jpeg" -->

<div class="SpecificityGame">
  <div class="Specificity">
    <input class="Specificity-input" value="ul > li.selected input[type='checkbox']" />
    <div class="Specificity-score">
      <div class="Specificity-value Specificity-value--inline">0</div>
      <div class="Specificity-value Specificity-value--ids">0</div>
      <div class="Specificity-value Specificity-value--classes">0</div>
      <div class="Specificity-value Specificity-value--elements">0</div>
    </div>  
  </div>

  <div class="Specificity">
    <input class="Specificity-input" value="aside#sidebar a[href^='https']" />
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

## [CSS SpeciFISHity](http://www.standardista.com/css3/css-specificity/) by [Estelle Weyl](http://twitter.com/estellevw)

![](./imgs/specifishity.png)

------

## [CSS Specificity Star Wars](http://www.stuffandnonsense.co.uk/archives/css_specificity_wars.html)

![](./imgs/specificitywars.jpg)

------

## Resources
<!-- .slide: data-title="Specificity" data-state="backEndBrian juniorJacob midLevelMelissa" -->

* [Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) by MDN
* [Specifics on CSS Specificity](https://css-tricks.com/specifics-on-css-specificity/) by [Chris Coyier](http://twitter.com/chriscoyier)
* [CSS SpeciFISHity](http://www.standardista.com/css3/css-specificity/) by [Estelle Weyl](http://twitter.com/estellevw)
* [CSS Specificity Star Wars](http://www.stuffandnonsense.co.uk/archives/css_specificity_wars.html)
* [`npm install specificity`](https://github.com/keeganstreet/specificity)

Notes:

* https://github.com/tomgenoni/cssdig
* https://github.com/SlexAxton/css-colorguard
