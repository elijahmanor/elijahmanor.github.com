Reveal.addEventListener('slidechanged', function(event) {
  var header = document.querySelector('.Title');
  var title = event.currentSlide.dataset.title || '';

  header.classList.toggle('Title--show', !!title);
  header.innerHTML = title;
});
