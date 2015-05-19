<!--
{
  "className": "Slide--title"
}
-->

# Gotchas

---

# Return a Tree

<div class="Split">
  <div class="Split-column">
    <p>Update code samples</p>
    <pre class="language-javascript language--clean"><code>
return (
  &lt;div&gt;Test&lt;/div&gt;
  &lt;div&gt;Test 2&lt;/div&gt;
);</code></pre>
  </div>
  <div class="Split-column">
    <p>It has to be</p>
    <pre class="language-javascript language--clean"><code>
return (
  &lt;div&gt;
    &lt;div>Test&lt;/div&gt;
    &lt;div>Test 2&lt;/div&gt;
  &lt;/div&gt;
);</code></pre>
  </div>
</div>

---

# Attribute Names

className

---

# Passing Arguments to Event Handlers

UPDATE

```
    <a href="http://google.com" onClick={this.handleClick.bind(null, 'Google')}>Google</a>
handleClick: function(linkName, e) {
  e.preventDefault();
}
```

---

# Adding Comments

<div class="Split">
  <div class="Split-column">
    <pre data-line="2-3,9" class="language-jsx language--clean language--small"><code>
var HelloWorld = React.createClass({
  // Single-line comment
  /\* Multi-line comment \*/
  getDefaultProps: function () {
    return { name: "JavaScript" };
  }
  render: function() {
    return &lt;div&gt;
      {/\* JS Expression multi-line \*/}
      &lt;p&gt;Hello {this.props.name}!&lt;/p&gt;
    &lt;/div&gt;;
  }
});</code></pre>
  </div>
  <div class="Split-column">
    <p>2-3. Within the JavaScript you can write comments using normal single-line or multi-line syntax.</p>
    <p>9. Within JSX you can use multi-line comment syntax inside a JavaScript expression.</p>
  </div>
</div>
