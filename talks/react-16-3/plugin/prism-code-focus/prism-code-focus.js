;(function(window, Reveal, Prism) {
  let ran;
  let currentSlide;
  let currentFragments;
  let prevSlideData;

  function x( focusRange ) {
    const [ , min, max ] = focusRange.match(/^(\d+)-(\d+)$/) ||
      [ focusRange, focusRange, focusRange ];
    const lines = currentSlide.querySelectorAll( ".prism-line" );
    lines.forEach( ( line, index ) => {
      if ( index + 1 >= parseInt( min ) && index + 1 <= parseInt( max ) ) {
        line.classList.add( "focus" )
      }
    } );
  }

  function isGoingBackwards( e ) {
    return (
      currentFragments.length &&
      prevSlideData &&
      (
        prevSlideData.indexh > e.indexh ||
        (prevSlideData.indexh == e.indexh && prevSlideData.indexv > e.indexv)
      )
    );
  }

  function setToLastFragment( e ) {
    while ( Reveal.nextFragment() ) {}
    var currentFragment = currentFragments[ currentFragments.length - 1 ];
    currentFragment.classList.add( "current-fragment" );
    focusFragment( currentFragment );
  }

  function updateSlide( e ) {
    currentSlide = e.currentSlide;
    currentFragments = currentSlide.getElementsByClassName('fragment');
    const lines = currentSlide.querySelectorAll( ".prism-line" );
    lines.forEach( ( line, index ) => {
      line.classList.remove( "focus", "blur" );
    } );
    if ( isGoingBackwards( e ) ) {
      setToLastFragment( e );
    }
    prevSlideData = {
      indexh: e.indexh,
      indexv: e.indexv
    };
  }

  // borrowed from https://github.com/jamiebuilds/spectacle-code-slide/blob/978dffec405d14d135057f99b6306ed2717b46a0/src/calculateScrollCenter.js
  function calculateScrollCenter( start, end, container ) {
    if ( !start ) return;

    end = end || start;
  
    const top = start.offsetTop;
    const bottom = end.offsetTop + end.offsetHeight;
  
    const middle = Math.floor((top + bottom) / 2);
    const height = container.offsetHeight;
    const half = height / 2;
  
    return middle - half;
  }  

  function focusFragment( fragment ) {
    if ( !fragment ) { return; }

    const lines = currentSlide.querySelectorAll( ".prism-line" );
    lines.forEach( ( line, index ) => {
      line.classList.remove( "focus", "blur" );
    } );

    const codeFocusIndex = fragment.dataset.codeFocus;
    if ( codeFocusIndex ) {
      const segments = codeFocusIndex.split( "," );
      if ( segments ) {
        segments.forEach( segment => x( segment ) );
      } else {
        x( segment );
      }

      const lines = currentSlide.querySelectorAll( ".prism-line" );
      lines.forEach( line => {
        if ( !line.classList.contains( "focus" ) ) {
          line.classList.add( "blur" );
        }
      } );

      const container = currentSlide.querySelector( "pre code" );
      const [ , startIndex ] = codeFocusIndex.match(/^(\d+).*$/);
      const [ , endIndex ] = codeFocusIndex.match(/\d+$/);
      jQuery( container ).animate( {
        scrollTop: calculateScrollCenter( lines[startIndex], lines[endIndex], container )
       }, 500);
    }
  }

  function init(e) {
    if (ran) { return; }
    ran = true;

    document.querySelectorAll('pre code').forEach(element => {
      const lang = element.className.replace( "language-", "" ).replace( "lang-", "" ).trim();
      if ( lang ) {
        let lines = Prism.highlight(element.textContent, Prism.languages[lang]).split('\n').map(line =>
          `<span class="prism-line">${ line }</span>`
        );
        element.innerHTML = "<div class='is-prismed'>" + lines.join("\n") + "</div>";
      }
    });

    Reveal.addEventListener('slidechanged', e => {
      updateSlide(e);
    });

    Reveal.addEventListener('fragmentshown', e => {
      focusFragment( e.fragment );
    });

    Reveal.addEventListener('fragmenthidden', function(e) {
      const indexOfPrevious = [].indexOf.call( currentFragments, e.fragment );
      focusFragment( currentFragments[ indexOfPrevious - 1 ] );
    });

    updateSlide(e);
  }

  function RevealCodeFocus() {
    if (Reveal.isReady()) {
      init({ currentSlide: Reveal.getCurrentSlide() });
    } else {
      Reveal.addEventListener('ready', init);
    }
  }

  window.RevealCodeFocus = RevealCodeFocus;
}(this, this.Reveal, this.Prism));
