<!--
{
  "className": "Slide--title"
}
-->

# Gotchas

---

# JSX Tree from Render

<div class="Split">
  <div class="Split-column">
    <p>Bad</p>
    <pre class="language-jsx language--clean"><code>
return (
  &lt;div&gt;Test 1&lt;/div&gt;
  &lt;div&gt;Test 2&lt;/div&gt;
);</code></pre>
  </div>
  <div class="Split-column">
    <p>Good</p>
    <pre class="language-jsx language--clean"><code>
return (
  &lt;div&gt;
    &lt;div>Test 1&lt;/div&gt;
    &lt;div>Test 2&lt;/div&gt;
  &lt;/div&gt;
);</code></pre>
  </div>
</div>

---

# JSX Tree from Render

<div class="Split">
  <div class="Split-column Split-column--35">
    <p>JSX</p>
    <pre class="language-jsx language--clean language--small"><code>
return (
  &lt;div&gt;
    &lt;div>Test 1&lt;/div&gt;
    &lt;div>Test 2&lt;/div&gt;
  &lt;/div&gt;
);</code></pre>
  </div>
  <div class="Split-column Split-column--65">
    <p>JavaScript</p>
    <pre class="language-javascript language--clean language--small"><code>
return (
  React.createElement("div", null,
    React.createElement("div", null, "Test 1"),
    React.createElement("div", null, "Test 2")
  )
);
</code></pre>
  </div>
</div>

---

# Attribute Names

<div class="Split">
  <div class="Split-column">
    <p>HTML</p>
    <pre class="language-markup language--clean language--small"><code>
&lt;div class="Media"&gt;
  &lt;img class="Media-figure" src="/react.jpg"&gt;
  &lt;div class="Media-body"&gt;
    &lt;h3 class="Media-title"&gt;React&lt;/h3&gt;
    &lt;p&gt;Lorem Ipsum&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
  </div>
  <div class="Split-column">
    <p>JSX</p>
    <pre class="language-jsx language--clean language--small"><code>
return (
  &lt;div className="Media"&gt;
    &lt;img className="Media-figure" src="/react.jpg"&gt;
    &lt;div className="Media-body"&gt;
      &lt;h3 className="Media-title"&gt;React&lt;/h3&gt;
      &lt;p&gt;Lorem Ipsum&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
);
</code></pre>
  </div>
</div>

---

# Passing Arguments to Event Handlers

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre class="language-jsx language--clean language--small"><code>
var speakers = ['Scott Hanselman', 'John Papa', 'Scott Guthrie', 'Michele Bustamante', 'Dan Wahlin', 'Debora Kurata', 'Zoiner Tejada', 'Scott Allen', 'Elijah Manor', 'Ward Bell', 'Todd Anglin', 'Saron Yitbare', 'Scott Hunter'];

var HelloWorld = React.createClass({
  handleClick(name, e) { alert(name); },
  render: function() {
    return &lt;ul&gt;
      {this.props.names.map(name =&gt;
        &lt;li onClick={this.handleClick.bind(this, name)}&gt;
          {name}
        &lt;/li&gt;
      )}
    &lt;/ul&gt;;
  }
});</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <iframe height='377' scrolling='no' src='//codepen.io/elijahmanor/embed/doXLQd/?height=377&theme-id=0&default-tab=result' data-online='//codepen.io/elijahmanor/embed/doXLQd/?height=377&theme-id=0&default-tab=result' data-offline='./pens/codepen_doXLQd/index.html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/doXLQd/'>doXLQd</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
    </iframe>
  </div>
</div>

---

# Adding Comments

<div class="Split">
  <div class="Split-column Split-column--60">
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
  <div class="Split-column Split-column--40">
    <p>2-3. Within the JavaScript you can write comments using normal single-line or multi-line syntax.</p>
    <p>9. Within JSX you can use multi-line comment syntax inside a JavaScript expression.</p>
  </div>
</div>
