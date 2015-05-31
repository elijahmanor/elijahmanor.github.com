---
layout: post
title: jQuery Mobile Form Validation
date: '2011-02-08 02:56:00'
---

<blockquote class="note">
Note: I've updated the following post to work with jQuery Mobile 1.0+. After the beta version they deprecated the Orientation Classes that this post originally used to handle the layout of the error messages. jQuery Mobile recommends using CSS3 Media Queries instead. If you need support for older browsers then <a href="respond.js">respond.js</a> is a nice polyfill for this.</blockquote>

I am working on a <a href="http://jquerymobile.com/">jQuery Mobile</a> application and one of the standard requirements when you have form elements is to provide client-side validation. 

I hadn't seen an example of that yet, so my first inclination was to use the <a href="http://bassistance.de/jquery-plugins/jquery-plugin-validation/">jQuery Validation</a> plugin. As it turns out, the implementation is about the same as you would expect with a non-mobile solution.  

<script src="https://gist.github.com/elijahmanor/1835626.js?file=fiddle.html"></script>
In this case I just adding metadata validation classes to the input elements to indicate what rules (example: required, email, etc...) need to be checked when the form is submitted. You can provide these rules also programmatically, but I won't focus on that technique in this post. You can find more details about how to provide validation rules at runtime in the plugin's <a href="http://docs.jquery.com/Plugins/Validation">documentation</a>. 

In JavaScript, all you have to do is to call the validate() method off of the form element and provide a submitHandler that will perform the action once your form has passed all it's validation rules.

<script src="https://gist.github.com/elijahmanor/1835626.js?file=fiddle.js"></script>
An interesting challenge comes on mobile devices when considering how to display the validation message in portrait versus landscape mode. I wanted the alignment of the errors to show up different depending upon the orientation. 

As it turns out, the solution to this problem was a simple matter of changing my CSS. We can use CSS3 Media Queries to style the page depending on the orientation of the mobile device. By using the following CSS the validation errors will display differently depending if the mobile device is in portrait or landscape mode. 

<script src="https://gist.github.com/elijahmanor/1835626.js?file=fiddle.css"></script>
The following is an embedded working jsFiddle example using all the above HTML, CSS, JavaScript, and Resources. If you want to play and tweak with the code snippets you can click the "+" to the right of the "Resources" tab. 

<iframe src="http://jsfiddle.net/na7bv/embedded/result,html,js,css,resources/" style="height: 400px; width: 100%;"></iframe> 

Since simulating portrait vs landscape mode on a desktop browser is slightly difficult I took some screenshots from my iPhone for you to see the difference. 

<a href="http://1.bp.blogspot.com/_L6DiZQsfJzs/TU_4wfz860I/AAAAAAAAJWo/nYvxxcx7rm4/s1600/photo.PNG" imageanchor="1" style="float: left; margin-bottom: 1em; margin-right: 0.5em;"><img border="0" height="320" src="http://1.bp.blogspot.com/_L6DiZQsfJzs/TU_4wfz860I/AAAAAAAAJWo/nYvxxcx7rm4/s320/photo.PNG" width="212" /></a> <a href="http://3.bp.blogspot.com/_L6DiZQsfJzs/TU_5ZCsvHOI/AAAAAAAAJWw/3svZ1r-ptRI/s1600/photo+%25282%2529.PNG" imageanchor="1" style="float: right; margin-bottom: 1em;"><img border="0" height="212" src="http://3.bp.blogspot.com/_L6DiZQsfJzs/TU_5ZCsvHOI/AAAAAAAAJWw/3svZ1r-ptRI/s320/photo+%25282%2529.PNG" width="320" /></a> 
<div style="clear: both;">
</div>
