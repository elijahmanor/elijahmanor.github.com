---
layout: post
title: From Blogger to Ghost
date: '2013-12-05 04:21:17'
---

## History

I've been using Blogger for quite some time, but over the last several years I've wanted to switch to something that would enable me to use markdown to compose my posts. I had considered switching to [Octopress](http://octopress.org/), but when I first saw the [Ghost Blogging Platform](https://ghost.org/) on [Kickstarter](http://www.kickstarter.com/projects/johnonolan/ghost-just-a-blogging-platform) I knew that is where I wanted to migrate. And of course, since I enjoy JavaScript so much, I like that Ghost is written in Node.js.

## Installation

So, how did I make the transition from Blogger to Ghost? Well, it wasn't too bad. Thankfully Windows Azure has Ghost listed in its web site gallery `New->Compute->Web Site->From Gallary`, which made it really easy to get started.

![](/content/images/2013/Dec/azure_ghost_PNG.png)

For most of this phase I followed the excellent instructions from Jeremiah Billmann's ([@jbillmann](http://twitter.com/jbillmann)) post entitled [Installing Ghost from the Azure Web Site Gallery](http://www.jbillmann.com/installing-ghost-from-the-azure-web-site-gallery/).

> Note: You may also be interested in setting up Ghost from the command line. If so, Scott Hanselman ([@shanselman](http://twitter.com/shanselman)) covered this in a great post entitled [How to install the nodejs Ghost blogging software on Azure Websites](http://www.hanselman.com/blog/HowToInstallTheNodejsGhostBloggingSoftwareOnAzureWebsites.aspx)

## Migration

The next step was to somehow migrate my posts from Blogger over to Ghost. Unfortuantley, there isn't a straightforward way to do this yet. The next version of Ghost is supposed to have more migration tools and plugins, but for now there is a import from WordPress feature.

So, what I did was create a temporary WordPress blog from the Azure Web Site Gallery and import all of my Blogger posts into it. Then I installed the [Ghost WordPress Plugin](http://wordpress.org/plugins/ghost/), which exports WordPress posts to a JSON format that Ghost can import.

![](/content/images/2013/Dec/import_blogger_PNG.png)

At that point you can navigate to your Ghost blog... http://yourdomain/ghost/debug/ and  you'll be presented with a simple GUI to import the JSON file you exported from WordPress.

![](/content/images/2013/Dec/import_tool_PNG.png)

## Visual Studio Online

In order to make modifications to Ghost once I installed it I decided to go ahead and use the new [Visual Studio Online "Monaco" Code Editor](http://www.visualstudio.com/en-us/news/2013-nov-13-vso.aspx) that was recently released.

![](/content/images/2013/Dec/visual_studio_online_PNG.png)

I've been pleased with my experience thus far and I look forward to see this online tool mature.

You can learn more about this tool from [@jongalloway's](http://twitter.com/jongalloway) recent blog post entitled [A look at the new Visual Studio Online "Monaco" code editor](http://weblogs.asp.net/jgalloway/archive/2013/11/13/a-quick-look-at-the-new-visual-studio-online-quot-monaco-quot-code-editor.aspx#.UoUgE61r09k.google_plusone_share)

## URL Rewrite

The current version of Ghost doesn't have any mechanism for URL Rewritting, so I dug into the `server.js` file and added some custom routes to map my old Blogger URL structure to the new structure. Unfortunately, the slugs on Blogger and Ghost ended up being different so it made the process more manual than I had wanted, but ohh well.

<script src="https://gist.github.com/elijahmanor/7800069.js"></script>

## Disqus

Installing the [Disqus](http://disqus.com/) commenting widget on Ghost wasn't difficult. All had to do is to edit the `content/themes/casper/post.hbs` template and pasted in the following snippet right before the ending `</article>` element.

<script src="https://gist.github.com/elijahmanor/7803796.js"></script>

Trying to match up my Disqus comments from Blogger to Ghost took a bit of work as well since the identifier was the post URL and as I mentioned above that has changed.

Thankully Disqus has some [migration tools](http://help.disqus.com/customer/portal/articles/286778-migration-tools) built to assist with this issue. I used the [URL Mapper](http://help.disqus.com/customer/portal/articles/912757-url-mapper) tool which let me redifine the URLs associated with particular comment threads. 

![](/content/images/2013/Dec/disqus_csv_PNG.png)

You can provide a CSV file mapping the old URL to the new URL and it will change the mappings for you. The following is an example of what one of the lines from the CSV looks like. 

<script src="https://gist.github.com/elijahmanor/7804096.js"></script>

## Conclusion

The migration was an interesting exercise and I already enjoy blogging on this platform much better already. Ghost has a lot of growth ahead of it and I look forward to upgrading as new releases are published. 
