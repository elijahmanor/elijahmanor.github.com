define( [ "js/app/app", "jquery", "underscore", "text!./notify.tmpl.html" ], function ( app, $, _, template ) {

	var $agenda, $items, $current, agenda, demo_window;

	template = _.template( template );

	notify = {
		name: "Notify",

		initialize: function () {
			var context = this;
			_.bindAll( context, "render", "remove" );

			app.subscribe( "demo.attached", function ( win ) {
				demo_window = win;

				$( "<link>", {
<<<<<<< HEAD
					href: "/crosslink/plugins/notify/css/notify.css",
=======
					href: "../notify/css/notify.css",
>>>>>>> e99eb15929f4470c72fbd87a1f893cf4494588f7
					rel: "stylesheet",
					media: "all"
				}).appendTo( demo_window.document.head );

				demo_window.console.log = context.render;
				app.subscribe( "app.changeslide", context.remove );
			} );
		},

		render: function ( message ) {
			$( demo_window.document.body )
				.append( template( { message: message } ) )
				.on( "click", ".alert .close", function () {
					$( this ).closest( ".alert" ).remove();
				} )
				.find( ".alert" )
					.fadeIn( "slow" );
		},

		remove: function () {
			demo_window && demo_window.document && demo_window.document.body &&
			$( demo_window.document.body )
				.find( ".alert" )
					.remove();
		}
	};

	return notify;
<<<<<<< HEAD
});
=======
});
>>>>>>> e99eb15929f4470c72fbd87a1f893cf4494588f7
