---
layout: post
title: Skinning Custom Control
date: '2007-07-17 15:38:00'
---

<p>I was trying to add a skin entry for a custom control that I made, but I kept getting the following error</p> <p>"The control type 'ASP.controls_customerpicker_ascx' cannot be themed."</p> <p>Surely I can skin my own control! After research, trial, and error I stumbled upon the solution that worked.</p> <p>Adding the "[Themeable(true)]" attribute to my custom control class fixed my issue. Yippee!</p>