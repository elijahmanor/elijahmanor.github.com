(function( $ ) {
	var jQueryMethods = [],
		jQregex = "",
		app = this; // set local app namespace for app/sandbox usage

	// create regex of every jQuery method for linking to API site
	for (var jQprop in $.fn) {
		if( $.fn.hasOwnProperty(jQprop) && typeof $.fn[jQprop] === "function" ){
			jQueryMethods.push(jQprop);
		}
	}
	jQregex = new RegExp( '(\\$|jQuery|' +  //'(<span class="plain">\\.?)(\\$|jQuery|' +
		jQueryMethods.join('|') + ')', "igm" );

$.widget( "app.slide", {
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
				that._executeJs( that.code );
				evt.preventDefault();
			})
			.delegate( "a.view-source", "click", function( evt ) {
				// dont open dialog if one already open
				that.$demoHtml.toggle();
				that.$preHtml.toggle();
				evt.preventDefault();
//				if( that.$dialogParent ) {
//					return;
//				}
//				var $htmlContent = that.element.find( this.preformats.html + " code" ),
//					htmlText = $htmlContent.html();
//
//					$htmlContent.html(
//							htmlText
//							//.replace(/^\t*/m, "")
//					$pre = $( "<pre />",
//						{
//							html: htmlText,
//							className: "brush: xml"
//						});
//
//				that.$dialogParent = $pre.wrap( "<div />").parent();
//
//				$( $pre[0] ).snippet("javascript", { style: "a2crosslink" } );
//
//				that.sourceDialog = new $.wijmo.wijdialog({
//					width: that.element.width() * 0.75,
//					captionButtons: {
//						pin: { visible: false },
//						refresh: { visible: false },
//						close: {
//							click: function() {
//								that._destroyDialog();
//							}
//						}
//					}
//				}, that.$dialogParent[0]);
//			
			})
			.delegate( "a.edit-source", "click", function( evt ) {
			
				that.editDialog = true; // used to flag the keystroke handler in slide manager to ignore while dialog visible
			
				var $edit_slide_dialog = $( "<div class=\"edit_slide_dialog\"></div>" );
				
				$("#edit_slide_dialog_tmpl").children().clone().appendTo($edit_slide_dialog);
				
				if ( that.code ) {
					$edit_slide_dialog.find(".edit-js-source").val(that.code);
				}
				else {
					$edit_slide_dialog.find(".edit-js").hide();
				}
				if ( that.demoHtml ) {
					$edit_slide_dialog.find(".edit-html-source").val(that.demoHtml);
				}
				else {
					$edit_slide_dialog.find(".edit-html").hide();
				}
				
				function handleApply(evt) {
					evt.preventDefault();
					
					if ( that.element.find( "pre.javascript > code" ).length ) {
						that.code = $edit_slide_dialog.find(".edit-js-source").val();
						that.$preJs.html( that.code );
						that._updateJsCode();
					}
					if ( that.element.find( ".demo-content" ).length ) {
						that.demoHtml = $edit_slide_dialog.find(".edit-html-source").val();
						that.$demoHtml.html( that.demoHtml );
						that._updateDemoHtml();
					}
					
					that.sourceDialog.close();
					
					return false;
				}
				
				that.$dialogParent = $edit_slide_dialog;
				that.sourceDialog = new $.wijmo.wijdialog({
					title: "Edit Slide",
					beforeClose: function(){
						that.editDialog = false; // used to flag the keystroke handler in slide manager to ignore while dialog visible
						$edit_slide_dialog.find(".dialog-button-apply").unbind("click",handleApply);
					},
					captionButtons: {
						pin: { visible: false },
						refresh: { visible: false },
						close: {
							click: function() {
								that.sourceDialog.close();
								that._destroyDialog();
							}
						}
					}
				}, that.$dialogParent[0]);
				
				$edit_slide_dialog.find(".dialog-button-apply").bind("click",handleApply);
				
				evt.preventDefault();
				return false;
			});
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
				.append( "<a class=\"view-source\" href=\"#\">view source</a>" );
			add = true;
		}
		if ( add ) {
			$actions
				.append( "<a class=\"edit-source\" href=\"#\">edit</a>" );
				
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
	_executeJs: function( code ) {
		var id = this.id = String( +new Date ),
			demoArea =  this.element.find( ".demo-content demo").length ?
						" .demo-content demo" : " ";

		this.element.attr( "id", id);
		// regex will need to cover: |appendTo|insertBefore|insertAfer|prependTo
		code = code
			.replace(/(\$\(\s?(?:'|"))/g, "$1#" + id + demoArea );
		eval( code );

		this._updateDemoHtml();
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
}).call( app, jQuery );

( function( $ ) {

	var app = this;

$.widget( "app.slidemanager", {
	options : {
		animationLength: 400,
		transitionEffect: "fade",
		slide: 1
	},
	modernizrCheck : {
		"fade" : function() { return Modernizr.csstransitions; },
		"slideLeft" : function() { return Modernizr.csstransforms3d; }
	},
	slides: null,
	currentSlide: null,
	_create: function() {
		var that = this;

		this.slides = [];
		$( ".slides > li" )
			.addClass( this.options.transitionEffect )
			.each( function() {
				that.slides.push( new $.app.slide({}, this) );
			});

		// keypress next and previous actions
		$( document )
			.bind( "keydown", function( evt ){
				if ( !that._currentSlideObj() || !that._currentSlideObj().editDialog ) {
					if( evt.which === 39 ) {
						that._nextSlide();
						return;
					}
					if( evt.which === 37 ) {
						that._prevSlide();
						return;
					}
				}
			});

		setTimeout( function() {
			that._slide( that.options.slide, "forward", true);
		}, 300 );
	},
	_setOption: function( key, val ) {
		if ( key === "slide" && val && val !== this.options.slide ) {
			this._slide( val, "foward" );
		}
	},
	_slide: function( slideNum, direction, forceSlide) {
		var nextSlide = this.slides[ slideNum ] || null,
			prevSlide = this.slides[ slideNum - 2 ] || null;

		// no need to move if we are already on the slide
		if( !forceSlide && this.options.slide === slideNum ) { return; }

		if( this.modernizrCheck[ this.options.transitionEffect ]() ) {
			this._currentSlideObj()
				.element
				.removeClass( "current" )
				.siblings()
					.removeClass( "next" )
					.removeClass( "previous" );
			this.slides[ slideNum - 1 ].element.addClass("current");
			if( nextSlide ) {
				nextSlide.element.addClass( "next" );
			}
			if( prevSlide ) {
				prevSlide.element.addClass( "previous" );
			}
		} else {
			this["_" + this.options.transitionEffect ]( slideNum, direction );
		}
		this.options.slide = slideNum;
		app.publish( "slide.change", { slideNum: slideNum });
		
	},
	_nextSlide: function() {
		if( this.options.slide == this.slides.length ) { return; }
		this._currentSlideObj().close();
		this._slide( this.options.slide + 1, "forward" );
	},
	_prevSlide: function() {
		if( this.options.slide == 1 ) { return; }
		this._currentSlideObj().close();
		this._slide( this.options.slide - 1, "previous" );
	},
	_slideLeft: function( slideNum, direction ) {
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
	_fade: function( slideNum, direction ) {
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
	_currentSlideObj: function( ){
		return this.slides[ this.options.slide - 1 ];
	},
	destroy: function() {
		$.each( this.slides, function( idx, elem ) {
			elem.destroy();
		});
		$.Widget.prototype.destroy.apply( this, arguments );
	}
});
}).call( app, jQuery );
