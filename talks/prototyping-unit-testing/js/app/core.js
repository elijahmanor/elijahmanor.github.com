var app = app || {};
( function( $ ) {
	this.publish = function() {
		amplify.publish.apply( amplify, arguments );
	};
	this.subscribe = function() {
		amplify.subscribe.apply( amplify, arguments );
	};
	this.pushState = function( stateObj, url ) {
		if( Modernizr.history && false ) { // hacing out html5 state for now.
			window.history.pushState( stateObj, "slideshow", "/" + url );
		} else {
			$.bbq.pushState( stateObj );
		}
	};
	this.onStateChange = function( callback ) {
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
}).call( app, jQuery );
