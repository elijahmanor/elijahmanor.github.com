
if (false) {
  console.log('test code');
}

while (true) {
  console.log('what?');
}

var boxes = document.querySelectorAll(".Box");

[].forEach.call(boxes, function(element, index) {
  element.innerText = "Box: " + index;
  element.style.backgroundColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
});


var trimmed = text.replace(/^\s+|\s+$)g, '');
