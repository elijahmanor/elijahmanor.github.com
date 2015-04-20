# jQuery Inquiry
<!-- .slide: data-state="statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" -->

------

## Smelly Code
<!-- .slide: data-title="jQuery Inquiry" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

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

# Why Does This Smell?
<!-- .slide: data-title="jQuery Inquiry" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

## Extreme Chaining <!-- .element class="fragment" -->

------

# So What!?!
<!-- .slide: data-title="jQuery Inquiry" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

## Let's Refactor <!-- .element class="fragment" -->

------

## Refactor
<!-- .slide: data-title="jQuery Inquiry" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--senior statusSkill--change" data-background="#222" -->

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
<!-- .slide: data-title="jQuery Inquiry" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--senior" data-background="#222" -->

<iframe height='266' scrolling='no' src='//codepen.io/elijahmanor/embed/pvQQZw/?height=266' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/pvQQZw/'>pvQQZw</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

------

# Tooling
<!-- .slide: data-title="jQuery Inquiry" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--senior" data-background="#222" -->

------

## `eslint-plugin-smells`
<!-- .slide: data-title="jQuery Inquiry" data-state="title statusLint statusLint--easy statusRule statusRule--custom statusRule--change statusSkill statusSkill--senior" data-background="#222" -->

* <!-- .element: class="fragment" --> [`no-complex-chaining`](http://bit.ly/eslint-plugin-smells)

------

## Resources
<!-- .slide: data-title="jQuery Inquiry" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--senior" data-background="#222" -->

* [CodePen](http://codepen.io/elijahmanor/pen/pvQQZw/)
