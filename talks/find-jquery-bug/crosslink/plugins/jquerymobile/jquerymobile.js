define( [ "js/app/app", "jquery", "underscore" ], function ( app, $, _ ) {

var current, $current, deck,

plugin = {

	initialize: function () {
		_.bindAll( this, "changeSlide", "rendered", "getContent", "ready" );
		deck = app.deck;

		deck.bind( "change:current", this.changeSlide );

		app.once( "slides.rendered", this.ready );

		window.mobileContentRendered = this.rendered;
		window.getMobileContent = this.getContent;
	},

	ready: function () {
		var index = deck.get( 'current' );

		current  = deck.slides.at( index );
		$current = this.enhance( index );
	},

	changeSlide: function ( slidedeck, value ) {
		var old = deck.previous( "current" );
		this.degrade( old );
		
		current  = deck.slides.at( value );
		$current = this.enhance( value );
	},

	enhance: function ( index ) {
		var $slide = $( "#slide-" + index ),
			$phone = $slide.find( ".phone-wrapper" );
	
		$phone.html("<div class='phone-frame'><iframe src='./crosslink/plugins/jquerymobile/mini-mobile.html?2'></iframe></div>");
		return $slide;
	},

	degrade: function ( index ) {
		var $slide = $( "#slide-" + index ),
			$phone = $slide.find( ".phone-wrapper" );
	
		$phone.empty();
	},

	rendered: function () {
		$current.find( ".phone-frame iframe" ).animate( { opacity: 1 },  300 );
	},

	getContent: function () {
		var phoneContent = _.find( current.code_blocks , function( block ) {
			return block.treatment === "phone";
		});

		return ( phoneContent && phoneContent.content || "" );
	}

};

return plugin;
});