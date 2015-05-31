$(document).ready(function() {
  $('.Component1')
    .find('button')
      .addClass('Component1-button--action')
      .click(function() { alert('HEY!'); })
    .end()
    .mouseenter(function() { $(this).addClass('Component1--over'); })
    .mouseleave(function() { $(this).removeClass('Component1--over'); })
    .addClass('initialized');
});

//------

// Event Delegation before DOM Ready
$(document).on('mouseenter mouseleave', '.Component2', function(e) {
  $(this).toggleClass('Component2--over', e.type === 'mouseenter');  
});

$(document).on('click', '.Component2', function(e) {
  alert('HEY!');
});

$(document).ready(function() {
  $('.Component2 button').addClass('Component2-button--action');
});