Reveal.addEventListener('slidechanged', function(event) {
  var header = document.querySelector('.Title');
  var title = event.currentSlide.dataset.title || '';

  header.classList.toggle('Title--show', !!title);
  header.innerHTML = title;
});

Reveal.addEventListener('fragmentshown', function(event) {
  document.querySelector('.present[data-markdown] .DeveloperTitles').classList.add('DeveloperTitles--animate');
});

Reveal.addEventListener('fragmenthidden', function(event) {
  document.querySelector('.present[data-markdown] .DeveloperTitles').classList.remove('DeveloperTitles--animate');
});

document.addEventListener('webkitAnimationEnd', function(e) {
  if (e.target.closest('.Status')) {
    //document.body.parentNode.classList.remove('statusSkill--change');
  }
});
