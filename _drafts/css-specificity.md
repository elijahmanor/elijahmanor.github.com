---
layout: post
title: Visualize Your CSS Statistics via the CLI
date: '2015-07-14 05:30:00'
---

https://twitter.com/elijahmanor/status/673913804128784384

Used npm modules cssstats, fmt, & babar to generate CSS console stats & specificity-graph to make interactive chart

var gulp = require( "gulp" );
var fs = require( "fs" );
var cssstats = require( "cssstats" );
var fmt = require( "fmt" );
var _ = require( "lodash" );
var babar = require( "babar" );
var specificityGraph = require( "specificity-graph" );

gulp.task( "css:stats", [ "css:build" ], function() {
	var css = fs.readFileSync( "./public/css/app.css", "utf8" );
	var stats = cssstats( css, { specificityGraph: true } );
	var colors = stats.declarations.properties.color;
	var backgroundColors = stats.declarations.properties[ "background-color" ];
	var fontFamilies = stats.declarations.properties[ "font-family" ];
	var fontSizes = stats.declarations.properties[ "font-size" ];
	var specificity = stats.selectors.specificity;

	fmt.sep();
	fmt.title( "CSS Stats" );
	fmt.field( "Size", stats.humanizedSize );
	fmt.field( "Gzip Size", stats.humanizedGzipSize );
	fmt.field( "Rules", stats.rules.total );
	fmt.field( "Selectors", stats.selectors.total );
	fmt.field( "Declarations", stats.declarations.total );
	fmt.title( "Total Declarations" );
	fmt.field( "Colors", colors.length );
	fmt.field( "Background Colors", backgroundColors.length );
	fmt.field( "Font Families", fontFamilies.length );
	fmt.field( "Font Sizes", fontSizes.length );
	fmt.title( "Unique Declarations" );
	fmt.field( "Colors", _.uniq( colors ).length );
	fmt.field( "Background Colors", _.uniq( backgroundColors ).length );
	fmt.field( "Font Families", _.uniq( fontFamilies ).length );
	fmt.field( "Font Sizes", _.uniq( fontSizes ).length );
	fmt.title( "Specificity" );
	fmt.field( "Max", specificity.max );
	fmt.field( "Average", specificity.average );
	console.log( babar( specificity.graph.map( function( item, index ) {
		return [ index, item ];
	} ) ) );
	fmt.separator();

	specificityGraph( "./client/specificity", css, function( directory ) {
		console.log( "specificity-graph files created in " + directory );
	} );
} );
