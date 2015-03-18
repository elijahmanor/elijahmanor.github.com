# jQuery Inquiry

------

## Smelly Code

```
$('.Component')
  .find('button')
    .addClass('Component-button--action')
    .click(function() { alert('HEY!'); })
  .end()
  .mouseenter(function() { $(this).addClass('Component--over'); })
  .mouseleave(function() { $(this).removeClass('Component--over'); })
  .addClass('initialized');
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
  $('.Component button').addClass('Component-button-action');
});
```

------

## Resources

* CodePen - http://codepen.io/elijahmanor/pen/raQQvp
