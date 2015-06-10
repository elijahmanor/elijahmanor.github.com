(function($) {
  var $events = $('.Events .Event');
  var selectedEmployer;
  var selectedType;

  function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(
      /[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
      }
    );
    return vars;
  }

  $('#eventEmployer').on('click', 'button', function(e) {
    var $button = $(this);

    $button.closest('.ButtonGroup').find('.ButtonGroup-button').not($button).removeClass('ButtonGroup-button--selected');
    $button.toggleClass('ButtonGroup-button--selected');
    selectedEmployer = $button.hasClass('ButtonGroup-button--selected') ? $button.data('value') : null;

    toggleEvents();
  });

  $('#eventType').on('click', 'button', function(e) {
    var $button = $(this);

    $button.closest('.ButtonGroup').find('.ButtonGroup-button').not($button).removeClass('ButtonGroup-button--selected');
    $button.toggleClass('ButtonGroup-button--selected');
    selectedType = $button.hasClass('ButtonGroup-button--selected') ? $button.data('value') : null;

    toggleEvents();
  });

  function toggleEvents() {
    $events.each(function(index, event) {
      var $event = $(event);

      if (selectedEmployer && selectedType) {
        visible = $event.data('employer') === selectedEmployer && $event.data('type') === selectedType;
      } else if (selectedEmployer) {
        visible = $event.data('employer') === selectedEmployer;
      } else if (selectedType) {
        visible = $event.data('type') === selectedType;
      } else {
        visible = true;
      }

      $event.toggle(visible);
    });

    updateCounts();
  }

  function updateCounts() {
    var eventSize = 0,
      talkSize = 0,
      userGroupSize = 0,
      conferenceSize = 0,
      podcastSize = 0;

    $events.each(function(index, event) {
      var $event = $(event);
      var type = $event.data('type');

      if ($event.is(':visible')) {
        eventSize += 1;
        talkSize += $event.find('.Session').length;
        userGroupSize += type === 'usergroup' ? 1 : 0;
        conferenceSize += type === 'conference' ? 1 : 0;
        podcastSize += type === 'podcast' ? 1 : 0;
      }
    });

    $('.eventSize').text(eventSize);
    $('.talkSize').text(talkSize);
    $('.userGroupSize').text(userGroupSize);
    $('.conferenceSize').text(conferenceSize);
    $('.podcastSize').text(podcastSize);
  }

  var urlParameters = getUrlVars();
  if (urlParameters.employer) {
    $('#eventEmployer button[data-value="' + urlParameters.employer + '"]').trigger('click');
  }
  if (urlParameters.type) {
    $('#eventType button[data-value="' + urlParameters.type + '"]').trigger('click');
  }
}(jQuery));
