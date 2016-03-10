# Alignment

> "Center Me... If You Can" --[Me](http://twitter.com/elijahmanor)

------

<!-- .slide: data-title="Alignment" data-state="backEndBrian juniorJacob Slide--up extended" data-menu-title="Learning the Hard Way" -->

<img src="./imgs/commitstrip-css-center.jpg" style="height: 550px; margin: 0;" />

<div style="font-size: .4em; opacity: 0.5; font-style: italic;">
  <a href="http://www.commitstrip.com/en/2015/05/21/learning-the-hard-way/">Learning the hard way</a> / <a href="http://twitter.com/commitstrip">@CommitStrip</a>
</div>

------

<!-- .slide: data-title="Alignment" data-state="backEndBrian juniorJacob Slide--up" data-menu-title="One Does Not Simply Center" -->

<img src="./imgs/one-does-not-simply-center.jpg" style="height: 400px;" />

<!--
## Scenario

> TODO: start using float... and cry

have code example here trying to lay something out with flout

## Floats

TODO: briefly talk about floats

* https://css-tricks.com/all-about-floats/
* http://nicolasgallagher.com/micro-clearfix-hack/

## Clearing Floats

TODO: Show the various ways to clear floats. This could be several slides with midLEvelMelissa coming in near the end

## Floating Frustrations

TODO: Talk about some of the limitations of using floats all the time

Show example (hopefully it is a real one and not just my ignorance)

Thinking about example using floats for layout (grid system), but then trying to align things inside one of those cells. ran into this with EveryDollar... want to replicate on reduced level
-->

------

## Alignment in CSS is a Pain
<!-- .slide: data-title="Alignment" data-state="backEndBrian juniorJacob" -->

<div class="Split">
  <div class="Split-column">
    <h3 class="fragment">Horizontal</h3>
    <div class="fragment">
      <pre data-codemirror data-mode="text/css" data-line-numbers="false" data-lines="">
.kids { text-align: center; }</pre>
    </div>
    <div class="fragment">
      <pre data-codemirror data-mode="text/css" data-line-numbers="false" data-lines="">
.me { margin: 0 auto; }</pre>
    </div>
    <div class="fragment">
      <pre data-codemirror data-mode="text/css" data-line-numbers="false" data-lines="">
.mum { position: relative; }
.kid {
  position: absolute;
  height: 100px;
  width: 100px;
  margin: 0px 0 0 -50px;
  left: 50%;
}</pre>
    </div>
  </div>
  <div class="Split-column">
    <h3 class="fragment">Vertical</h3>
    <div class="fragment">
      <pre data-codemirror data-mode="text/css" data-line-numbers="false" data-lines="">
.mid-text {
  height: 100px;
  line-height: 100px;
}</pre>
    </div>
    <div class="fragment">
      <pre data-codemirror data-mode="text/css" data-line-numbers="false" data-lines="">
.mum { position: relative; }
.kid {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}</pre>
    </div>
  </div>
</div>

------

### [Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/)
<!-- .slide: data-title="Alignment" data-state="backEndBrian juniorJacob" -->

<iframe style="background-color: white;" class="stretch" src="https://css-tricks.com/centering-css-complete-guide/" />

<!-- <a href="https://css-tricks.com/centering-css-complete-guide/" data-preview-link>Centering in CSS: A Complete Guide</a> -->

------

## Media Object
<!-- .slide: data-title="Alignment" data-state="backEndBrian juniorJacob extended" data-menu-title="Media Object: Markup" -->

<pre data-codemirror data-mode="text/html" data-line-numbers="false" data-lines=""><div class="media">
  <img class="mediaFigure" src="http://...">
  <div class="mediaBody">
    <h3 class="mediaTitle">Title</h3>
    <p>Yada yada yada</p>
  </div>
</div></pre>
<img src="./imgs/media-object.png" style="position: absolute; top: 8rem; right: -8rem;" />

------

## Media Object
<!-- .slide: data-title="Alignment" data-state="backEndBrian juniorJacob extended" data-menu-title="Media Object: Float CSS" -->

Float Version

<div class="Split">
  <div class="Split-column">
    <pre data-codemirror data-mode="text/css" data-line-numbers="false">
.media {
  margin-bottom: 1em;
}

.mediaFigure {
  float: left;
  margin-left: 0;
  margin-right: 1em;
}

.media, .mediaBody {
  overflow: hidden;
}</pre>
  </div>
  <div class="Split-column Split-column--65">
    <textarea data-codemirror data-mode="text/css" data-line-numbers="false">
.mediaBody,
.mediaBody :last-child {
  margin-bottom: 0;
}

.mediaTitle {
  margin: 0 0 .5em;
}

.mediaReverse > .mediaFigure {
  float: right;
  margin: 0 0 0 1em;
}</textarea>
  </div>
</div>

------

## So What!?!
<!-- .slide: data-title="Alignment" data-state="backEndBrian juniorJacob" -->

<img src="imgs/i-give-up.gif" />

------

## Flex-box
<!-- .slide: data-title="Alignment" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<div class="Split">
  <div class="Split-column Split-column--50">
    <div class="caniuse" data-feature="flexbox" style="width: auto;"></div>
  </div>
  <div class="Split-column Split-column--50" style="zoom: document;">
    <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Globally, 92% of browsers in use support border-radius. 96% support Flexbox. Still think it’s too early to use Flexbox?</p>&mdash; Jen Simmons (@jensimmons) <a href="https://twitter.com/jensimmons/status/702624258145579008">February 24, 2016</a></blockquote>
  </div>
</div>

------

## Flex-box Cheatsheet
<!-- .slide: data-title="Alignment" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<iframe style="background-color: white;" class="stretch" src="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" />

<!-- <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" data-preview-link>Flex-box Cheatsheet</a> -->

------

<!-- .slide: data-title="Alignment" data-state="backEndBrian juniorJacob midLevelMelissa extended" data-menu-title="Flexbox Playground" -->

<h1><a href="http://the-echoplex.net/flexyboxes" data-preview-link>
☟☟☟☟
<p>☞ Flexbox ☜</p>
<p>☞ Playground ☜</p>
☝☝☝☝☝☝</a></h1>

<!--<iframe src="http://the-echoplex.net/flexyboxes" class="stretch" />-->

------

## [FlexboxIn5.com](http://flexboxin5.com/)
<!-- .slide: data-title="Alignment" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<a href="http://flexboxin5.com/)" data-preview-link><img src="imgs/flexbox-in-5.png" /></a>

------

## [FlexboxFroggy.com](http://flexboxfroggy.com/)
<!-- .slide: data-title="Alignment" data-state="backEndBrian juniorJacob midLevelMelissa" -->

Guide Froggy and friends to the lilypads!

<a href="http://flexboxfroggy.com/" data-preview-link><img src="imgs/flexbox-froggy.gif" /></a>

<!-- <div class="frog green" style="position: absolute; bottom: 0; right: 0;">
  <div class="bg animated pulse infinite"></div>
</div> -->

------

## [FlexboxDefense.com](http://www.flexboxdefense.com/)
<!-- .slide: data-title="Alignment" data-state="backEndBrian juniorJacob midLevelMelissa" -->

Stop the incoming enemies from getting past your defenses!

<a href="http://www.flexboxdefense.com/" data-preview-link><img src="imgs/flexbox-defense-wide.gif" /></a>

------

## Media Object
<!-- .slide: data-title="Alignment" data-state="backEndBrian juniorJacob midLevelMelissa extended" data-menu-title="Media Object: Flexbox CSS" -->

Flexbox Version

<div class="Split">
  <div class="Split-column">
    <pre data-codemirror data-mode="text/css" data-line-numbers="false">
.media {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1em;
}

.mediaFigure {
  margin-left: 0;
  margin-right: 1em;
}

.mediaCenter {
  align-items: center;
}</pre>
  </div>
  <div class="Split-column">
    <textarea data-codemirror data-mode="text/css" data-line-numbers="false">
.mediaBody,
.mediaBody :last-child {
  margin-bottom: 0;
}

.mediaTitle {
  margin: 0 0 .5em;
}

.mediaReverse > .mediaFigure {
  order: 1;
  margin: 0 0 0 1em;
}</textarea>
  </div>
</div>

------

## Resources
<!-- .slide: data-title="Alignment" data-state="backEndBrian juniorJacob midLevelMelissa resources" -->

* [Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/)
* [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [What the Flexbox?](http://flexbox.io) - Free 20 video course
* [Flexbox In 5](http://flexboxin5.com/)
* [Flexbox Froggy](http://flexboxfroggy.com/)
* [Flexbox Defense](http://www.flexboxdefense.com/)
* [Solved by Flexbox](http://philipwalton.github.io/solved-by-flexbox/)
* [Flexplorer](http://bennettfeely.com/flexplorer/)
* [Flexy Boxes](http://the-echoplex.net/flexyboxes/)

Notes:

* [A Visual Guide to CSS3 Flexbox Properties](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)
* [Flexbox Cheatsheet](http://jonibologna.com/flexbox-cheatsheet/)
* http://codepen.io/elijahmanor/pen/MYxRMr?editors=110
* http://philipwalton.github.io/solved-by-flexbox/
* http://www.sitepoint.com/solving-layout-problems-css-table-property/
* http://www.flexboxdefense.com/
* http://tympanus.net/codrops/css_reference/flexbox/
* https://blog.codepen.io/2015/04/12/flexbox-fridays-by-lincoln-loop/

* https://css-tricks.com/using-flexbox/
* http://www.sitepoint.com/are-we-ready-to-use-flexbox/
* https://css-tricks.com/forums/topic/flexbox-with-fallback/
* http://designkarma.co.uk/blog/using-flexbox-now
* http://www.planningforaliens.com/blog/2014/03/11/real-world-flexbox/
