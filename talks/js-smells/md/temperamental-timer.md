# Temperamental Timer Smell
<!-- .slide: data-state="statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" -->

------

## Smelly Code

```
setInterval(function() {
  console.log('start setInterval');
  someLongProcess(getRandomInt(2000, 4000));
}, 3000);


function someLongProcess(duration) {
  setTimeout(
    function() { console.log('long process: ' + duration); },
    duration
  );  
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

------

## Why Does This Smell?

## Out of Sync Timer <!-- .element class="fragment" -->

------

## Demo: `setInternval`

<iframe height='410' scrolling='no' src='//codepen.io/elijahmanor/embed/bNQmzP/?height=410' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/bNQmzP/'>bNQmzP</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

------

## So What!?!

## `setTimeout` <!-- .element class="fragment" -->

------

## `setTimeout`

```
setTimeout(function timer() {
  console.log('start setTimeout')
  someLongProcess(getRandomInt(2000, 4000), function() {
    setTimeout(timer, 3000);
  });
}, 3000);

function someLongProcess(duration, callback) {
  setTimeout(function() {
    console.log('long process: ' + duration);
    callback();
  }, duration);  
}

/* getRandomInt(min, max) {} */
```

------

## Demo: `setTimeout`

<iframe height='410' scrolling='no' src='//codepen.io/elijahmanor/embed/raQQay/?height=410' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/raQQay/'>raQQay</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

------

# Resources

* CodePen - http://codepen.io/elijahmanor/pen/yyQppR?editors=001

Notes:

setInterval vs setTimeout
