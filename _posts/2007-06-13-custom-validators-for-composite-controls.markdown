---
layout: post
title: Custom Validators for Composite Controls
date: '2007-06-13 05:04:00'
---

<p>I have created several custom composite controls (containing multiple input fields) and validators for our website at work.  </p><p>I needed the SetFocusOnError property to work on my custom validators, but it didn't work by default.  </p><p>I started to dig through ASP.NET's JavaScript code and found that if my custom composite control was enclosed in a table tag (instead of the default div tag) that the JavaScript would search the table tag for input controls.  </p><p>The following code will change the default enclosed tag from a div to a table. </p><pre><span>public</span> <span>class</span> <span>LengthEditor</span> : <span>CompositeControl<br></span>{<br><span>protected</span> <span>override</span> <span>HtmlTextWriterTag</span> TagKey<br>   {<br><span>get</span> { <span>return</span> <span>HtmlTextWriterTag</span>.Table; }<br>   }<br>}</pre><a href="http://11011.net/software/vspaste"></a>