function handleSlideChanged( event ) {
  event = event || { currentSlide: { dataset: {} } };
  var header = document.querySelector('.Title');
  var title = event.currentSlide.dataset.title || '';
  var state = event.currentSlide.dataset.state || '';
  var isRecording = window.localStorage.isRecording === 'true';

  header.classList.toggle('Title--show', !!title);
  document.body.classList.toggle('is-recording', isRecording);
  header.innerHTML = title;
}

Reveal.addEventListener('slidechanged', handleSlideChanged);
