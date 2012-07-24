( function() {
$.widget( "crosslink.slide", {
	options: {
		codeTheme: "a2crosslink",
		layout: 'default'
	},
	id: null,
	code: null,
	preformats: {
		js: ".javascript",
		html: ".demo-content"
	},
	_create: function() {
		var that = this;
		
		that.editDialog = false;

		this._prepActions();
		this.element
			.find('pre')
				.filter( this.preformats.js )
					.each( function() {
						that._prepJsCode( this );
					})
					.end()
				.filter( this.preformats.html )
					.each( function() {
						that._prepDemoHtml( this );
					})
					.end()
				.end()
			.delegate( "a.run", "click", function( evt ) {
				that.executeJs();
				evt.preventDefault();
			})
			.delegate( "a.view-source", "click", function( evt ) {
				that.toggleSource();
				evt.preventDefault();
			});
	},
	toggleSource: function() {
		this.$demoHtml.toggle();
		this.$preHtml.toggle();
	},
	executeJs: function( code ) {
		var id = this.id = String( +new Date() ),
			demoArea =  this.element.find( ".demo-content .demo").length ?
						" .demo-content .demo" : " ",
			evalCode;

		this.element.attr( "id", id);
		// regex will need to cover: |appendTo|insertBefore|insertAfer|prependTo|jQuery
		evalCode = this.code.replace(/((?:\$|appendTo|insertBefore|insertAfter|prependTo|jQuery)\(\s?(?:'|")(?!\s?<))/g,
					"$1#" + id + demoArea + " " );
		eval( evalCode );

		this._updateDemoHtml();
	},
	_prepActions: function( ) {
		var $actions = $( "<div class=\"actions\"></div>" ),
			add = false;

		if( this.element.find( "pre.javascript" ).length ) {
			$actions
				.append( "<a class=\"run\" href=\"#\">run</a>" );
			add = true;
		}
		if( this.element.find( ".demo-content" ).length ) {
			$actions
				.append( "<a class=\"view-source\" href=\"#\">toggle source</a>" );
			add = true;
		}
		if ( add ) {
			this.element.prepend( $actions );
		}
	},
	_prepJsCode: function( elem ) {
		var match = null;
		this.$preJs = $(elem);

		if ( this.$preJs.is( ".javascript" ) ) {
			this.code = this.$preJs.text();
			this.$preJs.snippet( "javascript", { style: this.options.codeTheme, showNum: false, menu: false } );
			this.element.highlightjQuery();
		}
	},
	_prepDemoHtml: function( elem ) {
		var $htmlSource = $( elem ),
		// wrap content in div. change class to denote that it is only
		// preformatted text
			$contentArea = $htmlSource
				.addClass( "pre" )
				.removeClass( this.options.html )
				.wrap( "<div class='demo-content'></div>" )
				.parent();

		this.demoHtml = $htmlSource.text();
		$htmlSource.snippet( "html", { style: this.options.codeTheme, showNum: false, menu: false } );
		this.$preHtml = $contentArea.find( ".snippet-wrap" );
		this.$demoHtml = $( "<div class='demo'>" +
			this.demoHtml
				.replace(/&lt;/gm, "<")
				.replace(/&gt;/gm, ">")
//				.replace(/^\t/gm,"")
				/*.replace(/\n/gm,"")*/ + "</div>" )
			.appendTo( $contentArea.find( ".snippet-container" ) )
			.hide();
	},
	// method to reinitialize demo html area
	_updateJsCode: function() {

		// only update if js code exists
		if( !this.$preJs ) { return; }

		this.$preJs.snippet( "javascript", { style: this.options.codeTheme, showNum: false, menu: false } );
		this.element.highlightjQuery();
	},
	_updateDemoHtml: function() {

		// only update if demo html exists
		if( !this.$demoHtml ) { return; }


		var codeToPre = this.$demoHtml.html(),
			$contentArea = this.$demoHtml.closest( ".demo-content" ),
			$pre = $( "<pre><pre>" ).text( codeToPre ),
			preState = this.$preHtml.is( ":hidden" );

		// redo entire content area with updated demo and update source
		// view
		this.$demoHtml.detach();
		this.$preHtml.remove();
		$contentArea.empty().append( $pre );

		// redo highlighting and apply original pre viewable state
		this.$preHtml = $pre.snippet( "html", { style: this.options.codeTheme, showNum: false, menu: false } )
			.closest( ".snippet-wrap" )
			.toggle( !preState );
		// add back in the updated Demo Html
		this.$preHtml.closest( ".snippet-container" )
			.prepend( this.$demoHtml );
	},
	_destroyDialog: function() {
		if( this.$dialogParent ) {
			this.$dialogParent
				.closest( ".ui-dialog" )
				.remove();
			this.$dialogParent.remove();
			delete this.$dialogParent;
		}
	},
	close: function() {
		//destory any dialog widgets
		this._destroyDialog();
	}
});

})();

( function(  ) {

$.widget( "crosslink.slidemanager", {
	options : {
		animationLength: 400,
		transitionEffect: "fade",
		slide: 1
	},
	slides: null,
	currentSlide: null,
	transitionInfo: {
		"fade" : {
			forwardKey: [34, 39],
			reverseKey: [33, 37],
			transitionShim: function( slideNum, direction ) {
				var oldSlide = this.slides[ direction === "forward" ?
					slideNum - 2 : slideNum ];
				this.slides[ slideNum - 1 ]
					.element
						.hide()
						.addClass( "current" )
						.fadeIn( 800 );
				if( oldSlide ){
					oldSlide
						.element
						.fadeOut( 800 )
						.removeClass( "current" );
				}
			},
			modernizrCheck : function() {
				return Modernizr.csstransitions;
			}
		},
		"slideLeft" : {
			forwardKey: [34, 39],
			reverseKey: [33, 37],
			transitionShim: function( slideNum, direction ) {
				if( direction === "forward" || "new" ) {
					this.slides[ slideNum - 1 ].element
						.css( "left", "150%")
						.show()
						.animate( {left: "-50%"}, this.options.animationLength );
					if( direction === "forward" ) {
						this.slides[ slideNum - 2 ].element
							.animate( {left: "-50%"}, this.options.animationLength )
							.queue( function( next ) {
								$(this).hide();
								next();
							})
							.dequeue();
					}
				} else {
					this.slides[ slideNum - 1 ].element
						.css( "left", "-150%")
						.show()
						.animate( {left: "-50%"}, this.options.animationLength );
					this.slides[ slideNum ].element
						.animate( {left: "150%"}, this.options.animationLength )
						.queue( function( next ) {
							$(this).hide();
							next();
						})
						.dequeue();
				}
			},
			modernizrCheck: function() {
				return Modernizr.csstransforms3d;
			}
		},
		"slideDown" : {
			forwardKey: [34, 40],
			reverseKey: [33, 38],
			transitionShim: function( slideNum, direction ) {
				if( direction === "forward" || "new" ) {
					this.slides[ slideNum - 1 ].element
						.css( "top", "150%")
						.show()
						.animate( {top: "-50%"}, this.options.animationLength );
					if( direction === "forward" ) {
						this.slides[ slideNum - 2 ].element
							.animate( {top: "-50%"}, this.options.animationLength )
							.queue( function( next ) {
								$(this).hide();
								next();
							})
							.dequeue();
					}
				} else {
					this.slides[ slideNum - 1 ].element
						.css( "top", "-150%")
						.show()
						.animate( {top: "-50%"}, this.options.animationLength );
					this.slides[ slideNum ].element
						.animate( {top: "150%"}, this.options.animationLength )
						.queue( function( next ) {
							$(this).hide();
							next();
						})
						.dequeue();
				}
			},
			modernizrCheck: function() {
				return Modernizr.csstransforms3d;
			}
		}
	},
	// widget factory functions
	_create: function() {
		var self = this;

		// create slides widgets and access points for slide manager
		this.slides = [];
		this.element
			.addClass( this.options.transitionEffect )
			.children( ".slide"  )
				.each( function() {
					self.slides.push( $(this).is( ".inner-slides") ?
						new $.crosslink.slidemanager( {
							transitionEffect: self.options.transitionEffect ===  "slideDown" ?
								"slideDown": "slideDown"
							}, this ) :
						new $.crosslink.slide({}, this) );
				});

		this._initTransition();
		setTimeout( function() {
			self._initSlide();
		}, 250 );
	},
	_setOption: function( key, val ) {
		if ( key === "slide" && val && val !== this.options.slide ) {
			this._initSlide();
		}
	},
	destroy: function() {
		$.each( this.slides, function( idx, elem ) {
			elem.destroy();
		});
		$.Widget.prototype.destroy.apply( this, arguments );
	},
	// public methods
	nextSlide: function() {
		if( this.options.slide == this.slides.length ) { return; }
		//this._currentSlideObj().close();
		this._slide( this.options.slide + 1, "forward" );
	},
	prevSlide: function() {
		if( this.options.slide == 1 ) { return; }
		//this._currentSlideObj().close();
		this._slide( this.options.slide - 1, "previous" );
	},
	_initTransition: function() {
		var self = this;
		// keypress next and previous actions
		$( document )
			.bind( "keydown click", function( evt ){
				// ignore key events if slides are not shown.
				if( self.element.is( ":hidden" ) ){ return; }

				//if we happen to be in the state of a inner slideshow presentation
				if( self._isInnerSlides() && !self.element.is( ".current" ) ) {
					return;
				}

				var transition = self.transitionInfo[ self.options.transitionEffect ];
				if( self._currentSlideObj() ) {
					if( evt.which === 190 ) { // remote's "play" button
						self._currentSlideObj().toggleSource();
					}

					if( evt.which === 27 || evt.which === 116 ) { // remote's "full screen" button
						self._currentSlideObj().executeJs();
					}
					
					if ( evt.type === "click" && $( evt.target ).is(".slide")) {
						if ( evt.pageX > $(window).width() / 2 ) {
							self.nextSlide();
						} else {
							self.prevSlide();
						}
						return;
					} else {
						if( crosslink.indexOf(transition.forwardKey, evt.which ) !== -1 ) {
							self.nextSlide();
							return;
						}
						if( crosslink.indexOf( transition.reverseKey, evt.which ) !== -1 ) {
							self.prevSlide();
							return;
						}	
					}
				}
			});
	},
	_initSlide: function() {
		this.element
			.children( )
			.removeClass( "current next farnext previous farprevious" );

		this._currentSlideObj()
			.element
			.addClass( "current" )
			.next()
				.addClass( "next" )
				.next()
					.addClass( "farnext" )
					.end()
				.end()
			.prev()
				.addClass( "previous" )
				.prev()
					.addClass( "farprevious" );
	},
	// internalish methods
	_slide: function( slideNum, direction, forceSlide) {
		var nextSlide = this.slides[ slideNum ] || null,
			prevSlide = this.slides[ slideNum - 2 ] || null,
			transition = this.transitionInfo[ this.options.transitionEffect ];

		// no need to move if we are already on the slide
		if( !forceSlide && this.options.slide === slideNum ) { return; }

		if( transition.modernizrCheck() ) {
			this._currentSlideObj()
				.element
				.addClass( direction === "forward" ?
						  "previous" : "next" )
				.removeClass( "current" )
				.prev()
					.addClass( direction === "forward" ?
							  "farprevious": "current" )
					.removeClass( "previous" )
					.prev()
						.addClass( direction === "forward" ?
								"" : "previous" )
						.removeClass( "farprevious" )
						.prevAll()
							.removeClass( "farprevious farnext previous current next" )
							.end()
						.end()
					.end()
				.next()
					.addClass( direction === "forward" ?
						"current" : "farnext" )
					.removeClass( "next" )
					.next()
						.addClass( direction === "forward" ?
							"next" : "" )
						.removeClass( "farnext" );
		} else {
			transition.transitionShim.call( this, slideNum, direciton );
		}
		this.options.slide = slideNum;

		if( !this._isInnerSlides() ) {
			crosslink.publish( "slide.change", { slideNum: slideNum });
		}
	},
	_currentSlideObj: function( ){
		return this.slides[ this.options.slide - 1 ];
	},
	_isInnerSlides: function( ){
		return this.element.is( ".inner-slides" );
	}
}); // end slide manager widget

})(); // end IIFE
