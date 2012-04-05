module( "slide widget" );

test( "slide pre handling", function() {
	var $div = $( "<div><pre class=\"javascript\" >var somejs=null;</pre>" +
				"<pre>dont run this</pre><div>" )
			.appendTo( "body" ),
		$pre = $div.children().eq( 0 ),
		$pre2 = $div.children().eq( 1 ),
		slide = new $.app.slide({}, $div[0] ),
		$eval = $div.find( ".syntaxhighlighter" );

	expect(2);

	equal( $eval.length, 1, "highlighter functionality applied" );
	equal( typeof slide.code, "string", "code stored in slide widget" );

	$div.remove();
});

test( "basic evaluation of slide code", function() {
	var $div = $("<div/>");
		slide = new $.app.slide({}, $div[0]);

	expect(1);
	slide._executeJs( "myGlobTest = 'here';" );

	equal( myGlobTest, "here", "global value added");

	delete myGlobTest;
	$div.remove();
});

test( "jQuery selectors modified to only be within the slide", function() {
	var $div = $("<div/>").appendTo( "body" ),
		$dummySlide = $("<div><div class='slideContent'></div></div>").appendTo( "body" ),
		slide = new $.app.slide( {}, $div[0]),
		dmSlide = new $.app.slide( {}, $dummySlide[0] ),
		i;

	expect(5);

	slide._executeJs( "myGlob1 = $( '.slideContent' );");
	slide._executeJs( "myGlob2 = $( \".slideContent\" );");
	slide._executeJs( "myGlob3 = $('.slideContent');");
	slide._executeJs( "myGlob4 = $(\".slideContent\");");
	dmSlide._executeJs( "myGlob5 = $(\".slideContent\");");

	setTimeout( function() {
		equal( myGlob1.length, 0, "single quote with space");
		equal( myGlob2.length, 0, "double quote with space");
		equal( myGlob3.length, 0, "single quote with no space");
		equal( myGlob4.length, 0, "double quote with no space");
		equal( myGlob5.length, 1, "slide with class found through selector" );

		$div.remove();
		$dummySlide.remove();

		for( i = 0; i < 5; i++ ) { delete window[ "myGlob" + i ]; }
		start();
	}, 50 );

	stop();
});

test( "jQuery selectors only run within demo content area if one exists", function(){
	var $div = $("<div><p>Here</p><div class='demo-content'><p>There</p></div></div>")
			.appendTo( "body" ),
		slide = new $.app.slide( {}, $div[0]);

	expect(1);
	slide._executeJs( "myGlob1 = $( 'p' );");

	equal( myGlob1.length, 1, "selector only applied to demo content area when exists.");

	$div.remove();
	delete myGlob1;
});

test( "trigger code evaluation on eval click", function() {
	var $div = $( "<div><pre class=\"javascript\" >myGlobt = 'hi';</pre></div>" ),
		slide = new $.app.slide( {}, $div[0] );

	expect(1);
	$div.find( "a.run" ).trigger( "click" );

	equal( myGlobt, "hi", "click triggered code evaluation");

	$div.remove();
	delete myGlobt;
});

test( "api links", function() {
	var $div = $( "<div><pre class=\"javascript\" >$('div').html();</pre></div>" ),
		$div2 = $( "<div><pre class=\"javascript\">$.data( document.body );</pre></div>" ),
		slide = new $.app.slide( {}, $div[0] ),
		slide2 = new $.app.slide( {}, $div2[0] );

	expect(5);

	equal( $div.find("a[href^='http://api.jquery.com']").length, 2,
		 "methods are linked to api.jquery.com");
	equal( $div.find("a[href$='jquery']").length, 1, "jQuery core method link.");
	equal( $div.find("a[href$='html']").length, 1, "jQuery html method link.");
	
	equal( $div2.find("a[href^='http://api.jquery.com']").length, 1,
		"methods are linked to api.jquery.com");
	equal( $div2.find("a[href$='/jquery.data']").length, 1,
		"jQuery data utility method linked.");


});

module( "slide manager widget", {
	setup: function() {
		$("<div class=\"slidemanager\" ><div class=\"slide\" >Slide content here.</div>" + 
		  "<div class=\"slide\" >Slide content here.</div></div>").appendTo( "body" );
	},
	teardown: function() {
		$(".slidemanager").remove();
	}
});

test( "slide manager creation", function() {
	var slideMgr = new $.app.slidemanager( {}, $( ".slidemanager" )[0]),
		firstSlide = slideMgr.slides[0];

	setTimeout( function() {
		var $visibleSlide = $( ".current" );
		equal( slideMgr.slides.length, 2, "correct number of slide widgets created");
		equal(  $visibleSlide.length, 1, "only 1 slide shown" );
		equal( $visibleSlide.data( "slide" ), firstSlide, "first slide is slide shown" );
		start();
	}, 1000);

	stop();
});

test ( "next slide", function() {
	var slideMgr = new $.app.slidemanager( {}, $( ".slidemanager" )[0]), 
		animCount = 0,
		animFinished = function() {
			var $nextSlide = null;
			animCount++;
			if( animCount < 2 ) { return; }
			
			$nextSlide = $( ".current" );
			start();
			equal( $nextSlide.length, 1, "only one slide is showing after animation" );
			equal( $nextSlide.data( "slide" ),
				slideMgr.slides[1], "next slide showing");
		};

	expect(2);

	slideMgr._nextSlide();

	$.each( slideMgr.slides, function() {
		this
			.element
			.queue( function( next ) { 
				animFinished();
				next();
			});
	});

	stop();
});

test ( "arrow keys trigger slide", function() {


});

test( "go to slide", function() {
	
});
