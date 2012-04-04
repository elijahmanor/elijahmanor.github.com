define( [ "js/app/app", "jquery", "text!./touchnav.tmpl", "./jquery.mobile.vmouse", "./jquery.mobile.swipe" ], function ( app, $, template ) {

function should_run() {
	// http://alastairc.ac/2010/03/detecting-touch-based-browsing/ 
	var el = document.createElement('div');
	el.setAttribute('ongesturestart', 'return;');
	if( typeof el.ongesturestart == "function"){
	   return true;
	} else {
	   return false
	}
}

var plugin = {
	name: "Touch Nav",

	initialize: function () {
		_.bindAll( this, "render", "next", "prev", "agenda" );

		app.subscribe( "slides.rendered", this.render );

		$( document )
			.on( "vclick", "#touchnav a.touchnav-prev", this.prev )
			.on( "vclick", "#touchnav a.touchnav-agenda", this.agenda )
			.on( "vclick", "#touchnav a.touchnav-next", this.next )
		if ( should_run() ) {
			$( document )
				.bind( "swiperight", this.prev )
				.bind( "swipeleft", this.next );			
		}
		
		app.utils.addLink( "crosslink/plugins/touchnav/touchnav.css" );
	},

	render: function ( $el ) {
		if ( should_run() ) {
			$el.append( template );
		}
	},

	next: function () {
		app.publish( "app.key.right" );
	},

	prev: function () {
		app.publish( "app.key.left" );
	},

	agenda: function () {
		if ( app.state_machine.get() === "slides" ) {
			app.publish( "agenda.open" );
		} else {
			app.publish( "agenda.close" );
		}
	}
};

return plugin;
});