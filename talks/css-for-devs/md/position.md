# Position
<!-- .slide: data-state="backEndBrian juniorJacob" -->

> TODO: x.

------

## Scenario
<!-- .slide: data-state="backEndBrian juniorJacob" -->

> TODO: Put some scenario where dev looks to see why style isn't applied...

------

## Position
<!-- .slide: data-state="backEndBrian juniorJacob" -->

<!-- MDN
position: static;
This keyword lets the element use the normal behavior, that is it is laid out in its current position in the flow.  The top, right, bottom, left and z-index properties do not apply.
position: relative;
This keyword lays out all elements as though the element were not positioned, and then adjust the element's position, without changing layout (and thus leaving a gap for the element where it would have been had it not been positioned). The effect of position:relative on table-*-group, table-row, table-column, table-cell, and table-caption elements is undefined.
position: absolute;
Do not leave space for the element. Instead, position it at a specified position relative to its closest positioned ancestor or to the containing block. Absolutely positioned boxes can have margins, they do not collapse with any other margins.
position: fixed;
Do not leave space for the element. Instead, position it at a specified position relative to the screen's viewport and don't move it when scrolled. When printing, position it at that fixed position on every page.
-->

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

This keyword lets the element use the normal behavior, that is it is laid out in its current position in the flow.  The top, right, bottom, left and z-index properties do not apply.

------

## Relative

This keyword lays out all elements as though the element were not positioned, and then adjust the element's position, without changing layout (and thus leaving a gap for the element where it would have been had it not been positioned). The effect of position:relative on table-*-group, table-row, table-column, table-cell, and table-caption elements is undefined.

------

## Absolute

Do not leave space for the element. Instead, position it at a specified position relative to its closest positioned ancestor or to the containing block. Absolutely positioned boxes can have margins, they do not collapse with any other margins.

------

## Fixed

Do not leave space for the element. Instead, position it at a specified position relative to the screen's viewport and don't move it when scrolled. When printing, position it at that fixed position on every page.

------

## Resources
<!-- .slide: data-state="backEndBrian juniorJacob midLevelMelissa" -->

* [CSS Position](https://developer.mozilla.org/en-US/docs/Web/CSS/position) by MDN
* [Codecademy CSS Positioning](http://www.codecademy.com/courses/web-beginner-en-6merh/0/1)

Notes:

http://www.smashingmagazine.com/2009/09/15/the-z-index-css-property-a-comprehensive-look/

z-index will only work on an element whose position property has been explicitly set to absolute, fixed, or relative.


`overflow: visible, scroll, hidden;`

http://blog.teamtreehouse.com/css-positioning
https://www.khanacademy.org/computing/computer-programming/html-css/css-layout-properties/p/css-position
http://www.codecademy.com/courses/web-beginner-en-6merh/0/3
http://www.barelyfitz.com/screencast/html-training/css/positioning/
http://learnlayout.com/position.html
http://learn.shayhowe.com/advanced-html-css/detailed-css-positioning/
http://alistapart.com/article/css-positioning-101
http://www.impressivewebs.com/a-detailed-look-at-the-z-index-css-property/
http://nicolasgallagher.com/micro-clearfix-hack/
https://css-tricks.com/all-about-floats/
http://davidwalsh.name/demo/css-fixed-position.php
https://www.youtube.com/watch?v=dK-NwjlhmqU
http://www.sitepoint.com/3-things-almost-one-knows-css/

http://www.impressivewebs.com/a-detailed-look-at-the-z-index-css-property/
http://alistapart.com/article/css-positioning-101
http://learn.shayhowe.com/advanced-html-css/detailed-css-positioning/
http://learnlayout.com/float-layout.html
http://www.barelyfitz.com/screencast/html-training/css/positioning/
http://www.codecademy.com/courses/web-beginner-en-6merh/0/3
https://www.khanacademy.org/computing/computer-programming/html-css/css-layout-properties/p/css-position
http://blog.teamtreehouse.com/css-positioning
http://www.smashingmagazine.com/2009/09/15/the-z-index-css-property-a-comprehensive-look/
http://www.codecademy.com/courses/web-beginner-en-6merh/0/1
https://developer.mozilla.org/en-US/docs/Web/CSS/position
