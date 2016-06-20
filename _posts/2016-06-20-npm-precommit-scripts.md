---
layout: post
title: Run npm scripts in a git pre-commit Hook
date: '2016-06-20 00:18:00'
---

If your team is anything like the one I work with, everyone has their own preferred IDE that they use ([Sublime Text](https://www.sublimetext.com/), [Atom](https://atom.io/), [WebStorm](https://www.jetbrains.com/webstorm/), [Vim](http://www.vim.org/), [Visual Studio Code](https://code.visualstudio.com/), etc...) and although most of them have integrated linting support that doesn't guarantee all issues have been addressed before a Pull Request is made.

So, we have started to use the node [`pre-commit`](https://www.npmjs.com/package/pre-commit) module which makes it really easy to run linting (or whatever npm scripts you want) before code is committed to a `git` repository.

## Installation

`npm install pre-commit --save-dev`

## `package.json`

Once you've installed the `pre-commit` node module, then you add a new `pre-commit` entry in your `package.json` file indicating an array of `npm scripts` you want to pass before allowing a successful commit.

```
{
  "scripts": {
    "lint": "eslint ./ --cache --ignore-pattern .gitignore"
  },
  "pre-commit": [ "lint" ],
  "devDependencies": {
    "eslint": "^2.12.0",
    "pre-commit": "^1.1.3"
  }
}
```

😜 Don't worry, you can force a commit with `--no-verify` if you find yourself in the situation where you just want to commit even though your pre-commit hooks don't succeed.

![](/assets/images/2016/Jun/precommit-vim.gif)

## Pre-commit Message

I've found that it is best to prepend a script that describes what is happening because it could be confusing if you didn't realize linting or tests were being checked before the commit happened. Otherwise you might think something was wrong with git or something.

```
{
  "scripts": {
    "lint": "eslint ./ --cache --ignore-pattern .gitignore",
    "precommit-msg": "echo 'Pre-commit checks...' && exit 0"
  },
  "pre-commit": [ "precommit-msg", "lint" ],
  "devDependencies": {
    "eslint": "^2.12.0",
    "pre-commit": "^1.1.3"
  }
}
```

![](/assets/images/2016/Jun/precommit-vim-message.gif)

## Other ideas

You could take this idea a bit further by adding other scripts in the `pre-commit` array such as running unit tests ([`ava`](https://github.com/avajs/ava), [`mocha`](https://github.com/mochajs/mocha), [`jasmine`](https://github.com/jasmine/jasmine), etc...) or enforcing a unit test coverage threshold ([`nyc`](https://github.com/bcoe/nyc), [`istanbul`](https://github.com/gotwarlost/istanbul), etc...). However, the more scripts you add during the pre-commit hook the longer you'll need to wait every time you commit code.

## Conclusion

Adding [`pre-commit`](https://www.npmjs.com/package/pre-commit) to your project can be helpful to encourage consistency and quality of your code repository. Have you found other use cases other than linting and testing? If so, I'd love to hear from you about it. You can reach me on twitter at [@elijahmanor](http://twitter.com/elijahmanor).
