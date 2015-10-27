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

# How Do They Relate to Angular Directives?

* Isolate Scoped (yield template inside)
* Element Restricted (doesn't inherit from parent scope)
* Transcluded Directive (an element, not an attribute)

<small>OH from Ryan Florence on a Podcast</small>

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

<!--
{
  "className": "Slide--static"
}
-->

# Overloaded setState

<div class="Split">
  <div class="Split-column Split-column--75">
    <pre data-line="6-8" class="language-jsx language--clean language--small"><code>
var HelloWorld = React.createClass({
  getInitialState() {
    return { count: 0 };
  },
  handleClick() {
    this.setState(function(state, props) {
      return { count: state.count + 1 };
    });
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
    <p>6-8. As of React v0.13 you can pass a callback function to `this.setState`. React will pass the current `state` & `props` and you return the new `state`.</p>
  </div>
</div>

---

# Déjà Vu

[![](./img/iamdeveloper-onclick.png)](https://twitter.com/iamdevloper/status/567363727176253440)

---

# [Component LifeCycle](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)

* **componentWillMount** – Fired once, before initial rendering occurs. Good place to wire-up message listeners. `this.setState` doesn't work here.
* <div class="dim">**componentDidMount** – Fired once, after initial rendering occurs. Can use `this.getDOMNode()`.</div>
* <div class="dim">**componentDidUpdate** - Fired after the component's updates are made to the DOM. Can use `this.getDOMNode()` for updates.</div>
* <div class="dim">**componentWillReceiveProps** – Fired when a component is receiving new props. You might want to `this.setState` depending on the props.</div>
* <div class="dim">**shouldComponentUpdate** - Fired before rendering when new props or state are received. `return false` if you know an update isn't needed.</div>
* <div class="dim">**componentWillUnmount** – Fired immediately before a component is unmounted from the DOM. Good place to remove message listeners or general clean up.</div>

---

# [Component LifeCycle](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)

* **componentWillMount** – Fired once, before initial rendering occurs. Good place to wire-up message listeners. `this.setState` doesn't work here.
* **componentDidMount** – Fired once, after initial rendering occurs. Can use `this.getDOMNode()`.
* <div class="dim">**componentDidUpdate** - Fired after the component's updates are made to the DOM. Can use `this.getDOMNode()` for updates.</div>
* <div class="dim">**componentWillReceiveProps** – Fired when a component is receiving new props. You might want to `this.setState` depending on the props.</div>
* <div class="dim">**shouldComponentUpdate** - Fired before rendering when new props or state are received. `return false` if you know an update isn't needed.</div>
* <div class="dim">**componentWillUnmount** – Fired immediately before a component is unmounted from the DOM. Good place to remove message listeners or general clean up.</div>

---

# [Component LifeCycle](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)

* **componentWillMount** – Fired once, before initial rendering occurs. Good place to wire-up message listeners. `this.setState` doesn't work here.
* **componentDidMount** – Fired once, after initial rendering occurs. Can use `this.getDOMNode()`.
* **componentDidUpdate** - Fired after the component's updates are made to the DOM. Can use `this.getDOMNode()` for updates.
* <div class="dim">**componentWillReceiveProps** – Fired when a component is receiving new props. You might want to `this.setState` depending on the props.</div>
* <div class="dim">**shouldComponentUpdate** - Fired before rendering when new props or state are received. `return false` if you know an update isn't needed.</div>
* <div class="dim">**componentWillUnmount** – Fired immediately before a component is unmounted from the DOM. Good place to remove message listeners or general clean up.</div>

---

# [Component LifeCycle](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)

* **componentWillMount** – Fired once, before initial rendering occurs. Good place to wire-up message listeners. `this.setState` doesn't work here.
* **componentDidMount** – Fired once, after initial rendering occurs. Can use `this.getDOMNode()`.
* **componentDidUpdate** - Fired after the component's updates are made to the DOM. Can use `this.getDOMNode()` for updates.
* **componentWillReceiveProps** – Fired when a component is receiving new props. You might want to `this.setState` depending on the props.
* <div class="dim">**shouldComponentUpdate** - Fired before rendering when new props or state are received. `return false` if you know an update isn't needed.</div>
* <div class="dim">**componentWillUnmount** – Fired immediately before a component is unmounted from the DOM. Good place to remove message listeners or general clean up.</div>

---

# [Component LifeCycle](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)

* **componentWillMount** – Fired once, before initial rendering occurs. Good place to wire-up message listeners. `this.setState` doesn't work here.
* **componentDidMount** – Fired once, after initial rendering occurs. Can use `this.getDOMNode()`.
* **componentDidUpdate** - Fired after the component's updates are made to the DOM. Can use `this.getDOMNode()` for updates.
* **componentWillReceiveProps** – Fired when a component is receiving new props. You might want to `this.setState` depending on the props.
* **shouldComponentUpdate** - Fired before rendering when new props or state are received. `return false` if you know an update isn't needed.
* <div class="dim">**componentWillUnmount** – Fired immediately before a component is unmounted from the DOM. Good place to remove message listeners or general clean up.</div>

---

# [Component LifeCycle](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)

* **componentWillMount** – Fired once, before initial rendering occurs. Good place to wire-up message listeners. `this.setState` doesn't work here.
* **componentDidMount** – Fired once, after initial rendering occurs. Can use `this.getDOMNode()`.
* **componentDidUpdate** - Fired after the component's updates are made to the DOM. Can use `this.getDOMNode()` for updates.
* **componentWillReceiveProps** – Fired when a component is receiving new props. You might want to `this.setState` depending on the props.
* **shouldComponentUpdate** - Fired before rendering when new props or state are received. `return false` if you know an update isn't needed.
* **componentWillUnmount** – Fired immediately before a component is unmounted from the DOM. Good place to remove message listeners or general clean up.

---

# References

<div class="Split">
  <div class="Split-column Split-column--75">
    <pre class="language-jsx language--clean language--small"><code>
var HelloWorld = React.createClass({
  getInitialState() { return { count: 0 }; },
  componentDidMount() {
    this.refs.count.getDOMNode().textContent = '42';
  },
  handleClick() { this.setState({count: ++this.state.count}) },
  render: function() {
    return &lt;div&gt;
      &lt;p&gt;Hello &lt;span ref="count"&gt;{this.state.count}&lt;/span&gt;!&lt;/p&gt;
      &lt;button onClick={this.handleClick}&gt;Click Me&lt;/button&gt;
    &lt;/div&gt;;
  }
});</code></pre>
  </div>
  <div class="Split-column">
    <iframe height='268' scrolling='no' src='//codepen.io/elijahmanor/embed/waWOQy/?height=268&theme-id=0&default-tab=result' data-online='//codepen.io/elijahmanor/embed/waWOQy/?height=268&theme-id=0&default-tab=result' data-offline='./pens/codepen_waWOQy/index.html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/waWOQy/'>waWOQy</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
    </iframe>
  </div>
</div>

---

# References

<div class="Split">
  <div class="Split-column Split-column--75">
    <pre data-line="4,9" class="language-jsx language--clean language--small"><code>
var HelloWorld = React.createClass({
  getInitialState() { return { count: 0 }; },
  componentDidMount() {
    this.refs.count.getDOMNode().textContent = '42';
  },
  handleClick() { this.setState({count: ++this.state.count}) },
  render: function() {
    return &lt;div&gt;
      &lt;p&gt;Hello &lt;span ref="count"&gt;{this.state.count}&lt;/span&gt;!&lt;/p&gt;
      &lt;button onClick={this.handleClick}&gt;Click Me&lt;/button&gt;
    &lt;/div&gt;;
  }
});</code></pre>
  </div>
  <div class="Split-column">
    <p>9. Add `ref` attributes in the JSX.</p>
    <p>4. You have access to the DOM in the `componentDidMount` life-cycle method. Call `getDOMNode()` to get the raw DOM node.</p>
  </div>
</div>

---

<!--
{
  "className": "Slide--static"
}
-->

# Dealing with Lists

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre class="language-jsx language--clean language--small"><code>
var speakers = ['Scott Hanselman', 'John Papa', 'Scott Guthrie', 'Michele Bustamante', 'Dan Wahlin', 'Debora Kurata', 'Zoiner Tejada', 'Scott Allen', 'Elijah Manor', 'Ward Bell', 'Todd Anglin', 'Saron Yitbare', 'Scott Hunter'];

var HelloWorld = React.createClass({
  getInitialState() { return this.props; },
  render: function() {
    return (
      &lt;div&gt;
        &lt;ul&gt;
          {this.state.names.map(function(name) {
            return &lt;li&gt;{name}&lt;/li&gt;;
          })}
        &lt;/ul&gt;
        &lt;button onClick={this.handleSort}&gt;Sort&lt;/button&gt;
        &lt;button onClick={this.handleScott}&gt;Scott&lt;/button&gt;
      &lt;/div&gt;
    );
  },
  handleSort() {
    this.setState({ names: this.state.names.sort() });
  },
  handleScott() {
    var scotts = this.state.names.filter(function(name) {
      return name.indexOf('Scott') > -1;
    });
    this.setState({ names: scotts });
  }
});

React.render(
  &lt;HelloWorld names={speakers} /&gt;,
  document.body
);</code></pre>
  </div>
  <div class="Split-column Split-column--25">
    <iframe height='468' scrolling='no' src='//codepen.io/elijahmanor/embed/RPRdmg/?height=468&theme-id=0&default-tab=result' data-online='//codepen.io/elijahmanor/embed/RPRdmg/?height=468&theme-id=0&default-tab=result' data-offline='./pens/codepen_RPRdmg/index.html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/RPRdmg/'>RPRdmg</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
    </iframe>
  </div>
</div>

---

# It's Just JavaScript

[![](./img/ryanflorence-javascript.png)](https://twitter.com/ryanflorence/status/577685415919898625)

---

<!--
{
  "className": "Slide--static"
}
-->

# React v0.13.0 Supports ES6 Classes

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre class="language-jsx language--clean language--small"><code>
class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialCount };
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return &lt;div&gt;
      &lt;p&gt;Hello {this.props.name}: {this.state.count}!&lt;/p&gt;
      &lt;button onClick={this.handleClick.bind(this)}&gt;
        Click Me
      &lt;/button&gt;
    &lt;/div&gt;;
  }
}

HelloWorld.propTypes = {
  name: React.PropTypes.string.isRequired,
  initialCount: React.PropTypes.number
};
HelloWorld.defaultProps = {
  name: "JavaScript",
  initialCount: 0
};

React.render(&lt;HelloWorld /&gt;, document.body);</code></pre>
  </div>
  <div class="Split-column Split-column--25">
    <iframe height='268' scrolling='no' src='//codepen.io/elijahmanor/embed/KpMYMY/?height=268&theme-id=0&default-tab=result' data-online='//codepen.io/elijahmanor/embed/KpMYMY/?height=268&theme-id=0&default-tab=result' data-offline='./pens/codepen_KpMYMY/index.html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/KpMYMY/'>KpMYMY</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
    </iframe>
  </div>
</div>

---

<!--
{
  "className": "Slide--static"
}
-->

# React Class Differences

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre data-line="1,2-5" class="language-jsx language--clean language--small"><code>
class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialCount };
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return &lt;div&gt;
      &lt;p&gt;Hello {this.props.name}: {this.state.count}!&lt;/p&gt;
      &lt;button onClick={this.handleClick.bind(this)}&gt;
        Click Me
      &lt;/button&gt;
    &lt;/div&gt;;
  }
}

HelloWorld.propTypes = {
  name: React.PropTypes.string.isRequired,
  initialCount: React.PropTypes.number
};
HelloWorld.defaultProps = {
  name: "JavaScript",
  initialCount: 0
};

React.render(&lt;HelloWorld /&gt;, document.body);</code></pre>
  </div>
  <div class="Split-column Split-column--25">
    <p>12. Use `class` instead of `React.createClass` to define a component</p>
    <p>2-5. Use the `constructor` to set the initial state instead of `getInitialState`</p>
  </div>
</div>

---

<!--
{
  "className": "Slide--static"
}
-->

# React Class Differences

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre data-line="12,19-22,23-26" class="language-jsx language--clean language--small"><code>
class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialCount };
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return &lt;div&gt;
      &lt;p&gt;Hello {this.props.name}: {this.state.count}!&lt;/p&gt;
      &lt;button onClick={this.handleClick.bind(this)}&gt;
        Click Me
      &lt;/button&gt;
    &lt;/div&gt;;
  }
}

HelloWorld.propTypes = {
  name: React.PropTypes.string.isRequired,
  initialCount: React.PropTypes.number
};
HelloWorld.defaultProps = {
  name: "JavaScript",
  initialCount: 0
};

React.render(&lt;HelloWorld /&gt;, document.body);</code></pre>
  </div>
  <div class="Split-column Split-column--25">
    <p>12. You must bind Event Handlers to `this`</p>
    <p>19-22. `propTypes` are defined off of the Constructor</p>
    <p>23-26. `defaultProps` are defined off the Constructor</p>
  </div>
</div>

---

# More ES6

Feel free to use ES6 & ES7 in your JSX files.

Go ahead and use Babel to convert the rest of your files.

* [Learn More about ES6](http://babeljs.io/docs/learn-es6/)
* [Try Out Babel Online](http://babeljs.io/)

---

<!--
{
  "className": "Slide--static"
}
-->

# Mixins

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre data-line="1,12,14" class="language-jsx language--clean language--small"><code>
var SetIntervalMixin = {
  componentWillMount: function() { this.set = []; },
  setInterval: function() {
    this.set.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.set.forEach(clearInterval);
  }
};

var TickTock = React.createClass({
  mixins: [SetIntervalMixin],
  componentDidMount: function() {
    this.setInterval(this.tick, 1000);
  },
  tick: function() {
    this.setState({seconds: this.state.seconds + 1});
  },
  render: function() {
    return &lt;p&gt;
      Running for {this.state.seconds} seconds.
    &lt;/p&gt;;
  }
});

ReactDOM.render(&lt;TickTock /&gt;,
  document.getElementById('example'));</code></pre>
  </div>
  <div class="Split-column Split-column--25">
    <p>1. Define the `SetIntervalMixin` Mixin</p>
    <p>12. Reference `SetIntervalMixin` in the `mixins` array</p>
    <p>14. Call `setInterval` from the mixin</p>
  </div>
</div>

---

# Mixins in ES6 Classes

In order to use mixins you must use `React.createClass`.

The ES6 `class` syntax doesn't support Mixins.

However, you can use ES7 decorators instead.

* [ES7 and Beyond](https://speakerdeck.com/jfairbank/html5devconf-es7-and-beyond) slides by Jeremy Fairbank ([@elpapapollo](https://twitter.com/elpapapollo))

---

<!--
{
  "className": "Slide--static"
}
-->

# ES7 Decorators

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre data-line="1,11-12,16,23" class="language-jsx language--clean language--small"><code>
let setIntervalDecorator = (ComposedComponent) =>
  class extends React.Component {
  componentWillMount() { this.set = []; }
  setInterval() {
    this.set.push(setInterval.apply(null, arguments));
  }
  componentWillUnmount() {
    this.set.forEach(clearInterval);
  }
  render() {
    return &lt;ComposedComponent {...this.props}
      onSetInterval={::this.setInterval} /&gt;;
  }
};

@setIntervalDecorator
class TickTock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }
  componentDidMount() {
    this.props.onSetInterval(::this.tick, 1000);
  }
  tick() {
    this.setState({seconds: this.state.seconds + 1});
  }
  render() {
    return &lt;p&gt;
      Running for {this.state.seconds} seconds.
    &lt;/p&gt;;
  }
}

ReactDOM.render(&lt;TickTock /&gt;,
  document.getElementById('example'));</code></pre>
  </div>
  <div class="Split-column Split-column--25">
    <p>1. Define the `setIntervalDecorator` Decorator</p>
    <p>11-12. Wrap the Component with a decorated version</p>
    <p>16. Decorate your class with `setIntervalDecorator`</p>
    <p>23. Invoke method passed in by decorated Component</p>
  </div>
</div>

<!-- # Use PureRenderMixin -->
