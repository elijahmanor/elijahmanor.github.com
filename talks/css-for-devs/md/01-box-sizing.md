# Box Sizing
<!-- .slide: data-state="backEndBrian juniorJacob midLevelMelissa" -->

The "box model" in CSS works like this:

width + padding + border = actual visible/rendered width of box
height + padding + border = actual visible/rendered height of box

------

# Box Sizing
<!-- .slide: data-state="backEndBrian juniorJacob" -->

content-box
This is the default style as specified by the CSS standard. The width and height properties are measured including only the content, but not the padding, border or margin. Note: Padding, border & margin will be outside of the box e.g. IF .box {width: 350px}; THEN you apply {border: 10px solid black;} RESULT {rendered in the browser} .box {width: 370px;}

------

# Box Sizing
<!-- .slide: data-state="backEndBrian" -->

border-box
The width and height properties include the padding and border, but not the margin. This is the box model used by Internet Explorer when the document is in Quirks mode. Note: Padding & border will be inside of the box e.g. IF .box {width: 350px}; THEN you apply {border: 10px solid black;} RESULT {rendered in the browser} .box {width: 350px;}

http://blog.teamtreehouse.com/box-sizing-secret-simple-css-layouts

------

# Box Sizing
<!-- .slide: data-state="backEndBrian midLevelMelissa" -->

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

------

# Box Sizing
<!-- .slide: data-state="juniorJacob midLevelMelissa" -->

http://learnlayout.com/box-sizing.html

https://css-tricks.com/box-sizing/

http://www.paulirish.com/2012/box-sizing-border-box-ftw/

https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/


https://developer.mozilla.org/en-US/docs/Web/CSS/box_model
