# Temperamental Timer Smell

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



```
setTimeout(function timer() {
  console.log('start setTimeout')
  someLongProcess(getRandomInt(2000, 4000), function() {
    setTimeout(timer, 3000);
  });
}, 3000);

function someLongProcess(duration, callback) {
  setTimeout(
    function() {
      console.log('long process: ' + duration);
      callback();
    },
    duration
  );  
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

```

------

## Why Does This Smell?

------

# Resources

* CodePen - http://codepen.io/elijahmanor/pen/yyQppR?editors=001

Notes:

setInterval vs setTimeout
