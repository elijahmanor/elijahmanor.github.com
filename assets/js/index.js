/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, sr, undefined) {
    "use strict";

    var $document = $(document),

        // debouncing function from John Hann
        // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
        debounce = function (func, threshold, execAsap) {
            var timeout;

            return function debounced () {
                var obj = this, args = arguments;
                function delayed () {
                    if (!execAsap) {
                        func.apply(obj, args);
                    }
                    timeout = null;
                }

                if (timeout) {
                    clearTimeout(timeout);
                } else if (execAsap) {
                    func.apply(obj, args);
                }

                timeout = setTimeout(delayed, threshold || 100);
            };
        };

    $document.ready(function () {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        function updateImageWidth() {
            var $this = $(this),
                contentWidth = $postContent.outerWidth(), // Width of the content
                imageWidth = this.naturalWidth; // Original image resolution

            if (imageWidth >= contentWidth) {
                $this.addClass('full-img');
            } else {
                $this.removeClass('full-img');
            }
        }

        var $img = $("img").on('load', updateImageWidth);
        function casperFullImg() {
            $img.each(updateImageWidth);
        }

        casperFullImg();
        $(window).smartresize(casperFullImg);

        $(".scroll-down").arctic_scroll();

    });

    // smartresize
    jQuery.fn[sr] = function(fn) { return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },

        allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };
})(jQuery, 'smartresize');

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
    pushUrl();
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

  function pushUrl() {
    var employer = $('#eventEmployer').find('.ButtonGroup-button--selected').data('value');
    var type = $('#eventType').find('.ButtonGroup-button--selected').data('value');
    var params = [];

    if (employer) { params.push('employer=' + employer); }
    if (type) { params.push('type=' + type); }

    history.pushState(null, null, params.length ? '?' + params.join('&') : '');
  }

  function readUrlAndUpdate(push) {
    var urlParameters = getUrlVars();

    if (urlParameters.employer) {
      $('#eventEmployer button[data-value="' + urlParameters.employer + '"]').trigger('click');
    }
    if (urlParameters.type) {
      $('#eventType button[data-value="' + urlParameters.type + '"]').trigger('click');
    }

    if (push) {
      pushUrl();
    }
  }

  window.addEventListener('popstate', readUrlAndUpdate);

  readUrlAndUpdate(true);
}(jQuery));

