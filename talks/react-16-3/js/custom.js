function handleSlideChanged( event ) {
  if ( window.localStorage.isAnnotated === undefined ) {
    console.log( 'isAnnotated === undefined' );
    window.localStorage.isAnnotated = true;
  }
  event = event || { currentSlide: { dataset: {} } };
  var header = document.querySelector('.Title');
  var title = event.currentSlide.dataset.title || '';
  var state = event.currentSlide.dataset.state || '';
  var isRecording = window.localStorage.isRecording === 'true';
  var isAnnotated = window.localStorage.isAnnotated === "true";
 
  header.classList.toggle('Title--show', !!title);
  document.body.classList.toggle('is-recording', isRecording);
  document.body.classList.toggle('is-annotated', isAnnotated);
  header.innerHTML = title;
}

Reveal.addEventListener('slidechanged', handleSlideChanged);
