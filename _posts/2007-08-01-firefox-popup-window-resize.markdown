---
layout: post
title: Firefox Popup Window Resize
date: '2007-08-01 02:18:00'
---

For some reason, some popups in Firefox have been opening with the wrong size for the content displayed and the resize feature was disabled for the windows.<br><br>After some research, I found that in Firefox you can override this behavior by changing one of the many <a href="http://kb.mozillazine.org/About:config_entries" target="_blank">user preferences</a>.<br><br>To do this <ol><br><li>Type <a href="http://kb.mozillazine.org/About:config" target="_blank">about:config</a> in the location bar and press enter</li><br><li>Search for the "dom.disable_window_open_feature.resizable" entry</li><br><li>Change the boolean value from false to true</li><br></ol><br>Setting this to true will prevent a window from disabling the resize feature.