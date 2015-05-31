---
layout: post
title: Custom Searches with Alfred
date: '2014-12-01 06:12:10'
---

<img src="/content/images/2014/Dec/alfred_logo.png" style="float: left; width: 150px; padding-right: 1em;" /> If you use Mac OS X, then you are probably already aware of the [Alfred](http://www.alfredapp.com/) productivity app. Even though there is a native OS Spotlight, I find that Alfred suites my needs better. One of these gems is... **Custom Search**.

## Custom Web & URL Searches

Alfred comes with built-in Web Searches such as `google`, `translate`, `twitter`, `wiki`, `imdb`, `facebook`, `weather`, etc... but it also lets you create your own custom search.

You can create a custom search of your own by identifying a website that supports URL parameters. For example, let's create a Custom Search for `Stack Overflow`.

Here we provide the `Search URL` including the `{query}` that represents the value we provide to Alfred.

![](/content/images/2014/Dec/Screen_Shot_2014_11_30_at_11_52_43_PM.png)

Now I can use the custom search by triggering Alfred with my new keyword and a search term like the following... `stack reactjs flux`

![](/content/images/2014/Dec/stack_blog.gif)

## Can I Use?

If you are writing cross-browser web sites and need to search for feature support, then you are probably visiting the [Can I Use?](http://caniuse.com) website fairly frequently. 

For this purpose, why not make a `caniuse` Alfred Custom Search... `http://caniuse.com/#search={query}`

![](/content/images/2014/Dec/caniuse_blog.gif)

## Dev Docs

The API documentation for all the technologies we use are spread out all over the internet. [Dev Docs](http://devdocs.io/) is a handy online tool that allows you to search across many technologies to find API level documentation. They currently support HTML, CSS, JavaScript, Git, Grunt, Lo-Dash, Sass, SVG, and over 30 more APIs. 

For this I've created a `devdocs` custom search... `http://devdocs.io/#q={query}`

![](/content/images/2014/Dec/devdocs_blog.gif)
