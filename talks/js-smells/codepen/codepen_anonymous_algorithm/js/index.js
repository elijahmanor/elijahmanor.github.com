document.querySelector('button')
  .addEventListener('click', function handler() {
  	alert('Ka-boom!');
    this.removeEventListener('click', handler);
  });