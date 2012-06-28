define( [ "js/app/app", "jquery", "text!./livedemo.tmpl" ], function ( app, $, actions_template ) {

var current, $current, deck,
	demo_window, $content, $actions,

plugin = {

	initialize: function () {
		var $document = $( document );

		_.bindAll( this, "changeSlide", "bindings", "resetDemo", "runDemo", "attachDemo", "showDemo", "hideDemo" );
		deck = app.deck;

		deck.bind( "change:current", this.changeSlide );

		app.subscribe( "app.bindings", this.bindings );
		app.utils.addLink( "crosslink/plugins/livedemo/livedemo.css" );

		$document
			.on( "click", ".demo-actions", function ( e ) {
				e.preventDefault();
			});

		_.each({ "show": "esc", "hide": "esc", "reset": "period", "run": "period" }, function ( key, className ) {
			$document.on( "click", ".demo-actions ." + className, function () {
				app.publish( "app.key." + key );
			});
		});

		window.attachDemo = this.attachDemo;
	},

	bindings: function( bindings ) {
		_.extend( bindings, {
			"t": "t",
			"r": "r",
			"esc": "esc",
			"f5": "esc"
		});
	},

	changeSlide: function ( slidedeck, value ) {
		var old = deck.previous( "current" );
		this.degrade( $( "#slide-" + old ) );

		current  = deck.slides.at( value );
		$current = $( "#slide-" + value );

		if ( current.get( 'demo' ) || ( deck.get( 'enableDemos' ) &&
			( plugin.getCode( current, 'html' ).length || plugin.getCode( current, 'javascript' ).length ) ) ) {
			this.enhance();
			this.insertiFrame();
		} else {
			$content = null;
			$actions = null;
		}
	},

	enhance: function () {
		$slide_content = $current.find( ".slide-content" );

		$actions = $( "<div />", {
			"class": "demo-actions",
			"html": actions_template
		}).appendTo( $current );

		$actions.toggleClass( "demo-autorun", current.get( "demo-autorun" ) === true );

		$content = $( "<div />", {
			"class": "demo-content",
			"style": "position: absolute; right: 0; bottom: 0; display: none;"
		}).insertAfter( $slide_content );

		this.insertiFrame();
	},

	degrade: function ( $slide ) {
		$slide.find( ".slide-content" ).show().fadeTo( 0, 1.0 );

		if ( $content ) {
			$content.remove();
			$actions.remove();
		}
	},

	attachDemo: function ( win ) {
		var html = this.getCode( current, "html" );
		demo_window = win;
		demo_window.document.body.innerHTML = html;

		// Attach theme CSS
		$( "<link>", {
<<<<<<< HEAD
			href: "/crosslink/themes/" + app.deck.get( "theme" ) + "/demo-theme.css",
=======
			href: "themes/" + app.deck.get( "theme" ) + "/demo-theme.css",
>>>>>>> e99eb15929f4470c72fbd87a1f893cf4494588f7
			rel: "stylesheet",
			media: "all"
		}).appendTo( $( demo_window.document ).find( "head" ) );

<<<<<<< HEAD
		app.publish( "demo.attached", demo_window );

=======
>>>>>>> e99eb15929f4470c72fbd87a1f893cf4494588f7
		if ( $actions.is( ".demo-shown" ) && current.get( "demo-autorun" ) ) {
			this.runDemo();
		}
	},

	runDemo: function () {
		var js = this.getCode( current, "javascript" ),
			$demo = $( "<div>" );

		$actions.addClass( "demo-ran" );

		demo_window.runCode( js );
	},

	resetDemo: function () {
		var that = this;

		$content.fadeOut( 100, function () {
			that.insertiFrame();
		}).delay( 100 ).fadeIn( 100 );

		$actions.removeClass( "demo-ran" );
	},

	showDemo: function () {
		var $slide_content = $current.find( ".slide-content" ),
			offset = $slide_content.position(),
			top = offset.top  + parseInt( $slide_content.css( 'margin-top' ),  10 ),
			left = offset.left + parseInt( $slide_content.css( 'margin-left' ), 10 );

		$slide_content.fadeOut( 200, function () {
			plugin.insertiFrame();
			$content.css({ top: top, left: left }).fadeIn( 200 );
		});

		$actions.addClass( "demo-shown" ).removeClass( "demo-ran" );
	},

	hideDemo: function ( fast ) {
		$content.fadeOut( 200, function () {
			$current.find( ".slide-content" ).fadeIn( 200 );
		});

		$actions.removeClass( "demo-shown" );
	},

	playOrReset: function () {
		if ( $actions.is( ".demo-ran" ) ) {
			this.resetDemo();
		} else {
			this.runDemo();
		}
	},

	insertiFrame: function () {
		$content.html( "<iframe src='./crosslink/plugins/livedemo/livedemo.html?1'></iframe>" );
	},

	getCode: function ( slide, lang ) {
		var content =
			_.chain( slide.code_blocks ).filter( function( block ) {
				return block.language === lang;
			}).map( function ( block ) {
				return block.content;
			}).value().join( "\n" );
		return content;
	},

	states: {
		"slides": {
			"app.key.t": function () {
				plugin.showDemo();
				app.state_machine.set( "livedemo" );
			},

			"app.key.esc": function () {
				plugin.showDemo();
				app.state_machine.set( "livedemo" );
			}
		},

		"livedemo": {
			"app.key.t": function () {
				plugin.hideDemo();
				app.state_machine.set( "slides" );
			},

			"app.key.esc": function () {
				plugin.hideDemo();
				app.state_machine.set( "slides" );
			},

			"app.key.period": function () {
				plugin.playOrReset();
			},

			"app.key.r": function () {
				plugin.playOrReset();
			}
		}
	}
};

return plugin;
});