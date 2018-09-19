---
layout: post
title: Inspect and Style an Element in DevTools that Normally Disappears when Inactive
date: '2018-08-27 23:00:00'
published: true
excerpt_separator: <!--more-->
---

{% include eggheadPlayer.html src="https://egghead.io/lessons/chrome-devtools-inspect-and-style-an-element-in-devtools-that-normally-disappears-when-inactive" %}

It’s handy to inspect an element in your browser’s DevTools when you need to experiment or tweak it’s styles, however, it can be very tricky to try and inspect an element if it only shows up when it’s being hovered or if it disappears when it loses focus. Thankfully, there is a handy little trick using setTimeout and debugger that makes inspecting such elements much easier.

<!--more-->

## Problem

In the following [Codesandbox](https://codesandbox.io/s/k5mwr4mp4r?autoresize=1&hidenavigation=1) there are two types of elements that can be difficult to inspect in a browser's DevTools.

1. Elements that display only when hovered and hide when you leave them

2. Elements that display when clicked (or right-clicked) like a fly-out menu, a context menu, or something like that and will only hide once you click away or tab off (if you are using the keyboard).

<iframe src="https://codesandbox.io/embed/k5mwr4mp4r?autoresize=1&hidenavigation=1" style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

These above elements are so difficult to inspect because by the time you try to inspect them, they are no longer in the DOM. I've actually adjusted code and/or CSS to keep these types of elements showing so I could inspect them, but there is an easier way to inspect them with just a small snippet of code.

## Solution

The simple trick to make these elements comply is to pull up the DevTools console and execute the following snippet of JavaScript.

```javascript
setTimeout(() => {debugger}, 3000);
```

Yup, that's it! But what does it do?

Well, as you may already know [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) executes a piece of code at another point in time and the [`debugger`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger) statement pauses execution of the browser at that particular line of code.

The trick is that if we can pause the JavaScript debugger, then we can inspect wahtever elements are showing at that point in time.

`setTimeout` let's us pick a delay value (in milliseconds) that determines when our `debugger` function will be called. The above snippet uses a delay of 3 seconds (3000 milliseconds), which should be sufficient time to allow us to get the UI in a state to show the problematic element we want to inspect.

Once our `debugger` statement is executed, then we can inspect the element in question like we normally would with any other element and proceed to tweak and adjust its styles.

> Note: (19 Sep 2018) Previously I was trying to remember where I first saw this trick years ago and it turns out it was an article from CSS Tricks entitled  [Set a Timed Debugger To Web Inspect Hard-To-Grab Elements](https://css-tricks.com/set-timed-debugger-web-inspect-hard-grab-elements/) by Chris Coyier ([@chriscoyier](https://twitter.com/chriscoyier)).

## Conclusion

You probably won't be using the above snippet of JavaScript very much, but it is so handy to have in your back pocket when you need to inspect those hard to reach elements. And remember, you can always choose whatever timeout works for you. I used 3 seconds because that has seemed to work pretty well for me.
