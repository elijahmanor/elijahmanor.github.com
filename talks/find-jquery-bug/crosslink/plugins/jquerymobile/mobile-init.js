$( document ).bind( "mobileinit", function () {
	$( document ).ready( function () {
		$( "body" ).html( window.parent.getMobileContent() );
	})

	$( document ).one( "pageshow", function () {
		window.parent.mobileContentRendered();
	});
});