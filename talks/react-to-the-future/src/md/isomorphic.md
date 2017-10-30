<!--
{
  "className": "Slide--title"
}
-->

# Isomorphic JavaScript / Universal JavaScript

---

# What Does that Mean Exactly?

* Don't Break the Web
* Shared Code across Client and Server
* Progressive Enhancement

---

# React Render Component To String (<=v15)

<div class="Split">
  <div class="Split-column Split-column--40">
<pre class="language-jsx language--clean language--small"><code>
import React from "react";
import {renderToString}
  from "react-dom/server";

renderToString(
  &lt;HelloWorld
    name="JavaScript" /&gt;
);
</code></pre>
  </div>
  <div class="Split-column Split-column--60">
<pre class="language-markup language--clean language--small"><code>
&lt;h1 data-reactroot=""
  data-reactid="1"
  data-react-checksum="764753906"&gt;
  &lt;!-- react-text: 2 --&gt;Hello, &lt;!-- /react-text --&gt;
  &lt;!-- react-text: 3 --&gt;JavaScript&lt;!-- /react-text --&gt;
  &lt;!-- react-text: 4 --&gt;!&lt;!-- /react-text --&gt;
&lt;/h1&gt;
</code></pre>
  </div>
</div>

---

# React Render Component To String (>=v16)

<div class="Split">
  <div class="Split-column Split-column--60">
<pre class="language-jsx language--clean language--small"><code>
import React from "react";
import {renderToString} from "react-dom/server";

renderToString(&lt;HelloWorld name="JavaScript" /&gt;);
</code></pre>
  </div>
  <div class="Split-column Split-column--40">
<pre class="language-markup language--clean language--small"><code>
&lt;h1 data-reactroot=""&gt;
  Hello, JavaScript!
&lt;/h1&gt;
</code></pre>
  </div>
</div>

---

# Backwards Compatible

<div class="Split">
  <div class="Split-column Split-column--60">
<pre class="language-jsx language--clean language--small"><code>
import { hydrate } from "react-dom";
import App from "./App";

hydrate(
  &lt;App /&gt;,
  document.getElementById("root")
);
</code></pre>
  </div>
  <div class="Split-column Split-column--40" style="text-align: left;">
<p>`render()` is deprecated and you should start using `hydrate()` instead.</p>
<p>`render()` will no longer work in React v17 to hydrate server-rendered content.</p>
  </div>
</div>

---
# Example

[React Router Mega Demo](http://react-router-mega-demo.herokuapp.com/) by [Ryan Florance](http://twitter.com/ryanflorence) with [React Router](https://github.com/rackt/react-router)

<!--

NOTES:

* http://www.smashingmagazine.com/2015/04/21/react-to-the-future-with-isomorphic-apps/
* http://blog.risingstack.com/from-angularjs-to-react-the-isomorphic-way/
* https://github.com/petehunt/react-server-rendering-example
-->
