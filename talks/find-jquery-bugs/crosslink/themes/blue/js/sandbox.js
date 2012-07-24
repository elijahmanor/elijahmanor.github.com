(function(){
var that = this,
	slideMgr,
	bootStrap = function( slideNum ) {
		slideMgr = new $.crosslink.slidemanager( {
			slide: slideNum || 1,
			transitionEffect: "slideLeft"
		}, $( ".slides" )[0] );
	};

	//bootstrapping
$( function() {
	$( window ).trigger( "hashchange" );
	//bootStrap();
});

//history mgmt
this.subscribe( "slide.change", function( data ) {
	if( data && data.slideNum ) {
		that.pushState( { slide: data.slideNum } , "slide" + data.slideNum );
	}
});

//handle bootstrapping with history data involved
this.onStateChange( function( data ){
	if( !data ) { return; }
	if( slideMgr ) {
		if( data.slide ) {
			slideMgr.option( "slide", parseInt( data.slide, 10 ) );
		}
	} else {
		bootStrap( parseInt( data.slide, 10 ) );
	}
});


}).call( crosslink );
