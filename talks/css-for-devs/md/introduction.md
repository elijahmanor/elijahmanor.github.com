# CSS for Developers
<!-- .slide: data-state="introduction no-vote" data-menu-title="Introduction" data-background="imgs/coding.jpeg" -->

<div class="CSSForDevelopers">
  <div class="CSSForDevelopers-text">CSS IS AWESOME</div>
</div>

## <!-- .element: style="text-transform: lowercase;" --> by [@elijahmanor](http://twitter.com/elijahmanor)

<h3 data-store="introduction-social" contenteditable></h3>

<!-- <div style="font-size: .4em; opacity: 0.5; font-style: italic;">Picture: [Stray Cat](https://flic.kr/p/dQZvyD) / [Jim Bauer](https://www.flickr.com/photos/lens-cap/) / Creative Commons</div> -->

------

<!-- ## `me.json` -->
<!-- .slide: data-state="me codeMirror--xsm no-vote" data-background="./imgs/56d68184e23cc641590187.gif" data-background-size="1000px" data-background-repeat="none" data-menu-title="npm install elijahmanor" -->

<span class="fragment npmFlag" style="position: absolute; top: 1rem; right: 10rem;">`--save`</span>

<span class="fragment npmFlag" style="position: absolute; top: 10rem; right: 10rem;">`--save-dev`</span>

------

# CSS Personas
<!-- .slide: data-state="codeMirror--xlg no-vote extended" -->

<pre data-codemirror data-line-numbers="false">window.fetch('http://api.randomuser.me/')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    copy(JSON.stringify(data, null, 2));
  });</pre>

------

## Back-End Brian
<!-- .slide: data-state="no-vote" -->

<img src="./imgs/back-end-brian-big.jpg" data-xsrc="http://api.randomuser.me/portraits/men/31.jpg" style="border-radius: 50%; width: 25%;" /><!-- 8, 15, 31,  -->

### Computer science major

* Recently moved towards Front-End Web Development
* JavaScript and HTML make sense (mostly)
* CSS is frustrating and seemingly unmaintainable
* Leans towards Twitter Bootstrap or other frameworks

<img src="imgs/copying-pasting.jpg" style="position: absolute; left: 10rem; top: 3rem; transform: rotate(15deg);" class="fragment" />

------

## Junior Jacob
<!-- .slide: data-state="no-vote" -->

<img src="./imgs/junior-jacob-big.jpg" data-xsrc="http://api.randomuser.me/portraits/men/73.jpg" style="border-radius: 50%; width: 25%;" /><!-- 32, 73 -->

### Junior Front-End Developer

* Trying to pick up the ropes from scratch
* Too much information floating around on the web
* Hard to know what technique should be used

------

## Mid-Level Melissa
<!-- .slide: data-state="no-vote" -->

<img src="./imgs/mid-level-melissa-big.jpg" data-xsrc="http://api.randomuser.me/portraits/women/10.jpg" style="border-radius: 50%; width: 25%;" />

### Mid-Level Front-End Developer

* Pretty comfortable with current set of skills
* Can get the job done, but it can be somewhat painful
* CSS quickly gets out of hand and hard to maintain

<!-- ## Poll -->
<!-- .slide: data-state="no-vote" -->

<!-- <iframe src="https://www.sli.do/event/ifcuyn2w/wall" style="width: 100%; height: 500px;"></iframe> -->

<!-- <a href="https://www.sli.do/event/ifcuyn2w/wall" data-preview-link>Which persona do you currently identify with?</a> -->

------

## Outline
<!-- .slide: data-state="outline extended" -->

<div><ul id="outline"></ul></div>

Notes:

http://elijahmanor.com/talks/css-for-devs/#/6/3

* solved by flexbox
* go into examples

http://elijahmanor.com/talks/css-for-devs/#/7/4

* find a better mixin OR talk about autoprefixer real quick

http://elijahmanor.com/talks/css-for-devs/#/7/9

* briefly about postcss?

http://elijahmanor.com/talks/css-for-devs/#/8/1

* mention brad frost somewhere

http://elijahmanor.com/talks/css-for-devs/#/9/7

* go a bit further (current project)
* css modules blog post

http://elijahmanor.com/talks/css-for-devs/#/10/1

* mention other node linter coming out!
