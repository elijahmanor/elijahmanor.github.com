;( function( $ ) {
	$.fn.highlightjQuery = function( ) {
		this
			.find( ".jQmethod, .jQutil, .sh_function" )
				.each( function( idx, elem ) {
					var $elem = $(elem),
						meth = $elem.text(),
						methUrl = meth.replace( /\$/, "jquery" );
					$elem.wrap( "<a href=\"http://api.jquery.com/" +
									methUrl + "\" target=\"_blank\" ></a>" );
				});
//				.end()
//			.find( ".jQutil" )
//				.each( function( idx, elem ) {
//					var $elem = $(elem),
//						meth = $elem.text();
//						methUrl = meth === "$" ? "jQuery" : meth,
//					$elem.wrapInner( "<a href=\"http://api.jquery.com/jquery." +
//									methUrl + "\" target=\"_blank\" ></a>" );
//				});
	};
})( jQuery );
