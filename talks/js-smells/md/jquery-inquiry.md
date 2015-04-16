# jQuery Inquiry
<!-- .slide: data-state="statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" -->

------

## Smelly Code

```
$(document).ready(function() {
  $('.Component')
    .find('button')
      .addClass('Component-button--action')
      .click(function() { alert('HEY!'); })
    .end()
    .mouseenter(function() { $(this).addClass('Component--over'); })
    .mouseleave(function() { $(this).removeClass('Component--over'); })
    .addClass('initialized');
});
```

------

## Why Does This Smell?

## Extreme Chaining <!-- .element class="fragment" -->

------

## So What!?!

## Let's Refactor <!-- .element class="fragement" -->

------

## Refactor

```
// Event Delegation before DOM Ready
$(document).on('mouseenter mouseleave', '.Component', function(e) {
  $(this).toggleClass('Component--over', e.type === 'mouseenter');  
});

$(document).on('click', '.Component', function(e) {
  alert('HEY!');
});

$(document).ready(function() {
  $('.Component button').addClass('Component-button--action');
});
```

------

## Demo

<iframe height='266' scrolling='no' src='//codepen.io/elijahmanor/embed/pvQQZw/?height=266' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/pvQQZw/'>pvQQZw</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

------

# Tooling

------

## `eslint-plugin-smells`

* `no-complex-chaining`<!-- .element: class="fragment" -->

------

## Resources

* CodePen - http://codepen.io/elijahmanor/pen/pvQQZw/
