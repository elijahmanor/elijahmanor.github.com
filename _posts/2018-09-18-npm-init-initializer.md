---
layout: post
title: Create a project using the `npm init initializer` command
date: '2018-09-18 22:00:00'
published: true
excerpt_separator: <!--more-->
---

{% include eggheadPlayer.html src="https://egghead.io/lessons/react-create-a-new-project-using-the-npm-init-initializer-command" %}

Historically, the [`npm init`](https://docs.npmjs.com/cli/init) command was soley used to create a new `package.json` file. However, as of version `6.1.0`, you can use a new feature of `npm init` called the `<initializer>`. The initializer you provide will determine how your new appilcation will be built. `npm` will prepend `create-` to the name of the initialier you provide and use `npx` to temporarily install and execute that project.

<!--more-->

## 3 ways to `create-react-app` with `npm`

Depending on what version of `npm` you have installed, there are various ways to interact with npm packages. In order to see these differences, let's focus on interacting with the [`create-react-app`](https://github.com/facebook/create-react-app) package to bootstrap a React application.

### 1. `npm` <= `5.1.0`

If you have a older version of `npm` (less than or equal to `5.1.0`), then you don't have many options when using `create-react-app`. You are basically constrained to globally installing `creat-react-app` and then using it to bootstrap your app.

```shell
npm install create-react-app -g
create-react-app playground
```

The above will globally install the `create-react-app` from the `npm` registry and then utilize the global package to bootstrap the application.

#### Pros

* This will work with any version of `npm`
* Once installed, you don't have to reinstall

#### Cons

* The version of `create-react-app` may get out of date

### 2. `npm` >= `5.2.0`

If you have a version of `npm` equal to or greater than `5.2.0`, then you can use the `npx` tool that comes bundled with `npm`.

`npx` (among other things) will temporarily install a package if it's not already installed globally. This is great if you want to experiment with a package or, if you run it so infrequently, you'd rather always have the latest version.

```shell
npx create-react-app playground
```

The above snippet will temporarily install `create-react-app` from the `npm` registry and then execute it in order to bootstrap the application.

#### Pros

* You always have the latest version
* You don't have to install the package globally

#### Cons

* It's not as fast as using a globally installed package

### 3. `npm` >= `6.1.0`

Finally, if you have a fairly recent version of `npm` (version `6.1.0` or above), then you have the newest way to initialize an app. The `npm init` command has been around for many years, but as of `6.1.0` there is a new `<initializer>` option that let's `npm` know you'd like to use it to create or update your app.

Under the covers `npm` will prepend `create-` to the initializer you provide and then install and execute it with the `npx` tool (as we discussed up above).

```shell
npm init react-app playground
```

The above snippet will go out and find the `create-react-app` from the `npm` registry and then install and execute it with `npx` in order to bootstrap the application.

#### Pros

* It's semantic since you are initializing a project
* It's a few characters shorter than calling `npx` directly
* You always have the latest version
* You don't have to install the package globally

#### Cons

* It's not as fast as using a globally installed package

## Other `create-<initializers>`

Above we looked at `create-react-app`, as an example, but there many are other initializers you can use as well, such as...

* [`create-deck`](https://www.npmjs.com/package/create-deck) - Create mdx-deck presentations
  * `npm init deck your-app-name`
* [`create-component-app`](https://github.com/CVarisco/create-component-app) - Tool to generate different types of React components from the terminal. 💻
  * `npm init component-app`
* [`create-hintrc`](https://github.com/webhintio/hint) - 💡 A hinting engine for the web https://webhint.io/
  * `npm init hintrc` 
* [`create-esm`](https://npm.im/create-esm) - Create `esm` enabled packages
  * `npm init esm`

What is your favorite initializer? If you use one that isn't on the above list, I'd love to know. Please let me know on Twitter at [`@elijahmanor`](https://twitter.com/elijahmanor)!

## Conclusion

Depending on your version of your `npm`, you can create projects in very different ways. If you have the latest version, you can use all 3 of the above techniques, including the new initializer option.
