# Temperamental Timer Smell
<!-- .slide: data-state="statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" -->

------

## Smelly Code
<!-- .slide: data-title="Temperamental Timer" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

<pre class="language-javascript"><code>setInterval(function() {
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
</code></pre>

------

# Why Does This Smell?
<!-- .slide: data-title="Temperamental Timer" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

## Out of Sync Timer <!-- .element class="fragment" -->

------

## Demo: `setInternval`
<!-- .slide: data-title="Temperamental Timer" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

<iframe height='410' scrolling='no' src='//codepen.io/elijahmanor/embed/bNQmzP/?height=410'
data-online="//codepen.io/elijahmanor/embed/bNQmzP/?height=410"
data-offline="./codepen/codepen_temperamental_timer_setinterval/index.html?height=410"
frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/bNQmzP/'>bNQmzP</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

------

# So What!?!
<!-- .slide: data-title="Temperamental Timer" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

## `setTimeout` <!-- .element class="fragment" -->

------

## `setTimeout`
<!-- .slide: data-title="Temperamental Timer" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--mid statusSkill--change" data-background="#222" -->

<pre class="language-javascript"><code>setTimeout(function timer() {
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
</code></pre>

------

## Demo: `setTimeout`
<!-- .slide: data-title="Temperamental Timer" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--mid" data-background="#222" -->

<iframe height='410' scrolling='no' src='//codepen.io/elijahmanor/embed/raQQay/?height=410'
data-online="//codepen.io/elijahmanor/embed/raQQay/?height=410"
data-offline="./codepen/codepen_temperamental_timer_settimeout/index.html?height=410"
frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/raQQay/'>raQQay</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

------

# Resources
<!-- .slide: data-title="Temperamental Timer" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--mid" data-background="#222" -->

* [CodePen](http://codepen.io/elijahmanor/pen/yyQppR?editors=001)
