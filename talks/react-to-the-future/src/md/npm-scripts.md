<!--
{
  "className": "Slide--title"
}
-->

# `npm` scripts

---

<!--
{
  "className": "Slide--static"
}
-->

# `Running Scripts`

<div class="Split">
  <div class="Split-column Split-column--65">
<pre class="language-javascript language--clean language--small"><code>{
  "name": "myproject",
  "description": "package.json file for myproject",
  "devDependencies": {
    "eslint": "latest"
  },
  "scripts": {
    "lint": "eslint --cache --ext .js --ext .jsx src",
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--25">
    <p>`npm run-script lint`</p>
    <p>`npm run lint`</p>
  </div>
</div>

---

# `Shortcut Scripts`

<div class="Split">
  <div class="Split-column Split-column--65">
<pre class="language-javascript language--clean language--small"><code>{
  "name": "myproject",
  "devDependencies": {
    "karma": "latest",
    "webpack-dev-server": "latest"
  },
  "scripts": {
    "test": "karma start --log-leve=error karma.config.js --single-run=true",
    "start": "webpack-dev-server --progress --colors --config webpack.dev.config.js",
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--25">
    <p>`npm test`</p>
    <p>`npm start`</p>
    <p>`npm stop`</p>
  </div>
</div>

---

# `Pre and Post Hooks`

<div class="Split">
  <div class="Split-column Split-column--65">
<pre class="language-javascript language--clean language--small"><code>{
  "name": "myproject",
  "devDependencies": {
    "eslint": "latest"
    "karma": "latest"
  },
  "scripts": {
    "lint": "eslint --cache --ext .js --ext .jsx src",
    "test": "karma start --log-leve=error karma.config.js --single-run=true",

    "pretest": "npm run lint",
    "posttest": "echo 'Finished running tests'"
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--25">
    <p>`npm test` will run...
    <ol>
      <li>`pretest`</li>
      <li>`test`</li>
      <li>`posttest`</li>
    </ol>
    </p>
  </div>
</div>

---

# `Passing Arguments`

<div class="Split">
  <div class="Split-column Split-column--65">
<pre class="language-javascript language--clean language--small"><code>{
  "name": "myproject",
  "devDependencies": {
    "karma": "latest"
  },
  "scripts": {
    "test": "karma start --log-leve=error karma.config.js --single-run=true",
    "test-nyan": "npm run test -- --reporters nyan"
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--25">
    <p>`npm run test-nyan` will run <span class="spancode">karma start --log-leve=error karma.config.js --single-run=true --reporters nyan</span>
    </p>
  </div>
</div>

---

# `Chaining`

<div class="Split">
  <div class="Split-column Split-column--65">
<pre class="language-javascript language--clean language--small"><code>{
  "name": "myproject",
  "devDependencies": {
    "eslint": "latest",
    "sass-lint": "latest"
  },
  "scripts": {
    "lint": "npm run eslint && npm run sass-lint",
    "eslint": "eslint --cache --ext .js --ext .jsx src",
    "sass-lint": "sass-lint"
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--25">
    <p>`npm run lint` will run...
    <ol>
      <li>`eslint`</li>
      <li>`sass-lint`</li>
    </ol>
    </p>
  </div>
</div>

---

# `Pre-Commit Hooks`

<div class="Split">
  <div class="Split-column Split-column--65">
<pre class="language-javascript language--clean language--small"><code>{
  "name": "myproject",
  "devDependencies": {
    "eslint": "latest",
    "sass-lint": "latest",
    "pre-commit": "latest"
  },
  "scripts": {
    "lint": "npm run eslint && npm run sass-lint",
    "eslint": "eslint --cache --ext .js --ext .jsx src",
    "sass-lint": "sass-lint",
    "precommit": "echo 'Running pre-commit checks...' && exit 0"
  },
  "pre-commit": [ "precommit", "lint" ]
}
</code></pre>
  </div>
  <div class="Split-column Split-column--25">
    <p>`git commit -am "WIP"` will run...
    <ol>
      <li>`precommit`</li>
      <li>`lint`</li>
    </ol>
    </p>
  </div>
</div>

---

# `npm` scripts

<pre class="language-javascript language--clean language--small"><code>{
  "scripts": {
    "lint": "npm run eslint && npm run sass-lint",
    "eslint": "eslint --cache --ext .js --ext .jsx src spec",
    "sass-lint": "sass-lint",
    "test-watch": "karma start --log-leve=error karma.config.js",
    "test": "karma start --log-leve=error karma.config.js --single-run=true",
    "start": "webpack-dev-server --progress --colors --config webpack.dev.config.js",
    "build": "webpack --progress --colors --config webpack.dev.config.js",
    "dist": "npm run build -- -p --bail --optimize-minimize --optimize-dedupe",
    "precommit": "echo 'Running pre-commit checks...' && exit 0"
  },
  "pre-commit": [ "precommit", "lint" ]
}</code></pre>

---

# Resources

* [How to Use npm as a Build Tool](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)