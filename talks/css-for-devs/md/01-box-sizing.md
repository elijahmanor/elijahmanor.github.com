# Box Sizing
<!-- .slide: data-state="backEndBrian juniorJacob midLevelMelissa" -->

------

## Crazy Box

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

.stick-100 {
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

.stick-100 {
  width: 200px;
  height: 5px;
  background-color: blue;
}</code></pre>
  </div>
  <div class="Split-column">
    <div class="crazybox--3">200 x 200</div>
    <div class="stick--200--3"></div>
    <h4 class="fragment">default box model</h4>
    <p class="fragment">width + padding + border = rendered width of box</p>
  </div>
</div>

------


------

# Box Sizing
<!-- .slide: data-state="backEndBrian juniorJacob" -->

## content-box

This is the default style as specified by the CSS standard. The width and height properties are measured including only the content, but not the padding, border or margin. Note: Padding, border & margin will be outside of the box e.g. IF .box {width: 350px}; THEN you apply {border: 10px solid black;} RESULT {rendered in the browser} .box {width: 370px;}

------

# Box Sizing
<!-- .slide: data-state="backEndBrian" -->

## border-box

The width and height properties include the padding and border, but not the margin. This is the box model used by Internet Explorer when the document is in Quirks mode. Note: Padding & border will be inside of the box e.g. IF .box {width: 350px}; THEN you apply {border: 10px solid black;} RESULT {rendered in the browser} .box {width: 350px;}

http://blog.teamtreehouse.com/box-sizing-secret-simple-css-layouts

------

# Box Sizing
<!-- .slide: data-state="backEndBrian midLevelMelissa" -->

```
.simple {
  width: 500px;
  margin: 20px auto;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}

.fancy {
  width: 500px;
  margin: 20px auto;
  padding: 50px;
  border: solid blue 10px;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
```

------

# Resources

* http://learnlayout.com/box-sizing.html
* https://css-tricks.com/box-sizing/
* http://www.paulirish.com/2012/box-sizing-border-box-ftw/
* https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/

* https://developer.mozilla.org/en-US/docs/Web/CSS/box_model
