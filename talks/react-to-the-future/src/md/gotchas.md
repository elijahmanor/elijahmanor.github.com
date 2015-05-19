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
