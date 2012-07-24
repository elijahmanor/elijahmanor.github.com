( function( $ ) {

	var jQueryMethods = [],
		jQregex = ""; // set local app namespace for app/sandbox usage

	// create regex of every jQuery method for linking to API site
	for (var jQprop in $.fn) {
		if( $.fn.hasOwnProperty(jQprop) && typeof $.fn[jQprop] === "function" ){
			jQueryMethods.push(jQprop);
		}
	}
	jQregex = new RegExp( '(\\$|jQuery|' +  //'(<span class="plain">\\.?)(\\$|jQuery|' +
		jQueryMethods.join('|') + ')', "igm" );

	$.fn.highlightjQuery = function( ) {
		this
			.find( ".jQmethod, .jQutil, .sh_function" )
				.each( function( idx, elem ) {
					var $elem = $(elem),
						meth = $elem.text(),
						methUrl = meth.replace( /\$/, "jquery" ),
						isjQ = jQregex.test( methUrl );

					if( !isjQ ) { return; }

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
