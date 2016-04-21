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

<br />
<pre class="language-jsx language--clean"><code>
React.renderComponentToString(&lt;HelloWorld name="JavaScript" /&gt;);</code></pre>
<br />
<pre class="language-markup language--clean"><code>
&lt;div data-reactid=".1" data-react-checksum="582455604"&gt;
  &lt;span data-reactid=".1.0"&gt;Hello &lt;/span&gt;
  &lt;span data-reactid=".1.1"&gt;JavaScript&lt;/span&gt;
  &lt;span data-reactid=".1.2"&gt;!&lt;/span&gt;
&lt;/div&gt;</code></pre>

---

# Example

[React Router Mega Demo](http://react-router-mega-demo.herokuapp.com/) by [Ryan Florance](http://twitter.com/ryanflorence) with [React Router](https://github.com/rackt/react-router)

<!--

NOTES:

* http://www.smashingmagazine.com/2015/04/21/react-to-the-future-with-isomorphic-apps/
* http://blog.risingstack.com/from-angularjs-to-react-the-isomorphic-way/
* https://github.com/petehunt/react-server-rendering-example
-->
