---
layout: post
title: Clever Ways to Find Good Developers
date: '2014-08-18 15:55:00'
---

Is your company looking to hire a few more developers? In addition to adding your postings to job boards or hosting a careers page on your site maybe you should consider reaching out where web developers live and breath!?!

I've seen developer messages hidden in a browser's `Elements`, `Console`, and `Network` DevTool tabs. Not only are these fun, but if a developer comes across one of these messages then chances are they might be the right material you are looking for. 

While you are at it, why don't you brush up on your DevTool skills with [Secrets of Browser Development Tools](http://devtoolsecrets.com/), [Chrome DevTools Overview](https://developer.chrome.com/devtools), or the [Explore and Master Chrome DevTools](http://discover-devtools.codeschool.com/) free course by [codeschool](https://www.codeschool.com/). 
  
## Examples

### Etsy
  
One such company that has employed all of the above is Etsy as seen in the below animated gif. They utilize the `meta` html tag, `console.log`, and a custom `HTTP Header` to highlight...

> "Is code your craft? https://www.etsy.com/careers" 

![](/content/images/2014/Aug/Screenshot_2014_08_18_22_30_34_2.png)

For those of you who enjoy the command line experience, here is an animated gif of me `curl`ing for the dev messages ;)

```
curl https://www.etsy.com > etsy.html
vim etsy.html
curl -I https://www.etsy.com | less
```

![](/content/images/2014/Aug/code_craft_2.gif)

### Mozilla 

The [Mozilla](https://www.mozilla.org/en-US/) webpage is another good example of this technique and they go the extra mile and use [ASCII art](http://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20)... and who doesn't like ASCII art?

#### Markup

![](/content/images/2014/Aug/Screen_Shot_2014_08_14_at_12_52_33_PM.png)

#### Console

I like that they extra effort to disable the `console.log` message with `Tabzilla.disableEasterEgg()`. 

![](/content/images/2014/Aug/Screen_Shot_2014_08_14_at_12_52_54_PM-1.png)

---

Have you ran across any other interesting or clever ways to find good developers? If so, leave a comment. Thanks!

### P.S.

<div id="devtoolstheme"></div>
> You may be wondering how I made my Chrome DevTools have a nice Dark Theme. If so, I installed the [ZeroDarkMatrix Theme for Chrome](https://chrome.google.com/webstore/detail/devtools-theme-zero-dark/bomhdjeadceaggdgfoefmpeafkjhegbo). Once installed you'll need to follow the instructions on the [GitHub Repository](https://github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme#installation) in order to **Enable Developer Tools experiments** from `chrome://flags` and **Allow custom UI themes** from the DevTools ▶ Settings ▶ Experiments tab.

<!--
* [SoundCloud](https://soundcloud.com/)
* [GrooveShark](http://grooveshark.com)
* [Gigaom.com](http://Gigaom.com)
* [Howtogeek](http://Howtogeek.com)
* [Booking](http://booking.com)
* [Zappos](Zappos.com)
* [Zappos.co.uk](http://www.Zoopla.co.uk)
-->