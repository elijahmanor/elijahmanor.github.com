---
layout: post
title: StyleLint Your CSS/Sass/LESS
date: '2016-05-16 05:30:00'
---

I'm sure many of you statically lint your JavaScript and realize the importance
of bringing consistency to your codebase. Until recently there haven't been many
good tools to help bring that same consistency to your CSS styles, but
thankfully we have several choices. 

You may have heard of CSSLint, ScssLint, or SassLint. Those are all great tools,
but as of recent I'm most fond of using a 

var gulp = require( "gulp" );
var postcss = require( "gulp-postcss" );
var reporter = require( "postcss-reporter" );
var stylelint = require( "stylelint" );
var less = require( "postcss-less" );

gulp.task( "css:lint", function( done ) {
	var processors = [
		stylelint(),
		reporter( {
			clearMessages: true,
			throwError: true
		} )
	];
	var lessFiles = [
		"./client/less/**/*.less",
		"./client/js/**/*.less"
	];
	return gulp.src( lessFiles ).pipe( postcss( processors, { syntax: less } ) );
} );

http://www.sitepoint.com/improving-the-quality-of-your-css-with-postcss/
