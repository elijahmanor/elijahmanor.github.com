---
layout: post
title: TextMate-like ⌘T &amp; ⇧⌘T in Chrome Dev Tools &amp; Other New Features
date: '2012-02-27 10:14:00'
---

<h3>
Introduction</h3>

<div class="separator" style="clear: both; text-align: center;">
<a href="http://tools.google.com/dlpage/chromesxs" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" src="http://2.bp.blogspot.com/-lQTREgnwTwA/T0eS0nVkD_I/AAAAAAAAMeI/vs2PUnotW3g/s1600/chrome-canary-lockup.png" /></a></div>
For the past year or so I've used <a href="http://tools.google.com/dlpage/chromesxs">Google Chrome Canary</a> as my primary web browser, however, about a month ago I temporarily switched to the stable&nbsp;build&nbsp;of Chrome because of some&nbsp;instability&nbsp;in the dev tools. I just recently switched back to Canary and was&nbsp;pleasantly&nbsp;surprised to see numerous new features in the dev tools there were very welcome indeed!

<blockquote>
This post only covers the extreme latest in Chrome Dev Tools. There are so many more rich features that can be found. If you are interested about more helpful features you might be interested in a post I did last year entitled <a href="http://www.elijahmanor.com/2011/08/7-chrome-tips-developers-designers-may.html">7 Chrome Tips Developers & Designers May Not Know</a></blockquote>

If you are not familiar with the Canary build of Chrome, it is a extremely dev version of the browser. You should be&nbsp;cautious&nbsp;because it does update almost every day, but at the same time you get first in line to see all the new features. Unlike the dev or beta builds of Chrome you can actually install Canary side-by-side next to your Stable or Beta build of Chrome. This makes switching between versions very&nbsp;convenient.

The features I am about to describe are currently only available in the dev or canary builds of Chrome. If you have the Beta or Stable builds then you will not see these yet, but hopefully they'll make their way to those builds sooner than later. At least this will wet your appetite ;)

<h3>
Scripts Explorer</h3>

A welcome change to the Scripts tab is a new Scripts Explorer (as seen in the below image). The previous way to navigate through the scripts of a webpage was to open a HUGE drop down containing tons of script files. Chrome kept reorganizing that huge&nbsp;drop-down&nbsp;list to make it more usable, but in the end it wasn't optimal when dealing with a site with lots of JavaScript fiels.

The new Scripts Explorer nicely&nbsp;separates&nbsp;the Scripts used on the webpage from the Content Scripts used in all of the Chrome Extensions you have installed in your browser. Historically, it was slightly annoying to see all those Content Scripts alongside your main JavaScript files in that huge drop down mentioned above. Again, over time Chrome moved those Content Scripts to the bottom of that drop down instead of intermingled, but this move to the Scripts Explorer is head over heals WAY better... YAY!

In addition, you can also choose to dock the Scripts Explorer to the left side of the dev tools (by clicking the little icon in the upper right) or have it auto-close when you are done finding what you need.

<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-qWnhG0YA5VE/T0cVgbYDjmI/AAAAAAAAMdw/NX5IUwMhk1E/s1600/dev-tools-panel.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://2.bp.blogspot.com/-qWnhG0YA5VE/T0cVgbYDjmI/AAAAAAAAMdw/NX5IUwMhk1E/s1600/dev-tools-panel.png" /></a></div>

<h3>
TextMate's ⌘T "Go to File" Feature</h3>

I don't know about you, but I'm one of those keyboard shortcut junkies, so I am always on the lookout on how to do my job without using the mouse. So, I was even more excited to see support for quickly finding a JavaScript file by only using the keyboard! Chrome call's this feature "Go to Script" and it is similar to what you may have experience in TextMate using&nbsp;⌘T or maybe in Sublime Text 2 with&nbsp;⌘P.

Since&nbsp;⌘T is already reserved for creating a new tab in Chrome, they have chosen&nbsp;⌘O for this feature. As soon as you type&nbsp;⌘O you will see the following dialog displaying JavaScript files. As you type the list will filter to only the files that match what you are typing. You can arrow up or down to narrow the selection even more and then click "enter" to open that script file.

<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-uZszUdnx8K4/T0cVf7F2nkI/AAAAAAAAMdo/rQPLsUR7sbo/s1600/dev-tools-cmd-t.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://4.bp.blogspot.com/-uZszUdnx8K4/T0cVf7F2nkI/AAAAAAAAMdo/rQPLsUR7sbo/s1600/dev-tools-cmd-t.png" /></a></div>

<h3>
TextMate's ⇧⌘T "Go to Symbol" Feature</h3>

Now, if the "Go to Script" feature wasn't enough, there is also the "Go to Function", which is similar to the "Go to Symbol" feature of TextMate using&nbsp;⇧⌘T or&nbsp;⌘R&nbsp;in Sublime Text 2.

Once you are in a JavaScript file you can press&nbsp;⇧⌘O to bring up the "Go to Function" dialog. This works in a very similar way as the "Go to Script" dialog as we saw previously, but this time instead of looking for files, it helps you track down functions! Navigating through your JavaScript files to find a specific function has now become a breeze!

<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/--6PWmBTE7S8/T0cUa4OfBnI/AAAAAAAAMdg/fWr8kGBUHMk/s1600/dev-tools-cmd-shf-t.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://4.bp.blogspot.com/--6PWmBTE7S8/T0cUa4OfBnI/AAAAAAAAMdg/fWr8kGBUHMk/s1600/dev-tools-cmd-shf-t.png" /></a></div>

<h3>
Dock Dev Tools to the Right</h3>

The last feature that stood out to me as really cool, was the new setting to "Dock to right". Many people these days have a wide-screen monitor and having the dev tools docked at the bottom of the screen sometimes feels a little scrunched. If I have my browser maximized there is usually tons of room to the left or right of the website I am viewing.

Thankfully, with this new feature I can now choose to dock the dev tool to the right of my screen to give some breathing room for development!

<blockquote>
Note: I undrestand some like to undock the dev tools to solve this issue, but I usually tend to like keeping them docked so this new feature is very handy for me.</blockquote>

<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-Ahx9xel8o5c/T0cViJVrn_I/AAAAAAAAMd4/ZjJEF31X5gg/s1600/dev-tools-right.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://2.bp.blogspot.com/-Ahx9xel8o5c/T0cViJVrn_I/AAAAAAAAMd4/ZjJEF31X5gg/s1600/dev-tools-right.png" /></a></div>

In order to turn on this feature, you'll need to go into the Settings dialog. You can access this by clicking on the gear icon located at the bottom right of your dev tools. Once the dialog has been&nbsp;launched&nbsp;you should see a General section with the "Doc to right" option listed.

<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-F8Y8NpRMdr0/T0cVim2YnrI/AAAAAAAAMeA/MhWRi30hFzc/s1600/dev-tools-settings.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://4.bp.blogspot.com/-F8Y8NpRMdr0/T0cVim2YnrI/AAAAAAAAMeA/MhWRi30hFzc/s1600/dev-tools-settings.png" /></a></div>

<h3>
Conclusion</h3>

I find the the above JavaScript&nbsp;enhancements&nbsp;to the dev tools have really made navigating through scripts to be much more enjoyable. If you have noticed any other new features that I have missed please let me know. They keep cropping up all the time... which is AWESOME!

If you have Chrome Canary then you can start using the above features right way, otherwise they should make it in a Beta or Stable build in the near future.