# Box Model
<!-- .slide: data-state="backEndBrian juniorJacob" -->

> This model describes the content of the space taken by an element. Each box has four edges: the margin edge, border edge, padding edge, and content edge. --[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model)

------

## Crazy Box
<!-- .slide: data-title="Box Model" data-state="backEndBrian juniorJacob" -->

<div class="Split">
  <div class="Split-column Split-column--55">
    <pre data-codemirror data-mode="text/html"><div class="crazybox">
  200 x 200
</div>
<div class="stick--200"></div></pre>
    <pre data-codemirror data-mode="text/css">.crazybox {
  width: 200px;
  height: 200px;
  background-color: red;
}

.stick-200 {
  width: 200px;
  height: 5px;
  background-color: blue;
}</pre>
  </div>
  <div class="Split-column Split-column--45">
    <div class="crazybox--2">200 x 200</div>
    <div class="Arrow">
      <div class="Arrow-left"></div>
      <div class="Arrow-right"></div>
    </div>
    <div class="stick--200--2"></div>
  </div>
</div>

------

## Crazy Box
<!-- .slide: data-title="Box Model" data-state="backEndBrian juniorJacob" -->

<div class="Split">
  <div class="Split-column Split-column--55">
    <pre data-codemirror data-mode="text/html"><div class="crazybox">
  200 x 200
</div>
<div class="stick--200"></div></pre>
    <pre data-codemirror data-mode="text/css" data-lines="4,5">.crazybox {
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
}</pre>
  </div>
  <div class="Split-column Split-column--45">
    <div class="crazybox--3">200 x 200</div>
    <div class="Arrow">
      <div class="Arrow-left"></div>
      <div class="Arrow-right"></div>
    </div>
    <div class="stick--200--3"></div>
    <div style="font-size: 1.5rem; text-align: left;">
      <h4 class="fragment">`box-sizing: content-box`</h4>
      <p class="fragment">width + padding + border =<br/>rendered width</p>
    </div>
  </div>
</div>

------

## Y U SO CRAZY!?!
<!-- .slide: data-title="Box Model" data-state="backEndBrian juniorJacob" -->

<img src="./imgs/not-supposed-to-happen.gif" style="height: 450px" />

------

## Smart Box
<!-- .slide: data-title="Box Model" data-state="backEndBrian juniorJacob" -->

<div class="Split">
  <div class="Split-column Split-column--55">
    <pre data-codemirror data-mode="text/html"><div class="smartbox">
  200 x 200
</div>
<div class="stick--200"></div></pre>
    <pre data-codemirror data-mode="text/css" data-lines="6">.smartbox {
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
}</pre>
  </div>
  <div class="Split-column Split-column--45">
    <div class="smartbox--4">200 x 200</div>
    <div class="Arrow">
      <div class="Arrow-left"></div>
      <div class="Arrow-right"></div>
    </div>
    <div class="stick--200--4"></div>
    <div style="font-size: 1.5rem; text-align: left;">
      <h4 class="fragment">`box-sizing: border-box`</h4>
      <p class="fragment">width = rendered width</p>
      <p class="fragment">includes padding & border,<br/> but not margin</p>
    </div>
  </div>
</div>

------

## THERE WAS MUCH REJOINCING!
<!-- .slide: data-title="Box Model" data-state="backEndBrian juniorJacob" -->

<img src="./imgs/happy-dance.gif" style="height: 450px;" />

------

# Border Box FTW!
<!-- .slide: data-title="Box Model" data-state="backEndBrian juniorJacob codeMirror--xlg" -->

So, we could...

<pre data-codemirror data-line-numbers="false">* { box-sizing: border-box; }</pre>

<div class="fragment">
<br/>
<p>or better yet...</p>
<pre data-codemirror data-line-numbers="false">\*, \*:before, \*:after { box-sizing: border-box; }</pre>
</div>

> Note: don't worry about [vendor prefixes](http://caniuse.com/#feat=css3-boxsizing)

------

## Slightly Better Best Practice
<!-- .slide: data-title="Box Model" data-state="codeMirror--xlg backEndBrian juniorJacob midLevelMelissa" -->

<pre data-codemirror data-mode="text/css" data-line-numbers="false">html { box-sizing: border-box; }

*, *:before, *:after { box-sizing: inherit; }</pre>

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
