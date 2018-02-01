---
layout: post
title: Various Ways to Import LoDash
date: '2015-07-14 05:30:00'
---

https://github.com/lodash/lodash-webpack-plugin

https://www.npmjs.com/package/babel-plugin-lodash

webpack 2 will do that without the plugin using tree shaking, but that is only beta at this point

http://www.2ality.com/2015/12/webpack-tree-shaking.html

`import { orderBy } from "lodash";`
destructuring doesn’t pull only in what is needed  which is where the babel-lodash-plugin can help or webpack 2 tree shaking,

`let orderBy = require("lodash/orderBy");`

the problem happens if you use
`var _ = require( "lodash" ); `
`import { forEach } from "lodash";` then you have to have something to remove unwanted functions (like webpack 2 or a plugin) we

yeah, all 3 of these would be big changes to our codebase…

1. switching to something like `amp` :fire:
2. switching all code to individually require each lodash method `const chunk = require( "lodash/chunk" );`
3. switching all code to destructuring each lodash method `import { chunk } from "lodash";` (also doesn’t solve the problem)

where as leveraging `babel-plugin-lodash` or `webpack 2` would enable us to keep existing code ​*as-is*​ and slowly migrate to import destructuring as we go (edited)
