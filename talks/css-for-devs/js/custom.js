document.addEventListener('DOMContentLoaded', function() {});
var lengthOfPresentation = window.localStorage.lengthOfPresentation || 30;

var dialog = document.querySelector( "#dialog" );
if ( !dialog.showModal ) { dialog.style.display = "none"; }

Reveal.addEventListener('slidechanged', function(event) {
  var header = document.querySelector('.Title');
  var title = event.currentSlide.dataset.title || '';
  var state = event.currentSlide.dataset.state || '';

  if ( document.documentElement.classList.contains( "twitter" ) ) {
    twttr.widgets.load()
  }

  var pace = document.querySelector( ".pace" );
  if ( !pace ) {
    document.querySelector( ".progress" ).insertAdjacentHTML( "afterend", "<div class='pace'><span></span></div>" );
  }

  if ( event.indexh === 0 && event.indexv === 0 ) {
    window.clearInterval( window.timer );
    window.start = null;
    window.end = null;
    document.querySelector( ".pace span" ).style.width = '0%';
    document.querySelector( ".pace span" ).classList.remove( "pulse" );
    document.querySelector( ".pace span" ).classList.remove( "complete" );
  } else if ( !Reveal.isOverview() && event.indexh === 0 && event.indexv === 1 && event.previousSlide && !!~event.previousSlide.dataset.state.indexOf("introduction") ) {
    console.log( "Starting timer..." );
    window.start = Date.now();
    window.end = window.start + ( window.lengthOfPresentation * 60 * 1000 ); // moment().add( window.lengthOfPresentation, 'minutes' ).toDate().getTime();
    window.timer = window.setInterval( function() {
      var pace = (Date.now() - window.start) * 100 / (window.lengthOfPresentation * 60 * 1000);
      console.log( 'pace', isFinite( pace ) ? pace + '%' : '0%' );
      document.querySelector( ".pace span" ).style.width = isFinite( pace ) ? pace + '%' : '0%';
      if ( Date.now() >= window.end ) {
        window.clearInterval( window.timer );
        window.start = null;
        window.end = null;
        document.querySelector( ".pace span" ).style.width = '100%';
        document.querySelector( ".pace span" ).classList.add( "complete" );
      }
    }, 1000 );
  }

  header.classList.toggle('Title--show', !!title);
  header.innerHTML = title;

  if (~state.indexOf('me') || state === 'outline') {
    var modules = window.localStorage.modules;
    modules = modules ? JSON.parse(modules) : getModules();
    var items = '';
    for (var key in modules) {
      if (modules[key]) {
        items += '<li>' + key.replace("-", " ") +  '</li>';
      }
    }
    document.querySelector('#outline').innerHTML = items;
  } else if (~state.indexOf('sticky')) {
    // var stickyElements = document.getElementsByClassName('sticky');
    // for (var i = stickyElements.length - 1; i >= 0; i--) {
    //   Stickyfill.add(stickyElements[i]);
    // }

    var menu = document.querySelector('.sticky');
    var menuPosition = menu.getBoundingClientRect();
    var placeholder = document.createElement('div');
    placeholder.style.width = menuPosition.width + 'px';
    placeholder.style.height = menuPosition.height + 'px';
    var isAdded = false;

    document.querySelector('section [data-markdown].present').addEventListener('scroll', function() {
      console.log('scroll');
      if (this.scrollTop >= menuPosition.top && !isAdded) {
        menu.classList.add('sticky');
        menu.parentNode.insertBefore(placeholder, menu);
        isAdded = true;
      } else if (this.scrollTop < menuPosition.top && isAdded) {
        menu.classList.remove('sticky');
        menu.parentNode.removeChild(placeholder);
        isAdded = false;
      }
    });
  }

  initCodeMirror(event.currentSlide);
  Reveal.getScale();
  Reveal.layout();
});

function initCodeMirror(slide) {
  var nodes = slide.querySelectorAll('[data-codemirror]');
  [].forEach.call(nodes, function(node) {
    var editor = CodeMirror(function(elt) {
      node.parentNode.replaceChild(elt, node);
    }, {
      value: (node.value || node.innerHTML).trim(),
      lineNumbers: node.getAttribute('data-line-numbers') !== 'false',
      readOnly: true,
      theme: node.getAttribute('data-theme') || 'blackboard',
      mode: node.getAttribute('data-mode') || 'text/javascript',
      lineWrapping: true
    });
    window.setTimeout(function() { editor.refresh(); }, 1);
    var lines = node.getAttribute('data-lines');
    if (lines) {
      lines = lines.split(',');
      lines.forEach(function(line) {
        editor.addLineClass(parseInt(line), 'wrap', 'CodeMirror-activeline-background');
      });
    }
  });
}

var dialog = document.getElementById('dialog');

var modules = window.localStorage.modules;
modules = modules ? JSON.parse(modules) : getModules();
for (var key in modules) {
	if (!modules[key]) {
		var element = document.querySelector('#' + key);
		element.parentNode.removeChild(element);
	}
}

window.localStorage.extendedContent = window.localStorage.extendedContent || "true";
Reveal.addEventListener( 'ready', function( event ) {
  if ( window.localStorage.extendedContent === "false" ) {
    var extendedSections = document.querySelectorAll( "section[data-state*='extended'" );
    [].forEach.call( extendedSections, function( section ) {
      section.parentNode.removeChild( section );
    } );
  }
} );

function getModules() {
	var modules = {};
	[].forEach.call(document.querySelectorAll('.slides .stack'), function(module) {
		modules[module.id] = true;
	});
	return modules;
}
dialog.querySelector('#update').addEventListener('click', function() {
	var modules = JSON.parse(window.localStorage.modules);
	[].forEach.call(dialog.querySelectorAll("#dialog .module"), function(input) {
		if (!input.checked) {
			var element = document.querySelector('#' + input.name);
			if (element) {
				element.parentNode.removeChild(element);
			}
			modules[input.name] = false;
		} else {
			modules[input.name] = true;
		}
	});
	window.localStorage.modules = JSON.stringify(modules);

  window.localStorage.extendedContent = document.querySelector( "#chkExtendedContent" ).checked;
  if ( window.localStorage.extendedContent === "false" ) {
    var extendedSections = document.querySelectorAll( "section[data-state*='extended'" );
    [].forEach.call( extendedSections, function( section ) {
      section.parentNode.removeChild( section );
    } );
  }

  // [].forEach.call(document.querySelectorAll('.CodeMirror'), function(editor) {
  //   editor.CodeMirror.setOption('theme', document.querySelector('#selectTheme').value);
  // });

  window.lengthOfPresentation = parseInt( document.querySelector( "#txtLengthOfPresentation" ).value );
  window.localStorage.lengthOfPresentation = window.lengthOfPresentation;

	Reveal.configure({ controls: true });
	dialog.close();
});

dialog.querySelector('#cancel').addEventListener('click', function() {
	dialog.close();
});

document.addEventListener('click', function(e) {
	var button = e.target;
	var game, result, specificity, highest;

	if (button.tagName === 'BUTTON' && button.closest('#Specificity')) {
		game = button.closest('.SpecificityGame');

		[].forEach.call(game.querySelectorAll('.Specificity'), function(element) {
			result = SPECIFICITY.calculate(element.querySelector('.Specificity-input').value);
			console.log(element.querySelector('.Specificity-input').value, result);
			specificity = result[0].specificity.split(',');
			element.querySelector('.Specificity-value--inline').innerText = specificity[0];
			element.querySelector('.Specificity-value--ids').innerText = specificity[1];
			element.querySelector('.Specificity-value--classes').innerText = specificity[2];
			element.querySelector('.Specificity-value--elements').innerText = specificity[3];
			element.classList.remove('Specificity--fire');
			highest = highest || { element: element, specificity: specificityToNumber(specificity) };
			highest = highest && specificityToNumber(specificity) > highest.specificity ?
				{ element: element, specificity: specificityToNumber(specificity) } : highest;
		});

		highest.element.classList.add('Specificity--fire');
	}
});

function specificityToNumber(specificity) {
	var multiplier = 1000;

	return specificity.reduce(function(memo, number) {
		number = memo + (number * multiplier);
		multiplier /= 10;
		return number;
	}, 0);
}
