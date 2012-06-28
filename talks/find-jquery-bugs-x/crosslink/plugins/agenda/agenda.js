define( [ "js/app/app", "jquery", "hotkeys", "dotimeout", "text!./agenda.tmpl.html" ], function ( app, $, hotkeys, dotimeout, template ) {

	var $agenda, $items, $current, agenda;

	template = _.template( template );

	jQuery.hotkeys.specialKeys[ 190 ] = "remoteperiod";

	agenda = {
		name: "Agenda",

		initialize: function () {
			_.bindAll( this, "bindings", "render", "open", "close" );

			app.once( "app.bindings", this.bindings );
			app.once( "slides.rendered", this.render );

			app.subscribe( "slidedeck.atend", this.open );
			app.subscribe( "slidedeck.atstart", this.open );

			app.utils.addLink( "crosslink/plugins/agenda/agenda.css" );

			$( document )
				.on( "click", ".agenda-switcher li", function ( e ) {
					e.preventDefault();
					var index = $( this ).index() + 1;
					app.navigate( index, true );
				});
		},

		bindings: function( bindings ) {
			_.extend( bindings, {
				"up": "up",
				"down": "down",
				"return": "return",
				"remoteperiod": "period",
				"esc": "esc",
				"f5": "esc"
			});
		},

		render: function ( $el ) {
			$agenda = $el.find( "[data-role='agenda-switcher']" );
	
			$agenda
				.css( "bottom", -200 )
				.addClass( "agenda-switcher" )
				.html( template( { agenda: app.agenda.sessions() } ));
			
			window.setTimeout( function () {
				$agenda.addClass( "transitions" );
			}, 1);

			$agenda.bind( "mouseenter mouseleave", function ( e ) {
				if ( e.type === "mouseenter" ) {
					$agenda.doTimeout( "switcher", 500, agenda.open );
				} else {
					$agenda.doTimeout( "switcher" );
					agenda.close();
				}
			});

			$items = $agenda.find( "li" );

			$items.filter( ".current" ).addClass( "focus" );
		},

		open: function () {
			app.publish( "agenda.open" );	
		},

		close: function () {
			app.publish( "agenda.close" );	
		},

		select: function () {
			if ( $current.is( ":not(.current)") ) {
				$current.click();
			}	
		},

		states: {
			"initialize": {
		
			},
			"slides": {
				"agenda.open": function () {
					$agenda.addClass( "up" );
					$current = $items.filter( ".focus" );
					app.state_machine.set( "agenda" );	
				},

				"app.key.up": function () {
					app.publish( "agenda.open" );
				},

				"app.key.period": function () {
					app.publish( "agenda.open" );
				}
			},
			"agenda": {
				"agenda.close": function () {
					$agenda.removeClass( "up" );
					app.state_machine.set( "slides" );	
				},

				"app.key.down": function () {
					app.publish( "agenda.close" );
				},

				"app.key.right": function () {
					var $next = $current.next();
					if ( $next.length ) {
						$current.removeClass( "focus" );
						$next.addClass( "focus" );

						$current = $next;
					}
				},

				"app.key.left": function () {
					var $prev = $current.prev();
					
					if ( $prev.length ) {
						$current.removeClass( "focus" );
						$prev.addClass( "focus" );

						$current = $prev;
					}
				},

				"app.key.return": function () {
					agenda.select();
					app.publish( "agenda.close" );
				},

				"app.key.period": function () {
					app.publish( "agenda.close" );
				},

				"app.key.esc": function () {
					agenda.select();
					app.publish( "agenda.close" );
				}
			}
		}
	};

	return agenda;
});
