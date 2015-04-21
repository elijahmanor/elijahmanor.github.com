var timer;
var button = document.querySelector('button');

button.addEventListener('click', function() {
  if (!timer) {
    this.innerText = 'Stop';
    timer = setInterval(function() {
      log('start setInterval');
      someLongProcess(getRandomInt(2000, 4000));
    }, 3000);    
  } else {
    this.innerText = 'Start';
    clearInterval(timer);
  }
});

function someLongProcess(duration) {
  setTimeout(
    function() { log('long process: ' + duration); },
    duration
  );  
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var output = document.getElementById('output');
function log(message) {
  output.innerHTML += message + '\n';
}