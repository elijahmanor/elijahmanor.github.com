# Pseudo Elements
<!-- .slide: data-state="backEndBrian juniorJacob" -->

> ":before and :after are pseudo elements which allows you to insert content onto a page from CSS (without it needing to be in the HTML)." --[:after / :before](https://css-tricks.com/almanac/selectors/a/after-and-before/)

------

## [:before/:after Visual <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](https://css-tricks.com/pseudo-element-roundup/)
<!-- .slide: data-title="Pseudo Elements" data-state="backEndBrian juniorJacob" -->

![](./imgs/pseudo-elements.jpg)

------

## [Scenario <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://codepen.io/elijahmanor/pen/MaGLRO?editors=110)
<!-- .slide: data-title="Pseudo Elements" data-state="backEndBrian juniorJacob" -->

<textarea data-codemirror data-mode="text/html" data-line-numbers="false"><div class="Email" data-count="12">Emails</div></textarea>

![](./imgs/pseudo-element-screenshot-big.png)

------

## [Scenario <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://codepen.io/elijahmanor/pen/MaGLRO?editors=110)
<!-- .slide: data-title="Pseudo Elements" data-state="backEndBrian juniorJacob midLevelMelissa gpu" -->

<div class="Split">
  <div class="Split-column Split-column--40">
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

------

## [Scenario <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://codepen.io/elijahmanor/pen/MaGLRO?editors=110)
<!-- .slide: data-title="Pseudo Elements" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<iframe height='268' scrolling='no' src='//codepen.io/elijahmanor/embed/MaGLRO/?height=268&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/MaGLRO/'>MaGLRO</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

------

## [Other Ideas <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://codepen.io/elijahmanor/pen/MaGLRO?editors=110)
<!-- .slide: data-title="Pseudo Elements" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<div class="Split">
  <div class="Split-column Split-column--65">
    <textarea data-codemirror data-mode="text/html" data-line-numbers="false" data-lines=""><ul>
  <li><a href="http://bit.ly">Bitly</a>
  <li><a href="http://bit.ly"></a>
  <li><a href="">Bitly</a>
</ul></textarea>

<textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false" data-lines="">a[href^="http"]:empty:before {
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
  <div class="Split-column Split-column--35">
    <iframe height='268' scrolling='no' src='//codepen.io/elijahmanor/embed/bVMPQa/?height=268&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/bVMPQa/'>bVMPQa</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
    </iframe>
  </div>
</div>

------

## Resources
<!-- .slide: data-title="Pseudo Elements" data-state="backEndBrian juniorJacob midLevelMelissa" -->

* [A Whole Bunch of Amazing Stuff Pseudo Elements Can Do](https://css-tricks.com/pseudo-element-roundup/)

Notes:
