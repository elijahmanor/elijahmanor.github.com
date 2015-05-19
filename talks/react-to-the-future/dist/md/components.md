<!--
{
  "className": "Slide--title"
}
-->

# Components

---

# State Machines

> ## Components are Just State Machines

> React thinks of UIs as simple state machines. By thinking of a UI as being in various states and rendering those states, it's easy to keep your UI consistent.

> In React, you simply update a component's state, and then render a new UI based on this new state. React takes care of updating the DOM for you in the most efficient way. --[Interactivity and Dynamic UIs](https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html#components-are-just-state-machines)

---

# Okay, Okay

> "Talk is cheap. Show me the code." --[Linus Torvalds](http://en.wikiquote.org/wiki/Linus_Torvalds#2000-04)

---

# Hello World Component

<div class="Split">
  <div class="Split-column">
    <pre class="language-jsx language--clean language--small"><code>
var HelloWorld = React.createClass({
  render: function() {
    return (
      &lt;div&gt;
        Hello World!
      &lt;/div&gt;
    )
  }
});

React.render(&lt;HelloWorld /&gt;, document.body);</code></pre>
  </div>
  <div class="Split-column">
    <iframe height='268' scrolling='no' src='//codepen.io/elijahmanor/embed/MweXEv/?height=268&theme-id=0&default-tab=result' data-online='//codepen.io/elijahmanor/embed/MweXEv/?height=268&theme-id=0&default-tab=result' data-offline='./pens/codepen_MweXEv/index.html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/MweXEv/'>MweXEv</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
    </iframe>
  </div>
</div>

---

# React.createClass

<div class="Split">
  <div class="Split-column Split-column--75">
    <pre data-line="1" class="language-jsx language--clean language--small"><code>
var HelloWorld = React.createClass({
  render: function() {
    return (
      &lt;div&gt;
        Hello World!
      &lt;/div&gt;
    )
  }
});

React.render(&lt;HelloWorld /&gt;, document.body);</code></pre>
  </div>
  <div class="Split-column">
    <p>1. <code>React.createClass</code> is how you define a component in React.</p>
  </div>
</div>

---

# Component's Render Method

<div class="Split">
  <div class="Split-column Split-column--75">
    <pre data-line="2,3-7" class="language-jsx language--clean language--small"><code>
var HelloWorld = React.createClass({
  render: function() {
    return (
      &lt;div&gt;
        Hello World!
      &lt;/div&gt;
    );
  }
});

React.render(&lt;HelloWorld /&gt;, document.body);</code></pre>
  </div>
  <div class="Split-column">
    <p>2. The <code>render</code> method is required. You can think of this as your template.</p>
    <p>3-7. It returns a tree of React components that will eventually render to HTML.</p>
  </div>
</div>

---

# React's Render Method

<div class="Split">
  <div class="Split-column Split-column--75">
    <pre data-line="11" class="language-jsx language--clean language--small"><code>
var HelloWorld = React.createClass({
  render: function() {
    return (
      &lt;div&gt;
        Hello World!
      &lt;/div&gt;
    );
  }
});

React.render(&lt;HelloWorld /&gt;, document.body);</code></pre>
  </div>
  <div class="Split-column">
    <p>11. <code>React.render</code> creates the component, starts the framework, and injects HTML into a DOM node.</p>
  </div>
</div>

---

# Markup in my JavaScript... WHAT!?!

[![](./img/iamdeveloper-jsx.png)](https://twitter.com/iamdevloper/status/598435575662813184)

---

# But Seriously

> React component is "...a highly cohesive building block for UIs loosely coupled with other components." --[Pete Hunt](http://www.slideshare.net/floydophone/react-preso-v2)

* Templates separate technologies, not concerns
* Allows you to focus on building components, not templates
* Combining Markup and JavaScript reduces context switching

---

# JSX Compiles Down to JavaScript

```
var HelloWorld = React.createClass({
  displayName: "HelloWorld",
  render: function() {
    return (
      React.createElement("div", null,"Hello World!")
    );
  }
});

React.render(React.createElement(HelloWorld, null), document.body);
```

---

# Let's Get Dynamic

<!-- getDefaultProps - Allows you to set default props for your component. -->

<div class="Split">
  <div class="Split-column">
    <pre class="language-jsx language--clean language--small"><code>
var HelloWorld = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      &lt;div&gt;Hello {this.props.name}!&lt;/div&gt;
    );
  }
});

React.render(
  &lt;HelloWorld name="JavaScript" /&gt;,
  document.getElementById('widget')
);</code></pre>
  </div>
  <div class="Split-column">
    <iframe height='268' scrolling='no' src='//codepen.io/elijahmanor/embed/xGOmXg/?height=268&theme-id=0&default-tab=result' data-online='//codepen.io/elijahmanor/embed/xGOmXg/?height=268&theme-id=0&default-tab=result' data-offline='./pens/codepen_xGOmXg/index.html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/xGOmXg/'>xGOmXg</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
    </iframe>
  </div>
</div>

---

# Props

<div class="Split">
  <div class="Split-column Split-column--75">
    <pre data-line="7,13" class="language-jsx language--clean language--small"><code>
var HelloWorld = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      &lt;div&gt;Hello {this.props.name}!&lt;/div&gt;
    );
  }
});

React.render(
  &lt;HelloWorld name="JavaScript" /&gt;,
  document.getElementById('widget')
);</code></pre>
  </div>
  <div class="Split-column">
    <p>13. You can pass read-only properties to a React component via its attributes.</p>
    <p>7. You can access this data with the `this.props` object inside of a JavaScript Expression `{}`.</p>
  </div>
</div>

---

# Prop Types

<div class="Split">
  <div class="Split-column Split-column--75">
    <pre data-line="2-4" class="language-jsx language--clean language--small"><code>
var HelloWorld = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      &lt;div&gt;Hello {this.props.name}!&lt;/div&gt;
    );
  }
});

React.render(
  &lt;HelloWorld name="JavaScript" /&gt;,
  document.getElementById('widget')
);</code></pre>
  </div>
  <div class="Split-column">
    <p>2-4. Check the types of the `props` during development with `propTypes`.</p>
    <pre class="language-jsx language--clean language--small"><code>
array, bool, func, number, object,
string, node, element, any,
instanceOf(Message),
oneOf(['News', 'Photos']),
oneOfType([]), arrayOf(number),
objectOf(number), shape({}),
customProp: function(props, name, _) {}</code></pre>
  </div>
</div>

---

# Let's Look at State

<div class="Split">
  <div class="Split-column Split-column--75">
    <pre class="language-jsx language--clean language--small"><code>
var HelloWorld = React.createClass({
  getInitialState() {
    return { count: 0 };
  },
  handleClick() {
    this.setState({ count: ++this.state.count });
  },
  render: function() {
    return &lt;div&gt;
      &lt;p&gt;Hello {this.state.count}!&lt;/p&gt;
      &lt;button onClick={this.handleClick}&gt;Click Me&lt;/button&gt;
    &lt;/div&gt;;
  }
});</code></pre>
  </div>
  <div class="Split-column">
    <iframe height='268' scrolling='no' src='//codepen.io/elijahmanor/embed/aOZXQa/?height=268&theme-id=0&default-tab=result' data-online='//codepen.io/elijahmanor/embed/aOZXQa/?height=268&theme-id=0&default-tab=result' data-offline='./pens/codepen_aOZXQa/index.html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/aOZXQa/'>aOZXQa</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
    </iframe>
  </div>
</div>

---

# Default State and Expression

<div class="Split">
  <div class="Split-column Split-column--75">
    <pre data-line="2-4,10" class="language-jsx language--clean language--small"><code>
var HelloWorld = React.createClass({
  getInitialState() {
    return { count: 0 };
  },
  handleClick() {
    this.setState({ count: ++this.state.count });
  },
  render: function() {
    return &lt;div&gt;
      &lt;p&gt;Hello {this.state.count}!&lt;/p&gt;
      &lt;button onClick={this.handleClick}&gt;Click Me&lt;/button&gt;
    &lt;/div&gt;;
  }
});</code></pre>
  </div>
  <div class="Split-column">
    <p>2-4. Provide default `state` by returning object from `getInitialState`.</p>
    <p>10. Access component state via the `this.state` object.</p>
  </div>
</div>

---

# Updating State

<div class="Split">
  <div class="Split-column Split-column--75">
    <pre data-line="5-7,11" class="language-jsx language--clean language--small"><code>
var HelloWorld = React.createClass({
  getInitialState() {
    return { count: 0 };
  },
  handleClick() {
    this.setState({ count: ++this.state.count });
  },
  render: function() {
    return &lt;div&gt;
      &lt;p&gt;Hello {this.state.count}!&lt;/p&gt;
      &lt;button onClick={this.handleClick}&gt;Click Me&lt;/button&gt;
    &lt;/div&gt;;
  }
});</code></pre>
  </div>
  <div class="Split-column">
    <p>11. Declaratively wire-up _delegated_ Event Handlers via attributes.</p>
    <p>5-7. Update the state by calling `this.setState` passing in the difference.</p>
  </div>
</div>

---

# Déjà Vu

[![](./img/iamdeveloper-onclick.png)](https://twitter.com/iamdevloper/status/567363727176253440)

---

Component LifeCycle
componentWillMount – Fired before the component will mount
componentDidMount – Fired after the component mounted
componentWillReceiveProps – Fired whenever there is a change to props
componentWillUnmount – Fired before the component will unmount

refs

---


---

# It's Just JavaScript

[![](./img/ryanflorence-javascript.png)](https://twitter.com/ryanflorence/status/577685415919898625)

---

# Using ES6 in React

React v0.13.0 supports creating components using JavaScript classes

JSX transformer can transpile ES6 to ES5

---

# ES6 Example

<!-- TODO: Don't use this example... -->
```
import React from 'react';

class ChoiceRow extends React.Component {

}

export default ChoiceRow;
```

---

# More ES6

<!-- TODO: Don't use this example...
```
// `let` keyword
let choices = this.props.choices;

// arrow and map function
let children = choices.map(c => (<Choice item={c} />));

return <div className="row">
         {children}
       </div>
```

---

# Babel

---

# Mixins

---


# Mixins

Must use `React.createClass`. Unfortuneately the ES6 `class` syntax doesn't support Mixins as of yet.

<!--

# Angular Directive

* Isolate Scoped (yield template inside)
* Element Restricted (doesn't inherit from parent scope)
* Transcluded Directive (an element, not an attribute)

components are
reusable
composable
testable
-->
