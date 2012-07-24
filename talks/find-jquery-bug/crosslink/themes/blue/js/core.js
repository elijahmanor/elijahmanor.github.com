var crosslink;

( function( $ ) {
	crosslink = typeof _ === "undefined" ? {} : _ ;
	crosslink.publish = function() {
		amplify.publish.apply( amplify, arguments );
	};
	crosslink.subscribe = function() {
		amplify.subscribe.apply( amplify, arguments );
	};
	crosslink.pushState = function( stateObj, url ) {
		if( Modernizr.history && false ) { // hacing out html5 state for now.
			window.history.pushState( stateObj, "slideshow", "/" + url );
		} else {
			$.bbq.pushState( stateObj );
		}
	};
	crosslink.onStateChange = function( callback ) {
		if( Modernizr.history && false ) { // hacking out html5 state for now
			window.onpopstate = function( evt ){
				callback( evt.state );
			};
		} else {
			$( window ).bind( "hashchange", function( evt ) {
				callback( evt.getState() );
			});
		}
	};
})( jQuery );
