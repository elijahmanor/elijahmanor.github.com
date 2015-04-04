# Box Sizing
<!-- .slide: data-state="backEndBrian juniorJacob midLevelMelissa" -->

------

## Crazy Box

<div class="Split">
  <div class="Split-column">
    <pre><code>&lt;div class="crazybox"&gt;
  200 x 200
&lt;/div&gt;
&lt;div class="stick--200"&gt;&lt;/div&gt;</code></pre>
    <br />
    <pre><code>.crazybox {
  width: 200px;
  height: 200px;
  background-color: red;
}

.stick-100 {
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 200px;
  height: 5px;
  background-color: blue;
}</code></pre>
  </div>
  <div class="Split-column">
    <style>
    .crazybox--2 {
      width: 200px;
      height: 200px;
      background-color: #F00;
      box-sizing: content-box;
      font-size: 2rem !important;
      line-height: 200px !important;
    }
    .stick--200--2 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important;
      width: 200px;
      height: 5px;
      background-color: blue;
    }
    </style>
    <div class="crazybox--2">200 x 200</div>
    <div class="stick--200--2"></div>
  </div>
</div>

------

## Crazy Box

<div class="Split">
  <div class="Split-column">
    <pre><code>&lt;div class="crazybox"&gt;
  200 x 200
&lt;/div&gt;
&lt;div class="stick--200"&gt;&lt;/div&gt;</code></pre>
    <br />
    <pre><code>.crazybox {
  width: 200px;
  height: 200px;
  background-color: red;

  padding: 1rem;
  border: 1rem solid blue;
}

.stick-100 {
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 200px;
  height: 5px;
  background-color: blue;
}</code></pre>
  </div>
  <div class="Split-column">
    <style>
    .crazybox--3 {
      width: 200px;
      height: 200px;
      background-color: #F00;
      box-sizing: content-box;
      font-size: 2rem !important;
      line-height: 200px !important;
      padding: 1rem !important;
      border: 1rem solid blue !important;
      position: relative !important;
    }
    .crazybox--3:after,
    .crazybox--3::after,
    .crazybox--3:before,
    .crazybox--3::before {
      background-color: grey !important;
      content: ' ' !important;
      display: block !important;
      position: absolute !important;
      top: 1rem !important;
      left: 1rem !important;
      right: 1rem !important;
      bottom: 1rem !important;
    }
    .stick--200--3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important;
      width: 200px;
      height: 5px;
      background-color: blue;
    }
    </style>
    <div class="crazybox--3">200 x 200</div>
    <div class="stick--200--3"></div>
  </div>
</div>

------

The "box model" in CSS works like this:

width + padding + border = actual visible/rendered width of box
height + padding + border = actual visible/rendered height of box

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
