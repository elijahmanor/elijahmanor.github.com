// workerScript.js

self.addEventListener( "message", function( e ) {
	self.postMessage( "Goodbye World!" );
}, false );