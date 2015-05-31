var timer;
var button = document.querySelector('button');

button.addEventListener('click', function() {
  if (!timer) {
    this.innerText = 'Stop';
    timer = setTimeout(function timer() {
      log('start setTimeout')
      someLongProcess(getRandomInt(2000, 4000), function() {
        if (timer) setTimeout(timer, 3000);
      });
    }, 3000);
  } else {
    this.innerText = 'Start';
    for (var i=0; i<1000000; i++) {
      clearTimeout(i);
    }
  }
});

function someLongProcess(duration, callback) {
  setTimeout(function() {
    log('long process: ' + duration);
    callback();
  }, duration);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var output = document.getElementById('output');
function log(message) {
  output.innerHTML += message + '\n';
}
