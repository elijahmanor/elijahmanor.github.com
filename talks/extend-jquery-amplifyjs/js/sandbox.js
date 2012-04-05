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


$( "body" ).bind( "keypress keydown", function( e ) {
	console.log( e.which );

    if ( e.which === 27 ){
		$( ".slide.current .snippet-num li" ).css( "opacity", "1.0" );
    }
});
$( ".snippet-num li" ).live( "click", function() {
	var $this = $( this ),
		$listItems = $this.closest( ".snippet-num" ).find( "li" ),
		index = $listItems.index( $this );

	$listItems.css( "opacity", "1.0" );

	opacity = 0.2;	
	$listItems.filter( ":lt(" + index + ")" ).css( "opacity", opacity );
	var beginningArray = $listItems.filter( ":lt(" + index + ")" ).get();
	beginningArray = beginningArray.slice( beginningArray.length > 3 ? beginningArray.length - 3 : beginningArray.length );
	$( beginningArray ).each( function() {
		opacity = ( opacity < 1.0 ) ? opacity + 0.1 : 1.0;
		$( this ).css( "opacity", opacity );
	});

	opacity = 1.0;
	$listItems.filter( ":gt(" + index + ")" ).css( "opacity", opacity );
	var endArray = $listItems.filter( ":gt(" + index + ")" ).get();
	endArray = endArray.slice( 3 );
	$( endArray ).each( function() {
		opacity = ( opacity > 0.2 ) ? opacity - 0.1 : 0.2;
		$( this ).css( "opacity", opacity );
	});

	//$listItems.filter( ":lt(" + ( index - 3 ) + "), :gt(" + ( index + 3 ) + ")" ).css( "opacity", "0.3" );
});

}).call( crosslink );
