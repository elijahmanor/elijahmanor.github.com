# Specificity

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

## How to Score Specificity
<!-- .slide: data-title="Specificity" data-state="backEndBrian juniorJacob" -->

<div class="Split">
  <div class="Split-column">
    <div class="fragment">
      <h4>1. Start with <code style="color: #D8FA3C;">0</code></h4>
    </div>
    <div class="fragment">
      <h4>2. Inline Styles: <br/>Add <code style="color: #D8FA3C;">1000</code></h4>
      <pre data-codemirror data-mode="text/html" data-line-numbers="false"><div style="color: red;"></div></pre>
    </div>
    <div class="fragment">
      <h4>3. IDs: <br/>Add <code style="color: #D8FA3C;">100</code></h4>
      <pre data-codemirror data-mode="text/css" data-line-numbers="false">#updateItem {}
#shoppingCart {}</pre>
    </div>
  </div>
  <div class="Split-column">
    <div class="fragment">
      <h4>4. Classes, attributes, & pseudo-classes: <br/>Add <code style="color: #D8FA3C;">10</code></h4>
      <pre data-codemirror data-mode="text/css" data-line-numbers="false">.selected {}
[href^='http://'] {}
:nth-child(2n+1) {}</pre>
    </div>
    <div class="fragment">
      <h4>5. Elements & <br /> psuedo-elements: <br/>Add <code style="color: #D8FA3C;">1</code></h4>
      <pre data-codemirror data-mode="text/css" data-line-numbers="false">table {}
.fa:after {}</pre>
    </div>
  </div>
</div>

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

## Seriously!?!
<!-- .slide: data-title="Specificity" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<img src="imgs/mild-shock.gif" style="height: 450px;" />

------

## Now That I Know, <br/>Where Shall I Go?
<!-- .slide: data-title="Specificity" data-state="backEndBrian juniorJacob midLevelMelissa" -->

* <!-- .element: class="fragment" data-fragment-index="1" -->Try to keep your specificity score as low as possible
* <!-- .element: class="fragment" data-fragment-index="2" -->BEM `&&` SUIT CSS naming conventions can help address high specificity (wait for it)
* <!-- .element: class="fragment" data-fragment-index="3" --> Lean towards `.Class`, not `#Id` selectors

------

## [CSS SpeciFISHity](http://www.standardista.com/css3/css-specificity/) by [Estelle Weyl](http://twitter.com/estellevw)
<!-- .slide: data-title="Specificity" data-state="backEndBrian juniorJacob midLevelMelissa" -->

![](./imgs/specifishity.png)

------

## [CSS Specificity Star Wars](http://www.stuffandnonsense.co.uk/archives/css_specificity_wars.html)
<!-- .slide: data-title="Specificity" data-state="backEndBrian juniorJacob midLevelMelissa" -->

![](./imgs/specificitywars.jpg)

------

## Resources
<!-- .slide: data-title="Specificity" data-state="backEndBrian juniorJacob midLevelMelissa resources" -->

* [Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) by MDN
* [Specifics on CSS Specificity](https://css-tricks.com/specifics-on-css-specificity/) by [Chris Coyier](http://twitter.com/chriscoyier)
* [CSS SpeciFISHity](http://www.standardista.com/css3/css-specificity/) by [Estelle Weyl](http://twitter.com/estellevw)
* [CSS Specificity Star Wars](http://www.stuffandnonsense.co.uk/archives/css_specificity_wars.html)
* [`npm install specificity`](https://github.com/keeganstreet/specificity)

Notes:

* https://github.com/tomgenoni/cssdig
* https://github.com/SlexAxton/css-colorguard
