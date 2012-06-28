define( [
	"js/app/app",
	"./scripts/shCore",
	"./scripts/shBrushCSS",
	"./scripts/shBrushJScript",
	"./scripts/shBrushXml",
	"./scripts/shBrushPlain",
], function ( app, core, css, js, xml, plain ) {

	return {
		name: "SyntaxHighlighter",

		initialize: function () {
			_.bindAll( this, "render" );

			app.once( "slides.rendered", this.render );

			app.utils.addLink( "crosslink/plugins/syntaxhighlighter/styles/shCore.css" );
			app.utils.addLink( "crosslink/plugins/syntaxhighlighter/styles/shThemePresentations.css" );
		},

		render: function ( $el ) {
			SyntaxHighlighter.highlight({
				toolbar: false,
				gutter: false
			});
		}
	};
});