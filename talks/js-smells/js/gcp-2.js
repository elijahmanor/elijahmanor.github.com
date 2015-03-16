
if (x === 3) {
  if ('') {
    console.log('test1234');
    var x = 1 + 2;
  }
}

function hello(message) {
  console.log(message);
}

function goodbye(what) { console.log(what + 'did you say'); }

var circles = document.querySelectorAll(".Circle");

[].forEach.call(circles, function(element, index) {
  element.innerText = "Circle: " + index;
  element.style.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
});
