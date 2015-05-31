---
layout: post
title: The 5 Emotional Stages of a jQuery Upgrade
date: '2013-01-22 06:30:00'
---

<blockquote>
The following post contains a emotional filled dialog between fictitious front-end developers "Frank Fowler" and "Mike Morris". In this drama filled exchange Frank decides to upgrade his current project to the latest jQuery release.</blockquote>

<iframe width="640" height="360" src="http://www.youtube.com/embed/wehTkNEfPt8" frameborder="0" allowfullscreen></iframe>

<h3>
Sadness</h3>

<em>Frank:</em> Ahh man, I just saw that <a href="http://blog.jquery.com/2013/01/15/jquery-1-9-final-jquery-2-0-beta-migrate-final-released/">jQuery 1.9</a> was released. Too bad my current project is still using the 1.8.3 release. 

<em>Mike:</em> Ohh bummer, sorry to hear that. I tested out the beta release of 1.9 that came out about a month ago and didn't have any issues.

<em>Frank:</em> Really!?! Sign... I wish I could upgrade. I don't know if I can convince my boss to invest the time to upgrade and staying on an older version makes me a little sad.

<h3>
Fear</h3>

<em>Mike:</em> You might consider upgrading. They've fixed lots of bugs, enhanced CSS3 support, and added several new features.

<em>Frank:</em> I don't know. It is a big project and I don't know if I can risk all the extra testing. I'm glad that it worked out for you, but I may just have to stay on this old version while everybody else upgrades. 

<em>Mike:</em> Frank, an upgrade shouldn't be so bad. The jQuery team does a good job outlining the change log and they have over 6000 unit tests to ensure quality over a suite of browsers.

<em>Frank:</em> Yeah, I guess you are right, but it is such a huge project. What if something goes wrong? Surely something will go wrong, right? I'm fearful that I won't be able to figure it out if there is an issue. 

<em>Mike:</em> Well, it wouldn't hurt trying would it?

<em>Frank:</em> I guess you are right. Lets go head and give it a try.

<h3>
Anger</h3>

<em>Frank:</em> Okay, I just added a reference to the jQuery CDN for the 1.9 release to my project. Here goes nothing...

<em>Mike:</em> So, how did it go?

<em>Frank:</em> Huh... WHAT!?! Nothing even works anymore! I knew I shouldn't have upgraded.

<em>Mike:</em> Well, what exactly is breaking?

<em>Frank:</em> Like I said, nothing works! What did jQuery do to this release? Are they trying to hurt the development community? The last version worked just fine for me. I don't know if I can trust this project anymore.

<h3>
Shame</h3>

<em>Mike:</em> Now now, lets take a look at this together. Does your application use some of the features that jQuery deprecated?

<em>Frank:</em> What!?! Deprecated? Umm, well I don't know. When did they deprecate features?

<em>Mike:</em> A while back jQuery mentioned they were going to deprecate features like the <code>.live()</code> method and <code>.browser</code> sniffing.

<em>Frank:</em> Ohh, I guess I didn't realize that. Maybe I should have read the blog post release notes more thoroughly :(

<em>Mike:</em> Yeah, even though they deprecated those features jQuery hadn't removed them until the 1.9 release. So, maybe that is why some of your code is broken. I know you used to use <code>.live()</code>. Did you change your <code>.live()</code> to use the new <code>.on()</code> method?

<em>Frank:</em> Yeah, I never did switch to the new <code>.on()</code> method that they added a while back and the application does do some sniffing using the <code>$.browser</code> object. So, I guess that means I won't be able to upgrade to the 1.9 release.

<h3>
Gladness</h3>

<em>Mike:</em> Ohh, no! The jQuery team planning for issues like this so they went ahead and put all of the removed deprecated features into a <a href="https://github.com/jquery/jquery-migrate/blob/master/warnings.md">migration plugin</a> in case you still need it. That way you can use the new stuff without having to immediately refactor your existing code. The idea is that you can slowly refactor as needed.

<em>Frank:</em> Really!?! Wow, that is so easy. Let me guess, that was explained in the release notes too? 

<em>Mike:</em> Yep ;) No probably man, it happens. Now don't get me wrong there are some releases where some bugs are introduced in a major release, but they are usually found pretty quickly and a minor release comes out shortly after. However, with this particular issue there was a planned workaround.

<em>Frank:</em> Why looky there, I just applied the migration plugin and now my app is working as expected. Thanks for your help Mike.

<em>Mike:</em> I didn't really do anything, it was the jQuery core members... you should thank them ;)
