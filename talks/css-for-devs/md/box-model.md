# Box Model
<!-- .slide: data-state="backEndBrian juniorJacob" -->

> This model describes the content of the space taken by an element. Each box has four edges: the margin edge, border edge, padding edge, and content edge. --[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model)

------

## Crazy Box
<!-- .slide: data-title="Box Model" data-state="backEndBrian juniorJacob" -->

<div class="Split">
  <div class="Split-column">
    <pre class="language-markup"><code>&lt;div class="crazybox"&gt;
  200 x 200
&lt;/div&gt;
&lt;div class="stick--200"&gt;&lt;/div&gt;</code></pre>
    <pre class="language-css"><code>.crazybox {
  width: 200px;
  height: 200px;
  background-color: red;
}

.stick-200 {
  width: 200px;
  height: 5px;
  background-color: blue;
}</code></pre>
  </div>
  <div class="Split-column">
    <div class="crazybox--2">200 x 200</div>
    <div class="stick--200--2"></div>
  </div>
</div>

------

## Crazy Box
<!-- .slide: data-title="Box Model" data-state="backEndBrian juniorJacob" -->

<div class="Split">
  <div class="Split-column">
    <pre class="language-markup" ><code>&lt;div class="crazybox"&gt;
  200 x 200
&lt;/div&gt;
&lt;div class="stick--200"&gt;&lt;/div&gt;</code></pre>
    <pre class="language-css" data-line="5-6"><code>.crazybox {
  width: 200px;
  height: 200px;
  background-color: red;
  padding: 1rem;
  border: 1rem solid blue;
}

.stick-200 {
  width: 200px;
  height: 5px;
  background-color: blue;
}</code></pre>
  </div>
  <div class="Split-column">
    <div class="crazybox--3">200 x 200</div>
    <div class="stick--200--3"></div>
    <h4 class="fragment">`box-sizing: content-box`</h4>
    <p class="fragment">width + padding + border = rendered width of box</p>
  </div>
</div>

------

## Smart Box
<!-- .slide: data-title="Box Model" data-state="backEndBrian juniorJacob" -->

<div class="Split">
  <div class="Split-column">
    <pre class="language-markup" ><code>&lt;div class="smartbox"&gt;
  200 x 200
&lt;/div&gt;
&lt;div class="stick--200"&gt;&lt;/div&gt;</code></pre>
    <pre class="language-css" data-line="7"><code>.smartbox {
  width: 200px;
  height: 200px;
  background-color: red;
  padding: 1rem;
  border: 1rem solid blue;
  box-sizing: border-box;
}

.stick-200 {
  width: 200px;
  height: 5px;
  background-color: blue;
}</code></pre>
  </div>
  <div class="Split-column">
    <div class="smartbox--4">200 x 200</div>
    <div class="stick--200--4"></div>
    <h4 class="fragment"><code>box-sizing: <br />border-box</code></h4>
    <p class="fragment">width =<br />rendered width of box</p>
    <p class="fragment">width includes padding & border, but not margin</p>
  </div>
</div>

------

# THERE WAS MUCH REJOINCING!
<!-- .slide: data-title="Box Model" data-state="backEndBrian juniorJacob" -->

------

# Border Box FTW!
<!-- .slide: data-title="Box Model" data-state="backEndBrian juniorJacob" -->

So, we could...

<pre class="language-css"><code>* { box-sizing: border-box; }</code></pre>

or better yet...

<pre class="language-css"><code>*, *:before, *:after { box-sizing: border-box; }</code></pre>

> Note: don't worry about [vendor prefixes](http://caniuse.com/#feat=css3-boxsizing)

------

## Slightly Better Best Practice
<!-- .slide: data-title="Box Model" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<pre class="language-css"><code>html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}</code></pre>

> This will give you the same result, and make it easier to change the box-sizing in plugins or other components that leverage other behavior. --Jon Neal

<small>Source: [Inheriting box-sizing Probably Slightly Better Best Practice](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/) by [Chris Coyier](http://twitter.com/chriscoyier)</small>

------

#### February 1st
#### International Box-Sizing Awareness Day
<!-- .slide: data-title="Box Model" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<img src="imgs/mega-protest-city-yah1.svg" style="height: 550px;" />

------

# Resources
<!-- .slide: data-title="Box Model" data-state="backEndBrian juniorJacob midLevelMelissa" -->

* [CSS Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model) by MDN
* [* { Box-sizing: Border-box } FTW]() by [Paul Irish](http://www.paulirish.com/2012/box-sizing-border-box-ftw/)
* [Inheriting box-sizing Probably Slightly Better Best Practice](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/) by [Chris Coyier](http://twitter.com/chriscoyier)
