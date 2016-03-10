# Position

> "The position CSS property chooses alternative rules for positioning elements, designed to be useful for scripted animation effects." --[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

------

## [Scenario <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://codepen.io/elijahmanor/pen/GJjJRP?editors=110)
<!-- .slide: data-title="Position" data-state="backEndBrian juniorJacob backgroundGif" data-background="./imgs/css-is-painful.gif" data-background-size="1000px" data-background-repeat="none" -->

<div class="Split" style="width: 110%;">
  <div class="Split-column">
    <div class="fragment">
      <h4>Have you ever wanted to do something like...</h4>
      <div class="DemoPositionScenario">
        <div class="DemoPositionScenario-box">.box1</div>
        <div class="DemoPositionScenario-box">.box2</div>
      </div>
    </div>
    <div class="fragment">
      <h4>So, you tried this... and failed</h4>
      <pre data-codemirror data-mode="text/css" data-line-numbers="false">
.box2 {
  top: -10px;
  left: 10px;
}</pre>
    </div>
  </div>
  <div class="Split-column">
    <div class="fragment">
      <h4>And this... and failed :(</h4>
      <pre data-codemirror data-mode="text/css" data-line-numbers="false">
.box2 {
  top: -10px !important;
  left: 10px !important;
}</pre>
    </div>
    <div class="fragment">
      <h4>And this... and failed :(</h4>
      <pre data-codemirror data-mode="text/css" data-line-numbers="false">
.box2 {
  position: absolute;
  top: -10px;
  left: 10px;
}</pre>
    </div>
  </div>
</div>

------

## Position
<!-- .slide: data-title="Position" data-state="backEndBrian juniorJacob" -->

<table>
  <tr>
    <th></th>
    <th>Default</th>
    <th>Flow</th>
    <th>Space</th>
    <th>Offset</th>
    <th>Context</th>
  </tr>
  <tr>
    <td>Static</td>
    <td><i class="icon--positive">✔</i></td>
    <td><i class="icon--positive">✔</i></td>
    <td><i class="icon--positive">✔</i></td>
    <td><i class="icon--negative">✘</i></td>
    <td>Parent</td>
  </tr>
  <tr class="fragment">
    <td>Relative</td>
    <td><i class="icon--negative">✘</i></td>
    <td><i class="icon--positive">✔</i></td>
    <td><i class="icon--positive">✔</i></td>
    <td><i class="icon--positive">✔</i></td>
    <td>Parent</td>
  </tr>
  <tr class="fragment">
    <td>Absolute</td>
    <td><i class="icon--negative">✘</i></td>
    <td><i class="icon--negative">✘</i></td>
    <td><i class="icon--negative">✘</i></td>
    <td><i class="icon--positive">✔</i></td>
    <td>Body <span class="fragment">or Closest Positioned Ancestor</span></td>
  </tr>
  <tr class="fragment">
    <td>Fixed</td>
    <td><i class="icon--negative">✘</i></td>
    <td><i class="icon--negative">✘</i></td>
    <td><i class="icon--negative">✘</i></td>
    <td><i class="icon--positive">✔</i></td>
    <td>Viewport</td>
  </tr>
</table>

<!-- static, relative, absolute, fixed, float, clear, z-index, overflow -->

------

## Static
<!-- .slide: data-title="Position" data-state="backEndBrian juniorJacob extended" -->

> "This keyword lets the element use the normal behavior, that is it is laid out in its current position in the flow.  The top, right, bottom, left and z-index properties do not apply." --[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

------

## [Static: Example <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://codepen.io/elijahmanor/pen/rVMVjw)
<!-- .slide: data-title="Position" data-state="backEndBrian juniorJacob" -->

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre data-codemirror data-mode="text/html" data-line-numbers="false">
<div class="static box1"></div>
<div class="static box2"></div>
<div class="static box3"></div></pre>
    <pre data-codemirror data-mode="text/css" data-line-numbers="false">
.static {
  width: 100px;
  height: 100px;
  margin: 5px;
  background: red;
  /\* top, right, bottom, left, z-index
     properties don't apply \*/
}</pre>
  </div>
  <div class="Split-column Split-column--20">
    <div class="DemoPositionStatic">
      <div class="DemoPositionStatic-box">.box1</div>
      <div class="DemoPositionStatic-box">.box2</div>
      <div class="DemoPositionStatic-box">.box3</div>
    </div>
  </div>
</div>

------

## Relative
<!-- .slide: data-title="Position" data-state="backEndBrian juniorJacob extended" -->

> "This keyword lays out all elements as though the element were not positioned, and then adjust the element's position, without changing layout (and thus leaving a gap for the element where it would have been had it not been positioned)." --[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

------

## [Relative: Example <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://codepen.io/elijahmanor/pen/KpgpEq)
<!-- .slide: data-title="Position" data-state="backEndBrian juniorJacob" -->

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre data-codemirror data-mode="text/html" data-line-numbers="false">
<div class="relative box1"></div>
<div class="relative box2"></div>
<div class="relative box3"></div></pre>
    <pre data-codemirror data-mode="text/css" data-lines="4,6,7,8">.relative {
  width: 100px; height: 100px;
  margin: 5px; background: red;
  border: 1px solid white;
  position: relative;
}
.box1 { top: 25px; }
.box2 { left: -25px; z-index: 1; }
.box3 { top: -25px; left: 25px; }</pre>
  </div>
  <div class="Split-column Split-column--20">
    <div class="DemoPositionRelative">
      <div class="DemoPositionRelative-box">.box1</div>
      <div class="DemoPositionRelative-box">.box2</div>
      <div class="DemoPositionRelative-box">.box3</div>
    </div>
  </div>
</div>

------

## Absolute
<!-- .slide: data-title="Position" data-state="backEndBrian juniorJacob extended" -->

> "Do not leave space for the element. Instead, position it at a specified position relative to its closest positioned ancestor or to the containing block." --[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

------

## [Absolute: Example 1 <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://codepen.io/elijahmanor/pen/BNLNEK?editors=110)
<!-- .slide: data-title="Position" data-state="backEndBrian juniorJacob" -->

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre data-codemirror data-mode="text/html" data-line-numbers="false">
<div class="container">
  <div class="absolute box1"></div>
  <div class="absolute box2"></div>
  <div class="absolute box3"></div>
</div></pre>
    <pre data-codemirror data-mode="text/css" data-lines="9">.container {
  border: 1px solid blue; padding: 25px;
}
.absolute {
  width: 100px; height: 100px;
  margin: 5px auto; background: red;
  border: 1px solid white;
}
.box2 {
  position: absolute; top: 0; left: 0;
}</pre>
  </div>
  <div class="Split-column Split-column--20">
    <div class="DemoPositionAbsolute">
      <div class="DemoPositionAbsolute-box">.box1</div>
      <div class="DemoPositionAbsolute-box">.box2</div>
      <div class="DemoPositionAbsolute-box">.box3</div>
    </div>
  </div>
</div>

------

## [Absolute: Example 2 <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://codepen.io/elijahmanor/pen/JdRdVw?editors=110)
<!-- .slide: data-title="Position" data-state="backEndBrian juniorJacob" -->

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre data-codemirror data-mode="text/html" data-line-numbers="false">
<div class="container">
  <div class="absolute box1"></div>
  <div class="absolute box2"></div>
  <div class="absolute box3"></div>
</div></pre>
    <pre data-codemirror data-mode="text/css" data-lines="2,10">.container {
  border: 1px solid blue; padding: 25px;
  position: relative;
}
.absolute {
  width: 100px; height: 100px;
  margin: 5px auto; background: red;
  border: 1px solid white;
}
.box2 {
  position: absolute; top: 0; left: 0;
}</pre>
  </div>
  <div class="Split-column Split-column--20">
    <div class="DemoPositionAbsolute DemoPositionAbsolute--2">
      <div class="DemoPositionAbsolute-box">.box1</div>
      <div class="DemoPositionAbsolute-box">.box2</div>
      <div class="DemoPositionAbsolute-box">.box3</div>
    </div>
  </div>
</div>

------

## Fixed
<!-- .slide: data-title="Position" data-state="backEndBrian juniorJacob extended" -->

> "Do not leave space for the element. Instead, position it at a specified position relative to the screen's viewport and don't move it when scrolled." --[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

------

## [Fixed: Example <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://codepen.io/elijahmanor/pen/dopoLE?editors=110)
<!-- .slide: data-title="Position" data-state="backEndBrian juniorJacob slide--demoPositionFixed" -->

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre data-codemirror data-mode="text/html" data-line-numbers="false">
<div class="container">
  <div class="box box1"></div>
  <div class="box box2"></div>
  <div class="box box3"></div>
</div></pre>
    <pre data-codemirror data-mode="text/css" data-lines="10">.container {
  border: 1px solid blue; padding: 25px;
  position: relative;
}
.box {
  width: 100px; height: 100px;
  margin: 5px auto; background: red;
  border: 1px solid white;
}
.box2 {
  position: fixed; top: 0; left: 0;
}</pre>
  </div>
  <div class="Split-column Split-column--20">
    <div class="DemoPositionFixed">
      <div class="DemoPositionFixed-box">.box1</div>
      <div class="DemoPositionFixed-box">.box2</div>
      <div class="DemoPositionFixed-box">.box3</div>
    </div>
  </div>
</div>

<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

------

## Sticky
<!-- .slide: data-title="Position" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<div class="caniuse" data-feature="css-sticky"></div>

------

## [Sticky: Example <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://codepen.io/elijahmanor/pen/MaXavG#0)
<!-- .slide: data-title="Position" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<div class="Split">
  <div class="Split-column Split-column--50">
    <pre data-codemirror data-mode="text/html"><h1>Sticky</h1>
<nav>
  <ul>
    <li>Home</li>
    <li>Contact</li>
  </ul>
</nav>
<p>Lorem ipsum...</p>
</pre>
    <pre data-codemirror data-mode="text/css" data-lines="5">nav {
  background: blue;
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  position: sticky;
}</pre>
  </div>
  <div class="Split-column Split-column--50">
    <iframe height='383' scrolling='no' src='//codepen.io/elijahmanor/embed/MaXavG/?height=383&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/MaXavG/'>MaXavG</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
    </iframe>
  </div>
</div>

------

## Sticky Gotchas
<!-- .slide: data-title="Position" data-state="backEndBrian juniorJacob midLevelMelissa" -->

* <!-- .element: class="fragment" data-fragment-index="1" -->Unfortunately `position: sticky;` only works in Firefox under an `about:config` preference of `layout.css.sticky.enabled` and the feature was removed from Chrome to be redone and is currently [`in development`](https://bugs.chromium.org/p/chromium/issues/detail?id=231752)
* <!-- .element: class="fragment" data-fragment-index="2" -->Until then you can wire-up your own or use a shim/polyfill such as [fixed-sticky](https://github.com/filamentgroup/fixed-sticky) or [stickyfill](https://github.com/wilddeer/stickyfill)

------

## Naive Sticky Example
<!-- .slide: data-title="Position" data-state="backEndBrian juniorJacob midLevelMelissa extended" -->

<div class="Split" style="width: 120%; left: 50%; transform: translateX(-50%); position: relative;">
  <div class="Split-column Split-column--70">
    <textarea data-codemirror data-mode="text/javascript" data-line-numbers="false">
var nav = document.querySelector('nav')
var navPosition = nav.getBoundingClientRect().top;

window.addEventListener('scroll', function() {
  nav.classList.toggle('sticky',
    window.pageYOffset >= navPosition);
});
</textarea>
  </div>
  <div class="Split-column Split-column--30">
    <textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false">
.sticky {
  position: fixed;
  top: 0;
}
</textarea>
  </div>
</div>

<small>Use one of the shim/polyfills instead</small>

------

## Resources
<!-- .slide: data-title="Position" data-state="backEndBrian juniorJacob resources" -->

* [CSS Position](https://developer.mozilla.org/en-US/docs/Web/CSS/position) by MDN
* [Codecademy CSS Positioning](http://www.codecademy.com/courses/web-beginner-en-6merh/0/1)
* [fixed-sticky](https://github.com/filamentgroup/fixed-sticky)
* [stickyfill](https://github.com/wilddeer/stickyfill)

Notes:

I really should talk about floats at some point...

* https://css-tricks.com/all-about-floats/
* http://nicolasgallagher.com/micro-clearfix-hack/
* http://learnlayout.com/float-layout.html
