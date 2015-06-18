---
layout: post
title: 'jQuery Mobile Corner: How to Change Which Page is Displayed First'
date: '2012-01-20 13:17:00'
---

<br>all 3 techniques use...<br><br>$( document ).bind( "mobileinit", function() {<br>    $.mobile.autoInitializePage = false;<br>});<br>[11/18/11 10:15:45 AM] Elijah Manor: technique #1: //doesn't really fit your needs, but works<br><br>$( "#one" ).remove(); //remove 1st page<br>$.mobile.initializePage(); //let jqm do the rest<br>[11/18/11 10:39:57 AM] Elijah Manor: technique #2: //copy initializePage function from the jqm source & modify to support optional 1st page override<br><br>initializePage( $( "#two" ) );<br>[11/18/11 10:41:30 AM] Elijah Manor: technique #3: //manipulate the data-role, call jqm's official initializePage, & put back data-roles<br><br>var allButFirstPages = $( ":jqmData(role='page')" ).filter( ":not(:eq(1))" ).attr( "data-role", null ); //put index of 1st page in eq() selector  <br>$.mobile.initializePage();<br>allButFirstPages.attr( "data-role", "page" );<br>