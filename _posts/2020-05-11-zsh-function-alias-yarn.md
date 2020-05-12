---
layout: post
title: Make a zsh function alias to enforce using yarn commands when in a yarn project
date: '2020-05-11 12:00:00'
published: true
excerpt_separator: <!--more-->
summary: Help yourself know to use npm or yarn commands per project
image: /images/2020/2020-05-11-zsh-function-alias-yarn.png
---

{% include eggheadPlayer.html src="https://egghead.io/lessons/node-js-make-a-zsh-function-alias-to-enforce-using-yarn-commands-when-in-a-yarn-project" %}

If you're anything like me, you have multiple projects (between work and side projects) where some are managed with [`npm`](https://docs.npmjs.com/cli/npm) and others with [`yarn`](https://yarnpkg.com/). As the number of projects increase, the harder it gets to remember which one uses which. In this post, we will create a custom `npm` [zsh](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH) function alias to warn yourself to use yarn commands if the a `yarn.lock` file exists in the same directory.

<!--more-->

## Creating the Function Alias

In order to create the `npm` function alias, let's first open up your `.zshrc` configuration file, which can be found in your user directory. You should be able to use one of the following commands to Open up the file in your preferred editor (`code ~/.zshrc`, `vim ~/.zshrc`, etc...).

The following is the script we'd like to execute each time a user types in the `npm` command. We are basicaly hijacking `npm`, so that it'll run our function alias instead of the globally installed `npm` package manager. The script first detects if the directory has a `yarn.lock` file present and if it does, then a warning message is displayed. Otherwise, the script executes the underlying `npm` function passing the origional parameters.

```shell
# ... more configuration ...

npm() {
  if [ -e yarn.lock ]; then
    echo "⚠️ This is a yarn project. Why don't you use it ⁉️"
  else
    command npm $@
  fi
}

# ... more configuration ...
```

> Note: This alias should be able to work both in `bash` or in `zsh`

You may be familiar with the [bash function arguments](https://devhints.io/bash#functions) `$1`, `$2`, etc... that represent the first and second parameters. We could have used those, but since we don't know how many arguments will be passed to our script, we are using `$@` which represents all the arguments.

Another important things to notice is the [`command`](https://ss64.com/bash/command.html) command. This is very important because if we had not provided it this function alias would have recursively called itself over and over again.

## Sourcing our Configuration

Once you've saved your configuration file, you'll either want close and reopen your terminal, create a new tab, or reload your configuration in your current terminal/tab in order for new function alias to be recognized.

You should be able to reload your configuration by running this command in your terminal `source ~/.zshrc`.

## Using our Function Alias

### Project using `npm`

When we are in a project maintained by the `npm` package manager (there is no `yarn.lock` file), our function alias should just pass our commands along to the underlying `npm` executable. You shouldn't really notice any difference in behavior.

```
~/npm-project ❯ ls yarn*
zsh: no matches found: yarn*

~/npm-project ❯ npm run
Lifecycle scripts included in devpun:
  test
    echo "Error: no test specified" && exit 0
```

### Project using `yarn`

However, if you happen to be in a `yarn` project, then our new function alias should stop you in your tracks if you use an `npm` command to manage the project. At that point, just switch gears and use a support `yarn` command instead. It might be handy to find a good [cheat sheet](https://shift.infinite.red/npm-vs-yarn-cheat-sheet-8755b092e5cc) to help you know which command is appropriate.

```
~/yarn-project ❯ ls yarn*
yarn.lock

~/yarn-project ❯ npm run
⚠ ️This is a yarn project. Why don't you use it ⁉️

~/yarn-project ❯ yarn clean
yarn run v1.19.1
$ rm -rf packages/*/{dist,.cache}
✨  Done in 0.08s.
```

## Conclusion

I hope you find this function alias helpful or some of the techniques used to create it. You could possibly extend this by also making a `yarn` function alias or by expanding the idea to recommend or auto-translate one command to an appropriate counterpart.
