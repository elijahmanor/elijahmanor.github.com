Reveal.addEventListener('slidechanged', function(event) {
  var header = document.querySelector('.Title');
  var title = event.currentSlide.dataset.title || '';

  header.classList.toggle('Title--show', !!title);
  header.innerHTML = title;
});

document.addEventListener('webkitAnimationEnd', function(e) {
  if (e.target.closest('.Status')) {
    //document.body.parentNode.classList.remove('statusSkill--change');
  }
});
