# Pseudo Elements

> ":before and :after are pseudo elements which allows you to insert content onto a page from CSS (without it needing to be in the HTML)." --[:after / :before](https://css-tricks.com/almanac/selectors/a/after-and-before/)

------

## [:before/:after Visual <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](https://css-tricks.com/pseudo-element-roundup/)
<!-- .slide: data-title="Pseudo Elements" data-state="backEndBrian juniorJacob" -->

<img src="./imgs/pseudo-elements.jpg" style="height: 450px;" />

<small>Source: [CSS Tricks: A Whole Bunch of Amazing Stuff Pseudo Elements Can Do](https://css-tricks.com/pseudo-element-roundup/) </small>

------

## [Scenario <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://codepen.io/elijahmanor/pen/MaGLRO?editors=110)
<!-- .slide: data-title="Pseudo Elements" data-state="backEndBrian juniorJacob" data-menu-title="Scenario: Markup" -->

<textarea data-codemirror data-mode="text/html" data-line-numbers="false"><div class="Email" data-count="12">Emails</div></textarea>

![](./imgs/pseudo-element-screenshot-big.png)

------

## [Scenario <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://codepen.io/elijahmanor/pen/MaGLRO?editors=110)
<!-- .slide: data-title="Pseudo Elements" data-state="backEndBrian juniorJacob midLevelMelissa gpu" data-menu-title="Scenario: CSS" -->

<div class="Split" style="width: 120%; left: 50%; transform: translateX(-50%); position: relative;">
  <div class="Split-column Split-column--40">
    <textarea data-codemirror data-mode="text/html" data-line-numbers="false" data-lines="">
<div class="Email"
  data-count="12">
  Emails
</div>
</textarea>
    <textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false" data-lines="">.Email {
  width: 5rem;
  height: 5rem;
  line-height: 5rem;
  text-align: center;
  color: white;
  background: #0275d8;
  border-radius: 50%;
  position: relative;
}</textarea>
  </div>
  <div class="Split-column Split-column--60">
    <textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false" data-lines="">.Email:after {
  content: attr(data-count);
  position: absolute;
  bottom: -0.5rem;
  left: 3rem;
  background: white;
  color: #0275d8;
  border: 1px solid currentColor;
  border-radius: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  height: 1.5rem;
  line-height: 1.5;
}</textarea>
  </div>
</div>

<img src="./imgs/pseudo-element-screenshot-big.png" style="right: -5rem; border-radius: 0 0 0 50%; position: absolute; top: 0;" />

Notes:

Maybe show the image from the previous slide somehow for a visualization of what is going on...

------

## [Scenario <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://codepen.io/elijahmanor/pen/MaGLRO?editors=110)
<!-- .slide: data-title="Pseudo Elements" data-state="backEndBrian juniorJacob midLevelMelissa gpu" data-transition="none" data-menu-title="Scenario: CSS - Email Styling" -->

<div class="Split" style="width: 120%; left: 50%; transform: translateX(-50%); position: relative;">
  <div class="Split-column Split-column--40">
    <textarea data-codemirror data-mode="text/html" data-line-numbers="false" data-lines="">
<div class="Email"
  data-count="12">
  Emails
</div>
</textarea>
    <textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false" data-lines="1,2,3,4,5,6,7">.Email {
  width: 5rem;
  height: 5rem;
  line-height: 5rem;
  text-align: center;
  color: white;
  background: #0275d8;
  border-radius: 50%;
  position: relative;
}</textarea>
  </div>
  <div class="Split-column Split-column--60">
    <textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false" data-lines="">.Email:after {
  content: attr(data-count);
  position: absolute;
  bottom: -0.5rem;
  left: 3rem;
  background: white;
  color: #0275d8;
  border: 1px solid currentColor;
  border-radius: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  height: 1.5rem;
  line-height: 1.5;
}</textarea>
  </div>
</div>

<img src="./imgs/pseudo-element-screenshot-big.png" style="right: -5rem; border-radius: 0 0 0 50%; position: absolute; top: 0;" />

Notes:

Maybe show the image from the previous slide somehow for a visualization of what is going on...

------

## [Scenario <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://codepen.io/elijahmanor/pen/MaGLRO?editors=110)
<!-- .slide: data-title="Pseudo Elements" data-state="backEndBrian juniorJacob midLevelMelissa gpu" data-transition="none" data-menu-title="Scenario: CSS - Content" -->

<div class="Split" style="width: 120%; left: 50%; transform: translateX(-50%); position: relative;">
  <div class="Split-column Split-column--40">
    <textarea data-codemirror data-mode="text/html" data-line-numbers="false" data-lines="1">
<div class="Email"
  data-count="12">
  Emails
</div>
</textarea>
    <textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false" data-lines="">.Email {
  width: 5rem;
  height: 5rem;
  line-height: 5rem;
  text-align: center;
  color: white;
  background: #0275d8;
  border-radius: 50%;
  position: relative;
}</textarea>
  </div>
  <div class="Split-column Split-column--60">
    <textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false" data-lines="1">.Email:after {
  content: attr(data-count);
  position: absolute;
  bottom: -0.5rem;
  left: 3rem;
  background: white;
  color: #0275d8;
  border: 1px solid currentColor;
  border-radius: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  height: 1.5rem;
  line-height: 1.5;
}</textarea>
  </div>
</div>

<img src="./imgs/pseudo-element-screenshot-big.png" style="right: -5rem; border-radius: 0 0 0 50%; position: absolute; top: 0;" />

Notes:

Maybe show the image from the previous slide somehow for a visualization of what is going on...

------

## [Scenario <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://codepen.io/elijahmanor/pen/MaGLRO?editors=110)
<!-- .slide: data-title="Pseudo Elements" data-state="backEndBrian juniorJacob midLevelMelissa gpu" data-transition="none" data-menu-title="Scenario: CSS - Position" -->

<div class="Split" style="width: 120%; left: 50%; transform: translateX(-50%); position: relative;">
  <div class="Split-column Split-column--40">
    <textarea data-codemirror data-mode="text/html" data-line-numbers="false" data-lines="">
<div class="Email"
  data-count="12">
  Emails
</div>
</textarea>
    <textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false" data-lines="8">.Email {
  width: 5rem;
  height: 5rem;
  line-height: 5rem;
  text-align: center;
  color: white;
  background: #0275d8;
  border-radius: 50%;
  position: relative;
}</textarea>
  </div>
  <div class="Split-column Split-column--60">
    <textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false" data-lines="2,3,4,5,6">.Email:after {
  content: attr(data-count);
  position: absolute;
  bottom: -0.5rem;
  left: 3rem;
  background: white;
  color: #0275d8;
  border: 1px solid currentColor;
  border-radius: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  height: 1.5rem;
  line-height: 1.5;
}</textarea>
  </div>
</div>

<img src="./imgs/pseudo-element-screenshot-big.png" style="right: -5rem; border-radius: 0 0 0 50%; position: absolute; top: 0;" />

Notes:

Maybe show the image from the previous slide somehow for a visualization of what is going on...

------

## [Scenario <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://codepen.io/elijahmanor/pen/MaGLRO?editors=110)
<!-- .slide: data-title="Pseudo Elements" data-state="backEndBrian juniorJacob midLevelMelissa gpu" data-transition="none" data-menu-title="Scenario: CSS - currentColor" -->

<div class="Split" style="width: 120%; left: 50%; transform: translateX(-50%); position: relative;">
  <div class="Split-column Split-column--40">
    <textarea data-codemirror data-mode="text/html" data-line-numbers="false" data-lines="">
<div class="Email"
  data-count="12">
  Emails
</div>
</textarea>
    <textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false" data-lines="">.Email {
  width: 5rem;
  height: 5rem;
  line-height: 5rem;
  text-align: center;
  color: white;
  background: #0275d8;
  border-radius: 50%;
  position: relative;
}</textarea>
  </div>
  <div class="Split-column Split-column--60">
    <textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false" data-lines="7,8">.Email:after {
  content: attr(data-count);
  position: absolute;
  bottom: -0.5rem;
  left: 3rem;
  background: white;
  color: #0275d8;
  border: 1px solid currentColor;
  border-radius: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  height: 1.5rem;
  line-height: 1.5;
}</textarea>
  </div>
</div>

<img src="./imgs/pseudo-element-screenshot-big.png" style="right: -5rem; border-radius: 0 0 0 50%; position: absolute; top: 0;" />

Notes:

Maybe show the image from the previous slide somehow for a visualization of what is going on...

------

## [Scenario <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://codepen.io/elijahmanor/pen/MaGLRO?editors=110)
<!-- .slide: data-title="Pseudo Elements" data-state="backEndBrian juniorJacob midLevelMelissa gpu" data-transition="none" data-menu-title="Scenario: CSS - Counter Styling" -->

<div class="Split" style="width: 120%; left: 50%; transform: translateX(-50%); position: relative;">
  <div class="Split-column Split-column--40">
    <textarea data-codemirror data-mode="text/html" data-line-numbers="false" data-lines="">
<div class="Email"
  data-count="12">
  Emails
</div>
</textarea>
    <textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false" data-lines="">.Email {
  width: 5rem;
  height: 5rem;
  line-height: 5rem;
  text-align: center;
  color: white;
  background: #0275d8;
  border-radius: 50%;
  position: relative;
}</textarea>
  </div>
  <div class="Split-column Split-column--60">
    <textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false" data-lines="9,10,11,12">.Email:after {
  content: attr(data-count);
  position: absolute;
  bottom: -0.5rem;
  left: 3rem;
  background: white;
  color: #0275d8;
  border: 1px solid currentColor;
  border-radius: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  height: 1.5rem;
  line-height: 1.5;
}</textarea>
  </div>
</div>

<img src="./imgs/pseudo-element-screenshot-big.png" style="right: -5rem; border-radius: 0 0 0 50%; position: absolute; top: 0;" />

Notes:

Maybe show the image from the previous slide somehow for a visualization of what is going on...

------

## [Scenario <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://codepen.io/elijahmanor/pen/MaGLRO?editors=110)
<!-- .slide: data-title="Pseudo Elements" data-state="backEndBrian juniorJacob midLevelMelissa" data-menu-title="Scenario: Demo" -->

<div class="Split" style="width: 125%; left: 50%; transform: translateX(-50%); position: relative;">
  <div class="Split-column Split-column--40">
    <iframe height='268' scrolling='no' src='//codepen.io/elijahmanor/embed/MaGLRO/?height=268&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/MaGLRO/'>MaGLRO</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
    </iframe>
  </div>
  <div class="Split-column Split-column--60">
    <h4>jQuery</h4>
    <textarea data-codemirror data-mode="text/javascript" data-line-numbers="false" data-lines="">
const eml = $('.Email');
const txt = $('input');

$('button').on('click', () => {
  eml.attr('data-count', txt.val());
});</textarea>
    <div class="fragment">
      <h4>Vanilla JavaScript</h4>
      <textarea data-codemirror data-mode="text/javascript" data-line-numbers="false" data-lines="">const eml = document.querySelector('.Email');
const txt = document.querySelector('input');

eml.dataset.count = txt.value;</textarea>
    </div>
  </div>
</div>

------

## [Other Ideas <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://codepen.io/elijahmanor/pen/MaGLRO?editors=110)
<!-- .slide: data-title="Pseudo Elements" data-state="backEndBrian juniorJacob midLevelMelissa extended" data-menu-title="Other Ideas: Empty Content" -->

<div class="Split">
  <div class="Split-column Split-column--35">
    <iframe height='268' scrolling='no' src='//codepen.io/elijahmanor/embed/bVMPQa/?height=268&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/bVMPQa/'>bVMPQa</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
    </iframe>
  </div>
  <div class="Split-column Split-column--65">
    <textarea data-codemirror data-mode="text/html" data-line-numbers="false" data-lines="2"><ul>
  <li><a href="http://bit.ly">Bitly</a>
  <li><a href="http://bit.ly"></a>
  <li><a href="">Bitly</a>
</ul></textarea>

<textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false" data-lines="0,1,2">a[href^="http"]:empty:before {
  content: attr(href);
}
a[href='']:after {
  content: ' ⚠'; color: red;
}
li { display: inline; }
li:not(:last-child):after {
  content: ',';
}</textarea>
  </div>
</div>

------

## [Other Ideas <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://codepen.io/elijahmanor/pen/MaGLRO?editors=110)
<!-- .slide: data-title="Pseudo Elements" data-state="backEndBrian juniorJacob midLevelMelissa extended" data-menu-title="Other Ideas: Empty URL" -->

<div class="Split">
  <div class="Split-column Split-column--35">
    <iframe height='268' scrolling='no' src='//codepen.io/elijahmanor/embed/bVMPQa/?height=268&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/bVMPQa/'>bVMPQa</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
    </iframe>
  </div>
  <div class="Split-column Split-column--65">
    <textarea data-codemirror data-mode="text/html" data-line-numbers="false" data-lines="3"><ul>
  <li><a href="http://bit.ly">Bitly</a>
  <li><a href="http://bit.ly"></a>
  <li><a href="">Bitly</a>
</ul></textarea>

<textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false" data-lines="3,4,5">a[href^="http"]:empty:before {
  content: attr(href);
}
a[href='']:after {
  content: ' ⚠'; color: red;
}
li { display: inline; }
li:not(:last-child):after {
  content: ',';
}</textarea>
  </div>
</div>

------

## [Other Ideas <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://codepen.io/elijahmanor/pen/MaGLRO?editors=110)
<!-- .slide: data-title="Pseudo Elements" data-state="backEndBrian juniorJacob midLevelMelissa extended" data-menu-title="Other Ideas: CSV" -->

<div class="Split">
  <div class="Split-column Split-column--35">
    <iframe height='268' scrolling='no' src='//codepen.io/elijahmanor/embed/bVMPQa/?height=268&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/bVMPQa/'>bVMPQa</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
    </iframe>
  </div>
  <div class="Split-column Split-column--65">
    <textarea data-codemirror data-mode="text/html" data-line-numbers="false" data-lines="1,2,3"><ul>
  <li><a href="http://bit.ly">Bitly</a>
  <li><a href="http://bit.ly"></a>
  <li><a href="">Bitly</a>
</ul></textarea>

<textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false" data-lines="6,7,8,9">a[href^="http"]:empty:before {
  content: attr(href);
}
a[href='']:after {
  content: ' ⚠'; color: red;
}
li { display: inline; }
li:not(:last-child):after {
  content: ',';
}</textarea>
  </div>
</div>

------

## Resources
<!-- .slide: data-title="Pseudo Elements" data-state="backEndBrian juniorJacob midLevelMelissa resources" -->

* [A Whole Bunch of Amazing Stuff Pseudo Elements Can Do](https://css-tricks.com/pseudo-element-roundup/)

Notes:
