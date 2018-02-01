---
layout: post
title: Getting Started with Create React App
date: '2018-02-01 00:00:00'
published: false
---

{% include youTubePlayer.html id="eCz3rhsDG5s" %}

## File Stats

![](../assets/images/2018/Jan/vscode-extensions-git-lens-1-file-stats.png)

```js
if ( true ) { console.log(    "this is" ) }
```

## YouTube Description
In this video I introduce the create-react-app CLI tool which allows you to quickly create and run a React applications with no configuration.  Along the way, we’ll look at each of the scripts that come with create-react-app and investigate various ways to keep your react-scripts up-to-date.

Resources
https://twitter.com/elijahmanor
http://bit.ly/manorism-create-react-app
http://bit.ly/manorisms-npx
http://bit.ly/manorisms-version-lens
http://bit.ly/manorisms-npm-update

## Intro
Hi, this is Elijah Manor and welcome to Manorisms. In this video I am going to introduce the create-react-app CLI tool which allows you to quickly create and run a React applications with no configuration.  So, without further ado, let’s get to it.

## Outro
Thanks for watching this first video in create-react-app series. Stay tuned for more videos to come. If you want to be know about future videos you can subscribe to the channel and click the bell to be notified when new videos are launched. In the meantime, feel free to reach out on twitter @elijahmanor. Until then, have a blessed day!

## Outline
* node >= 6
* npm >= 5.2 npx
* node -v && npm -v
* npm i create-react-app -g (Ctrl-u to clear line)
* npm i npm -g (Ctrl-u to clear line)
* nvm use v8
* npx create-react-app playground
* cd playground
* npm start (start the server)
* launch vscode & show index.html & app.js && package.json
* npm test
* npm run build
* cd build && npx serve
* install old version of react-scripts
	* npm i react-scripts@0.9.0
* vscode hover over package.json (shows latest)
* vscode extension Version Lens (shows satisfies & shows latest)
* npm view react-scripts versions
* npm outdated
* npx npm-check -u
* npm run eject
	* open vscode
		* show folders (config, scripts)
		* open package.json (show version lens)
	* goto command line
		* run npm outdated
		* run npx nom-check -u

## Script
 Before we start we need to verify what version of node and npm we have installed. We can do this on the command line by typing `node -v && npm -v`.

You’ll need at least Node version 6 or above on your dev machine in order for create-react-app to work. Since we are using npm version 5.2 or above we can utilize the npx package runner instead of having to install create-react-app globally.

So, to create our app we’ll run `npx create-react-app playground`

That’ll create a new playground react app and start to install all the dependencies that it needs to run, build. etc…

Now let’s change directory to our new app and from here we can execute `npm run` in order to see all the scripts that are available to us.

We have start, test, build, and ejects scripts. Let’s quickly goes through these scripts… beginning with `npm start`

This will kick off a development server for our app and launch a browser instance to the correct URL.

Let’s take a look at the code that create-react-app generated for us.

In the `src` folder there are a few files. The `index.js` file is where our App begins. You can see the `ReactDOM.render` where it attaches to the `root` DOM element.

The `App.js` file contains the `App` React component. You can see the header that contains the image we saw and also the intro text.

When we open the `package.json` file you may be shocked at what you see. Where are all the dependencies!?! How refreshing that there are only 3! `react`, `react-dom`, and `react-scripts`. the `react-scripts` dependency manages all of the other dependencies such as babel, webpack. jest, linting, etc. It’s refreshing to have such a clean package.json file.

You can also see that the npm scripts are just thin proxies to functionality inside of react-scripts.

Let’s switch gears and run the tests with `npm test`. Under the covers React uses the Jest test runner, which is a really nice tool.

In our case,  there is only one test but you are encouraged to write your own tests once you start building out your app.

Now, let’s run the `build script` . This will create a production build of your app and output the results to the `build` folder.

Once it’s done we can go into the build folder and kick up a simple http server with `npx server` 

…and then we can head over to our browser and take a look at a built version of our react app.

Next, let’s do something fun. Let’s install an older version of react-scripts to show the experience of upgrading when there is a newer version. We’ll install version 0.9.0.

If we come into VSCode, you’ll notice something interesting when you hover over one of your dependencies. VSCode actually shows you what the latest version of that dependency is! Wow. 

If you do use VSCode, you could go one step further and install an extension called Version Lens. Once installed this extension adds metadata to your package.json dependencies . You’ll notice that Version Lens says we are using the Latest versions of react and react-dom… 

and for react-scripts on the left it says based on our version range, it satisfies up to version 0.9.5, however the latest version is 1.1.0. If we wanted, we could click one of these links to update the package.json file. 

Or, if you prefer the command line there are some techniques we can use. 

First let’s run `npm view react-scripts versions` this will list out all of the versions that have been published to npm.

If you want just the latest official release you can try the same command, but remove the `s` at the end.

Another command you can try is `npm outdated`, which is a native npm command. It’ll check the registry for you and see if you have any packages that are currently outdated. 

In our case, it says react-scripts is out of date. Our version range is requesting 0.9.5 and the latest version is 1.1.0. This is a great command, however, it is read-only.

If you want a more interactive update tool, you can try out  `npm-check` with the -u flag.

This shows that we have one update and it’s a potentially breaking change since it’s now 1.1.0. I’ll go ahead and press the space-bar to select and enter to install.

The last script is the eject script. If the application that was generated by create-react-app doesn’t quite fit your needs… either it’s babel configuration, web-pack configuration, etc… then you can use the eject script, which will export all of create-react-app’s dependencies, configurations, and scripts and inject them into your app.

This is permanent. There will no longer be a quick and easy way to upgrade your app if facebook makes a new version of react-scripts. Now, that we know the risks, let’s say yes.

And as I mentioned before, you can see a whole bunch of dependencies, scripts, and configurations were ejected into our app.

Now we can see some things that were not there before.

There is a config folder that now contains stuff for jest, polyfils, and various webpack configurations. 

Also, we have a scripts folder that contains code for our build, start, and test scripts. 

The package.json file is MUCH larger than it used to be, and you’ll notice that there are many dependencies that could possibly use updating. The react-scripts dependency used to take responsibility of keeping those up-to-date and compatible, but now that is your responsibility. 

If we come back over and run `npm outdated` you’ll see a more concise view of what things may need to be updated.

Likewise, you can run `npx npm-check -u` for an interactive way to update one or more of these dependencies.


