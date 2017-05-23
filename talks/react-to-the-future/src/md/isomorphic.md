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

# React Render Component To String

<pre class="language-jsx language--clean language--small"><code>
import React from 'react';
import { renderToString } from 'react-dom/server';

renderToString(&lt;HelloWorld name="JavaScript" /&gt;);
</code></pre>
<br />
<pre class="language-markup language--clean language--small"><code>
&lt;h1 data-reactroot="" data-reactid="1" data-react-checksum="764753906"&gt;
  &lt;!-- react-text: 2 --&gt;Hello, &lt;!-- /react-text --&gt;
  &lt;!-- react-text: 3 --&gt;JavaScript&lt;!-- /react-text --&gt;
  &lt;!-- react-text: 4 --&gt;!&lt;!-- /react-text --&gt;
&lt;/h1&gt;
</code></pre>

---

# Example

[React Router Mega Demo](http://react-router-mega-demo.herokuapp.com/) by [Ryan Florance](http://twitter.com/ryanflorence) with [React Router](https://github.com/rackt/react-router)

<!--

NOTES:

* http://www.smashingmagazine.com/2015/04/21/react-to-the-future-with-isomorphic-apps/
* http://blog.risingstack.com/from-angularjs-to-react-the-isomorphic-way/
* https://github.com/petehunt/react-server-rendering-example
-->
