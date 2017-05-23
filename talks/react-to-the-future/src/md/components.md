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

<div class="Split">
	<div class="Split-column Split-column--65">
		<pre class="language-javascript language--clean language--small"><code>
var module = angular.module('directiveModule');
module.directive('fakeReactComponent', function () {
	return {
		restrict: 'E',    // Element Restricted
		scope: {},        // Isolate Scope
		transclude: true, // Transcluded
		template: '&lt;div class="ReactComponent"&gt;' +
			'&lt;ng-transclude&gt;&lt;/ng-transclude&gt;' +
		'&lt;/div&gt;'
	};
});</code></pre>
	</div>
  <div class="Split-column Split-column--35">
		<pre class="language-markup language--clean language--small"><code>
&lt;fake-react-component&gt;
Hello World!
&lt;/fake-react-component&gt;</code></pre>
		<ul>
			<li>Element Restricted (element, not attribute)</li>
			<li>Isolate Scoped<br/> (no inherit parent scope)</li>
			<li>Transcluded Directive (yield template inside)</li>
		</ul>
	</div>
</div>

---

# Okay, Okay

<div class="Split">
  <div class="Split-column Split-column--50">
    <blockquote>
      <p>"Talk is cheap. Show me the code."</p>
      --<a href="http://en.wikiquote.org/wiki/Linus_Torvalds#2000-04">Linus Torvalds</a>
    </blockquote>
  </div>
  <div class="Split-column Split-column--50">
![](../img/show-me-the-code-now.gif)
  </div>
</div>

---

# Hello World Component

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre class="language-jsx language--clean language--small"><code>
function HelloWorld() {
  return &lt;h1&gt;Hello, world!&lt;/h1&gt;;
}

ReactDOM.render(
  &lt;HelloWorld /&gt;,
  document.getElementById('root')
);
</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <iframe height='268' scrolling='no' src='//codepen.io/elijahmanor/embed/mmQooQ/?height=268&theme-id=0&default-tab=result' data-online='//codepen.io/elijahmanor/embed/mmQooQ/?height=268&theme-id=0&default-tab=result' data-offline='./pens/codepen_MweXEv/index.html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/MweXEv/'>MweXEv</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
    </iframe>
  </div>
</div>

---

# Hello World Component

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre data-line="1-3,5-8" class="language-jsx language--clean language--small"><code>
function HelloWorld() {
  return &lt;h1&gt;Hello, world!&lt;/h1&gt;;
}

ReactDOM.render(
  &lt;HelloWorld /&gt;,
  document.getElementById('root')
);
</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <p>1-3. <code>HelloWorld</code> component is just a function!</p>
    <p>5-8. <code>ReactDOM.render</code> creates the component, starts the framework, and injects HTML into a DOM node.</p>
  </div>
</div>

---

# Hello World Component

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre data-line="1" class="language-jsx language--clean language--small"><code>
const HelloWorld = () => &lt;h1&gt;Hello, world!&lt;/h1&gt;;

ReactDOM.render(
  &lt;HelloWorld /&gt;,
  document.getElementById('root')
);
</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <p>1. You can even use ECMAScript 2015 (ES6) arrow functions!</p>
  </div>
</div>

---

# Class Syntax

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre data-line="1,2" class="language-jsx language--clean language--small"><code>
class HelloWorld extends React.Component {
  render() {
    return (
      &lt;div&gt;Hello World!&lt;/div&gt;
    );
  }
}

ReactDOM.render(
  &lt;HelloWorld /&gt;,
  document.getElementById('root')
);
</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <p>1. Can use the ECMAScript 2015 (ES6) <code>class</code> and extend <code>React.Component</code></p>
    <p>2. The <code>render</code> method is required. You can think of this as your template.</p>
  </div>
</div>

---

# Legacy Syntax

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre class="language-jsx language--clean language--small"><code>
const HelloWorld = React.createClass({
  render: function() {
    return (
      &lt;div&gt;Hello World!&lt;/div&gt;
    )
  }
});

ReactDOM.render(
  &lt;HelloWorld /&gt;,
  document.getElementById('root')
);</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <p>1. <code>React.createClass</code> is how we defined a component in React v15.4 and below.</p>
  </div>
</div>

---

# Migrate Legacy Components

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre data-line="1,3" class="language-jsx language--clean language--small"><code>
import createReactClass from 'create-react-class';

const HelloWorld = createReactClass({
  return (
    &lt;div&gt;Hello World!&lt;/div&gt;
  )
});

ReactDOM.render(
  &lt;HelloWorld /&gt;,
  document.getElementById('root')
);</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <p>1,3. After React v15.5+ you can migrate <code>React.createClass</code> to <code>createReactClass</code></p>
    <p>You can use <a href="https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html#migrating-from-react.createclass"><code>jscodeshift</code></a> to migrate your legacy components.</p>
  </div>
</div>

---

# Markup in my JavaScript... WHAT!?!

<div class="Split">
  <div class="Split-column Split-column--50">
    [![](./img/iamdeveloper-jsx.png)](https://twitter.com/iamdevloper/status/598435575662813184)
  </div>
  <div class="Split-column Split-column--50">
    <img src="./img/oh-no-yes.gif" style="min-width: 100%;" />
  </div>
</div>

---

# But Seriously

<div class="Split">
  <div class="Split-column Split-column--55">
    <blockquote>
      React component is "...a highly cohesive building block for UIs loosely coupled with other components."
      --<a href="http://www.slideshare.net/floydophone/react-preso-v2">Pete Hunt</a>
    </blockquote>
  </div>
  <div class="Split-column Split-column--45">
    <ul>
    <li>Templates separate technologies, not concerns</li>
    <li>Allows you to focus on building components, not templates</li>
    <li>Combining Markup and JavaScript reduces context switching</li>
  </div>
</div>

---

<!--
{
  "className": "Slide--static"
}
-->

# JSX Compiles Down to JavaScript

<pre class="language-jsx language--clean language--small"><code>
'use strict';

var HelloWorld = function HelloWorld() {
  return React.createElement(
    'h1',
    null,
    'Hello, world!'
  );
};

ReactDOM.render(
  React.createElement(HelloWorld, null),  
  document.getElementById('root')
);
</code></pre>

---

# Let's Get Dynamic

<!-- getDefaultProps - Allows you to set default props for your component. -->

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre class="language-jsx language--clean language--small"><code>
const HelloWorld = (props) => {
  return &lt;div&gt;Hello {props.name}!&lt;/div&gt;;
};
HelloWorld.propTypes = {
  name: PropTypes.string.isRequired
};

ReactDOM.render(
  &lt;HelloWorld name="JavaScript" /&gt;,
  document.getElementById('root')
);
</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <iframe height='268' scrolling='no' src='//codepen.io/elijahmanor/embed/xGOmXg/?height=268&theme-id=0&default-tab=result' data-online='//codepen.io/elijahmanor/embed/xGOmXg/?height=268&theme-id=0&default-tab=result' data-offline='./pens/codepen_xGOmXg/index.html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/xGOmXg/'>xGOmXg</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
    </iframe>
  </div>
</div>

---

# Using the Props Parameter

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre data-line="1-3,9" class="language-jsx language--clean language--small"><code>
const HelloWorld = (props) => {
  return &lt;div&gt;Hello {props.name}!&lt;/div&gt;;
};
HelloWorld.propTypes = {
  name: PropTypes.string.isRequired
};

ReactDOM.render(
  &lt;HelloWorld name="JavaScript" /&gt;,
  document.getElementById('root')
);
</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <p>9. You can pass read-only properties to a React component via its attributes.</p>
    <p>1-3. You can access this data with the `props` parameter inside of a JavaScript Expression `{}`.</p>
  </div>
</div>

---

# Using Props with Destructuring

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre data-line="1-3" class="language-jsx language--clean language--small"><code>
const HelloWorld = ({ name }) => {
  return &lt;div&gt;Hello {name}!&lt;/div&gt;;
};
HelloWorld.propTypes = {
  name: PropTypes.string.isRequired
};

ReactDOM.render(
  &lt;HelloWorld name="JavaScript" /&gt;,
  document.getElementById('root')
);
</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <p>1-3. You can use ECMAScript 2015 (ES6) destructuring to pick off the <code>name</code> property from the <code>props</code> parameter</p>
  </div>
</div>

---

# Using Props in a Class

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre data-line="1,4" class="language-jsx language--clean language--small"><code>
class HelloWorld extends React.Component {
  render() {
    return (
      &lt;div&gt;Hello {this.props.name}!&lt;/div&gt;
    );
  }
};
HelloWorld.propTypes = {
  name: PropTypes.string.isRequired
};

ReactDOM.render(
  &lt;HelloWorld name="JavaScript" /&gt;,
  document.getElementById('root')
);
</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <p>1,3. When using a React class you can access `props` off the `this` implicit parameter.</p>
    <p>Feel free to use destructuring as well here... <pre class="language-js"><code>const { name } =
  this.props;</code></pre></p>
  </div>
</div>

---

<!--
{
  "className": "Slide--static"
}
-->

# Prop Types

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre data-line="1,9-11" class="language-jsx language--clean language--small"><code>
import PropTypes from "prop-types";
class HelloWorld extends React.Component {
  render() {
    return (
      &lt;div&gt;Hello {this.props.name}!&lt;/div&gt;
    );
  }
};
HelloWorld.propTypes = {
  name: PropTypes.string.isRequired
};

ReactDOM.render(
  &lt;HelloWorld name="JavaScript" /&gt;,
  document.getElementById('root')
);
</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <p>1. In React 15.5+, import `prop-types` instead of `React.PropTypes` (migration [codemod](https://github.com/reactjs/react-codemod#react-proptypes-to-prop-types))</p>
    <p>8-10. Check the types of the `props` during development with `propTypes`.</p>
    <pre class="language-jsx language--clean language--small"><code>
array, bool, func, number,
object, string, node,
element, etc...</code></pre>
  </div>
</div>

---

<!--
{
  "className": "Slide--static"
}
-->

# Let's Look at State

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre class="language-jsx language--clean language--small"><code>
class HelloWorld extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return &lt;div&gt;
      &lt;p&gt;Hello {this.state.count}!&lt;/p&gt;
      &lt;button onClick={this.handleClick.bind(this)}&gt;
        Click Me
      &lt;/button&gt;
    &lt;/div&gt;;
  }
}

ReactDOM.render(
  &lt;HelloWorld /&gt;,
  document.getElementById('root')
);
</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <iframe height='268' scrolling='no' src='//codepen.io/elijahmanor/embed/aOZXQa/?height=268&theme-id=0&default-tab=result' data-online='//codepen.io/elijahmanor/embed/aOZXQa/?height=268&theme-id=0&default-tab=result' data-offline='./pens/codepen_aOZXQa/index.html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/aOZXQa/'>aOZXQa</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
    </iframe>
  </div>
</div>

---

<!--
{
  "className": "Slide--static"
}
-->

# Default State and Expression

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre data-line="4,11" class="language-jsx language--clean language--small"><code>
class HelloWorld extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return &lt;div&gt;
      &lt;p&gt;Hello {this.state.count}!&lt;/p&gt;
      &lt;button onClick={this.handleClick.bind(this)}&gt;
        Click Me
      &lt;/button&gt;
    &lt;/div&gt;;
  }
}

ReactDOM.render(
  &lt;HelloWorld /&gt;,
  document.getElementById('root')
);
</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <p>4. Provide default `state` by assigning object from `contructor`.</p>
    <p>11. Access component state via the `this.state` object.</p>
  </div>
</div>

---

<!--
{
  "className": "Slide--static"
}
-->

# Updating State

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre data-line="7,12" class="language-jsx language--clean language--small"><code>
class HelloWorld extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return &lt;div&gt;
      &lt;p&gt;Hello {this.state.count}!&lt;/p&gt;
      &lt;button onClick={this.handleClick.bind(this)}&gt;
        Click Me
      &lt;/button&gt;
    &lt;/div&gt;;
  }
}

ReactDOM.render(
  &lt;HelloWorld /&gt;,
  document.getElementById('root')
);
</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <p>12. Declaratively wire-up _delegated_ Event Handlers via attributes.</p>
    <p>**NOTE**: Make sure to `bind` event handler!!!</p>
    <p>7. Update state by calling `this.setState` passing in difference.</p>
  </div>
</div>

---

# Déjà Vu

[![](./img/iamdeveloper-onclick.png)](https://twitter.com/iamdevloper/status/567363727176253440)

---

<!--
{
  "className": "Slide--static"
}
-->

# Overloaded setState

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre data-line="7-9" class="language-jsx language--clean language--small"><code>
class HelloWorld extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  handleClick() {
    this.setState(function(state, props) {
      return { count: state.count + 1 };
    });
  }
  render() {
    return &lt;div&gt;
      &lt;p&gt;Hello {this.state.count}!&lt;/p&gt;
      &lt;button onClick={this.handleClick.bind(this)}&gt;
        Click Me
      &lt;/button&gt;
    &lt;/div&gt;;
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <p>7-9. As of React v0.13+ you can pass a callback function to `this.setState`. React will pass the current `state` & `props` and you return the new `state`.</p>
  </div>
</div>

---

<!--
{
  "className": "Slide--static"
}
-->

# Public Class Field

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre data-line="2" class="language-jsx language--clean language--small"><code>
class HelloWorld extends React.Component {
  state = { count: 0 }; // stage 2
  handleClick() {
    this.setState(function(state, props) {
      return { count: state.count + 1 };
    });
  }
  render() {
    return &lt;div&gt;
      &lt;p&gt;Hello {this.state.count}!&lt;/p&gt;
      &lt;button onClick={this.handleClick.bind(this)}&gt;
        Click Me
      &lt;/button&gt;
    &lt;/div&gt;;
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <p>2. Instead of using a contructor, you can use a public class field</p>
    <pre class="language-javascript language--clean language--small"><code>
constructor() {
  super();
  this.state = {
    count: 0
  };
}
</code></pre>
  </div>
</div>

---

<!--
{
  "className": "Slide--static"
}
-->

# Bind Event Handlers: Bind

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre data-line="12" class="language-jsx language--clean language--small"><code>
class HelloWorld extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return &lt;div&gt;
      &lt;p&gt;Hello {this.state.count}!&lt;/p&gt;
      &lt;button onClick={this.handleClick.bind(this)}&gt;
        Click Me
      &lt;/button&gt;
    &lt;/div&gt;;
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <p>12. Manually binding event handlers can be slow, annoying, and verbose...</p>
    <p>Thankfully there are other alternatives</p>
  </div>
</div>

---

<!--
{
  "className": "Slide--static"
}
-->

# Bind Event Handlers: Constructor

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre data-line="5,13" class="language-jsx language--clean language--small"><code>
class HelloWorld extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return &lt;div&gt;
      &lt;p&gt;Hello {this.state.count}!&lt;/p&gt;
      &lt;button onClick={this.handleClick}&gt;
        Click Me
      &lt;/button&gt;
    &lt;/div&gt;;
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <p>5. Do the binding once in the constructor</p>
    <p>13. Reference the prebinded event handler</p>
  </div>
</div>

---

<!--
{
  "className": "Slide--static"
}
-->

# Bind Event Handlers: Property Initializer Syntax

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre data-line="3,9" class="language-jsx language--clean language--small"><code>
class HelloWorld extends React.Component {
  state = { count: 0 };
  handleClick: () => {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return &lt;div&gt;
      &lt;p&gt;Hello {this.state.count}!&lt;/p&gt;
      &lt;button onClick={this.handleClick}&gt;
        Click Me
      &lt;/button&gt;
    &lt;/div&gt;;
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <p>3. Use the experimental (stage 2) [Property Initializer Syntax](https://babeljs.io/docs/plugins/transform-class-properties/)</p>
    <p>9. Reference the prebinded event handler</p>
  </div>
</div>

---

<!--
{
  "className": "Slide--static"
}
-->

# Bind Event Handlers: Inline

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre data-line="9" class="language-jsx language--clean language--small"><code>
class HelloWorld extends React.Component {
  state = { count: 0 };
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return &lt;div&gt;
      &lt;p&gt;Hello {this.state.count}!&lt;/p&gt;
      &lt;button onClick={e => this.handleClick(e)}&gt;
        Click Me
      &lt;/button&gt;
    &lt;/div&gt;;
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <p>9. Add inline event handler passing along the event argument</p>
    <p>**NOTE**: This is not preferred as it creates new binding function on each render. Prefer approaches like Constructor or Property Initializer Syntax.</p>
  </div>
</div>

---

# [Component LifeCycle](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)

* **componentWillMount** – Fired once, before initial rendering occurs. Good place to wire-up message listeners. `this.setState` doesn't work here.
* <div class="dim">**componentDidMount** – Fired once, after initial rendering occurs. Can use `ReactDOM.findDOMNode`.</div>
* <div class="dim">**componentDidUpdate** - Fired after the component's updates are made to the DOM.</div>
* <div class="dim">**componentWillReceiveProps** – Fired when a component is receiving new props. You might want to `this.setState` depending on the props.</div>
* <div class="dim">**shouldComponentUpdate** - Fired before rendering when new props or state are received. `return false` if you know an update isn't needed.</div>
* <div class="dim">**componentWillUnmount** – Fired immediately before a component is unmounted from the DOM. Good place to remove message listeners or general clean up.</div>

---

# [Component LifeCycle](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)

* **componentWillMount** – Fired once, before initial rendering occurs. Good place to wire-up message listeners. `this.setState` doesn't work here.
* **componentDidMount** – Fired once, after initial rendering occurs. Can use `ReactDOM.findDOMNode`.
* <div class="dim">**componentDidUpdate** - Fired after the component's updates are made to the DOM.</div>
* <div class="dim">**componentWillReceiveProps** – Fired when a component is receiving new props. You might want to `this.setState` depending on the props.</div>
* <div class="dim">**shouldComponentUpdate** - Fired before rendering when new props or state are received. `return false` if you know an update isn't needed.</div>
* <div class="dim">**componentWillUnmount** – Fired immediately before a component is unmounted from the DOM. Good place to remove message listeners or general clean up.</div>

---

# [Component LifeCycle](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)

* **componentWillMount** – Fired once, before initial rendering occurs. Good place to wire-up message listeners. `this.setState` doesn't work here.
* **componentDidMount** – Fired once, after initial rendering occurs. Can use `ReactDOM.findDOMNode`.
* **componentDidUpdate** - Fired after the component's updates are made to the DOM.
* <div class="dim">**componentWillReceiveProps** – Fired when a component is receiving new props. You might want to `this.setState` depending on the props.</div>
* <div class="dim">**shouldComponentUpdate** - Fired before rendering when new props or state are received. `return false` if you know an update isn't needed.</div>
* <div class="dim">**componentWillUnmount** – Fired immediately before a component is unmounted from the DOM. Good place to remove message listeners or general clean up.</div>

---

# [Component LifeCycle](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)

* **componentWillMount** – Fired once, before initial rendering occurs. Good place to wire-up message listeners. `this.setState` doesn't work here.
* **componentDidMount** – Fired once, after initial rendering occurs. Can use `ReactDOM.findDOMNode`.
* **componentDidUpdate** - Fired after the component's updates are made to the DOM.
* **componentWillReceiveProps** – Fired when a component is receiving new props. You might want to `this.setState` depending on the props.
* <div class="dim">**shouldComponentUpdate** - Fired before rendering when new props or state are received. `return false` if you know an update isn't needed.</div>
* <div class="dim">**componentWillUnmount** – Fired immediately before a component is unmounted from the DOM. Good place to remove message listeners or general clean up.</div>

---

# [Component LifeCycle](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)

* **componentWillMount** – Fired once, before initial rendering occurs. Good place to wire-up message listeners. `this.setState` doesn't work here.
* **componentDidMount** – Fired once, after initial rendering occurs. Can use `ReactDOM.findDOMNode`.
* **componentDidUpdate** - Fired after the component's updates are made to the DOM.
* **componentWillReceiveProps** – Fired when a component is receiving new props. You might want to `this.setState` depending on the props.
* **shouldComponentUpdate** - Fired before rendering when new props or state are received. `return false` if you know an update isn't needed.
* <div class="dim">**componentWillUnmount** – Fired immediately before a component is unmounted from the DOM. Good place to remove message listeners or general clean up.</div>

---

# [Component LifeCycle](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)

* **componentWillMount** – Fired once, before initial rendering occurs. Good place to wire-up message listeners. `this.setState` doesn't work here.
* **componentDidMount** – Fired once, after initial rendering occurs. Can use `ReactDOM.findDOMNode`.
* **componentDidUpdate** - Fired after the component's updates are made to the DOM.
* **componentWillReceiveProps** – Fired when a component is receiving new props. You might want to `this.setState` depending on the props.
* **shouldComponentUpdate** - Fired before rendering when new props or state are received. `return false` if you know an update isn't needed.
* **componentWillUnmount** – Fired immediately before a component is unmounted from the DOM. Good place to remove message listeners or general clean up.

---

<!--
{
  "className": "Slide--static"
}
-->

# Reference to Children Nodes

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre class="language-jsx language--clean language--small"><code>
class HelloWorld extends React.Component {
  /\* ... constructor ... \*/
  componentDidMount() {
    this.count.textContent = '42';
  }
  /\* ... handleClick ... \*/
  render() {
    return &lt;div&gt;
      &lt;p&gt;Hello &lt;span ref={ c => this.count = c }&gt;
        {this.state.count}
      &lt;/span&gt;!&lt;/p&gt;
      &lt;button onClick={this.handleClick.bind(this)}&gt;
        Click Me
      &lt;/button&gt;
    &lt;/div&gt;;
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <iframe height='268' scrolling='no' src='//codepen.io/elijahmanor/embed/waWOQy/?height=268&theme-id=0&default-tab=result' data-online='//codepen.io/elijahmanor/embed/waWOQy/?height=268&theme-id=0&default-tab=result' data-offline='./pens/codepen_waWOQy/index.html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/waWOQy/'>waWOQy</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
    </iframe>
  </div>
</div>

---

<!--
{
  "className": "Slide--static"
}
-->

# Reference to Children Nodes

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre data-line="4,9" class="language-jsx language--clean language--small"><code>
class HelloWorld extends React.Component {
  /\* ... constructor ... \*/
  componentDidMount() {
    this.count.textContent = '42';
  }
  /\* ... handleClick ... \*/
  render() {
    return &lt;div&gt;
      &lt;p&gt;Hello &lt;span ref={ c => this.count = c }&gt;
        {this.state.count}
      &lt;/span&gt;!&lt;/p&gt;
      &lt;button onClick={this.handleClick.bind(this)}&gt;
        Click Me
      &lt;/button&gt;
    &lt;/div&gt;;
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <p>9. Add `ref` attribute to element, `ref` callback receives the DOM element as argument.</p>
    <p>4. You can access saved DOM element elsewhere to update it.</p>
    <p>CAREFUL: You're working outside of React!</p>
  </div>
</div>

---

<!--
{
  "className": "Slide--static"
}
-->

# Functional Component Gotcha

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre data-line="1,5,9-10" class="language-jsx language--clean language--small"><code>
const FunctionalComponent = () => <h1>Hello, world!</h1>;

class ClassComponent extends React.Component {
  componentDidMount() {
    console.log( "componentDidMount", this.funcComp );
  }
  render() {
    return (
      &lt;FunctionalComponent
        ref={ c => this.funcComp = c } /&gt;
    );
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <p>1. functional components don't have instances!</p>
    <p>9-10. component passed to `ref` will be `null`</p>
    <p>5. therefore, `console.log` will be `null`</p>
  </div>
</div>

---

<!--
{
  "className": "Slide--static"
}
-->

# Current DOM Node

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre class="language-jsx language--clean language--small"><code>
class HelloWorld extends React.Component {
  /\* ... constructor ... \*/
  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    node.style.backgroundColor = "red";
  }
  /\* ... handleClick ... \*/
  render() {
    return &lt;div&gt;
      &lt;p&gt;Hello &lt;span ref={ c => this.count = c }&gt;
        {this.state.count}
      &lt;/span&gt;!&lt;/p&gt;
      &lt;button onClick={this.handleClick.bind(this)}&gt;
        Click Me
      &lt;/button&gt;
    &lt;/div&gt;;
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <iframe height='268' scrolling='no' src='//codepen.io/elijahmanor/embed/eWbJZv/?height=268&theme-id=0&default-tab=result' data-online='//codepen.io/elijahmanor/embed/eWbJZv/?height=268&theme-id=0&default-tab=result' data-offline='./pens/codepen_waWOQy/index.html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/waWOQy/'>waWOQy</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
    </iframe>
  </div>
</div>

---

<!--
{
  "className": "Slide--static"
}
-->

# Legacy References

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre data-line="4,10-12" class="language-jsx language--clean language--small"><code>
class HelloWorld extends React.Component {
  /\* ... constructor ... \*/
  componentDidMount() {
    this.refs.count.textContent = '42';
  }
  /\* ... handleClick ... \*/
  render() {
    return (
      &lt;div&gt;
        &lt;p&gt;Hello &lt;span ref="count"&gt;
          {this.state.count}
        &lt;/span&gt;!&lt;/p&gt;
        &lt;button onClick={this.handleClick.bind(this)}&gt;
          Click Me
        &lt;/button&gt;
      &lt;/div&gt;
    );
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <p>10-12. String refs are [deprecated](https://facebook.github.io/react/docs/refs-and-the-dom.html#legacy-api-string-refs) and are likely to be removed in a future release</p>
    <p>1. References are held off the `refs` property on the instance</p>
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
  <div class="Split-column Split-column--70">
    <pre class="language-jsx language--clean language--small"><code>
const speakers = ['Scott Hanselman', 'John Papa', 'Scott Guthrie', 'Michele Bustamante', 'Dan Wahlin', 'Debora Kurata', 'Zoiner Tejada', 'Scott Allen', 'Elijah Manor', 'Ward Bell', 'Todd Anglin', 'Saron Yitbare', 'Scott Hunter'];

class SpeakerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { names: this.props.names };
  }
  handleSort() {
    this.setState({ names: this.state.names.sort() });
  }
  handleScott() {
    var scotts = this.state.names.filter(function(name) {
      return name.indexOf('Scott') > -1;
    });
    
    this.setState({ names: scotts });
  }
  render() {
    return &lt;div&gt;
      &lt;ul&gt;
        {this.state.names.map(function(name) {
          return &lt;li&gt;{name}&lt;/li&gt;;
        })}
      &lt;/ul&gt;
      &lt;button onClick={this.handleSort.bind(this)}&gt;Sort&lt;/button&gt;
      &lt;button onClick={this.handleScott.bind(this)}&gt;Scott&lt;/button&gt;
    &lt;/div&gt;;
  }
}

ReactDOM.render(
  &lt;SpeakerList names={speakers} /&gt;,
  document.getElementById('root')
);
</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <iframe height='468' scrolling='no' src='//codepen.io/elijahmanor/embed/RPRdmg/?height=468&theme-id=0&default-tab=result' data-online='//codepen.io/elijahmanor/embed/RPRdmg/?height=468&theme-id=0&default-tab=result' data-offline='./pens/codepen_RPRdmg/index.html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/RPRdmg/'>RPRdmg</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
    </iframe>
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
  <div class="Split-column Split-column--70">
    <pre data-line="6,13-15,28" class="language-jsx language--clean language--small"><code>
const speakers = ['Scott Hanselman', 'John Papa', 'Scott Guthrie', 'Michele Bustamante', 'Dan Wahlin', 'Debora Kurata', 'Zoiner Tejada', 'Scott Allen', 'Elijah Manor', 'Ward Bell', 'Todd Anglin', 'Saron Yitbare', 'Scott Hunter'];

class SpeakerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { names: this.props.names };
  }
  /\* ... handleSort ... \*/
  /\* ... handleScott ... \*/
  render() {
    return &lt;div&gt;
      &lt;ul&gt;
        {this.state.names.map(function(name) {
          return &lt;li&gt;{name}&lt;/li&gt;;
        })}
      &lt;/ul&gt;
      &lt;button onClick={this.handleSort.bind(this)}&gt;
        Sort
      &lt;/button&gt;
      &lt;button onClick={this.handleScott.bind(this)}&gt;
        Scott
      &lt;/button&gt;
    &lt;/div&gt;;
  }
}

ReactDOM.render(
  &lt;SpeakerList names={speakers} /&gt;,
  document.getElementById('root')
);
</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <p>6. Save off props into state for later use</p>
    <p>13-15. Map over the names array from state and convert to list items</p>
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
  <div class="Split-column Split-column--70">
    <pre data-line="5-7,8-13" class="language-jsx language--clean language--small"><code>
const speakers = ['Scott Hanselman', 'John Papa', 'Scott Guthrie', 'Michele Bustamante', 'Dan Wahlin', 'Debora Kurata', 'Zoiner Tejada', 'Scott Allen', 'Elijah Manor', 'Ward Bell', 'Todd Anglin', 'Saron Yitbare', 'Scott Hunter'];

class SpeakerList extends React.Component {
  /\* ... constructor ... \*/
  handleSort() {
    this.setState({ names: this.state.names.sort() });
  }
  handleScott() {
    var scotts = this.state.names.filter(function(name) {
      return name.indexOf('Scott') > -1;
    });
    this.setState({ names: scotts });
  }
  /\* ... render ... \*/
}

/\* ... ReactDOM.render ... \*/
</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <p>5-7: Sort the names array and assign back to `setState`</p>
    <p>8-13: Filter only names that match "Scott" and then update state</p>
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
  <div class="Split-column Split-column--70">
    <pre data-line="7-9,12,15" class="language-jsx language--clean language--small"><code>
const speakers = ['Scott Hanselman', 'John Papa', 'Scott Guthrie', 'Michele Bustamante', 'Dan Wahlin', 'Debora Kurata', 'Zoiner Tejada', 'Scott Allen', 'Elijah Manor', 'Ward Bell', 'Todd Anglin', 'Saron Yitbare', 'Scott Hunter'];

class SpeakerList extends React.Component {
  /\* ... constructor ... \*/
  /\* ... handleSort ... \*/
  handleScott() {
    let { names } = this.state;
    names = names.filter(n => n.includes('Scott'));
    this.setState({ names });
  }
  render() {
    const { names } = this.state;
    return &lt;div&gt;
      &lt;ul&gt;
        {names.map(name => &lt;li&gt;{name}&lt;/li&gt;)}
      &lt;/ul&gt;
      &lt;button onClick={this.handleSort.bind(this)}&gt;
        Sort
      &lt;/button&gt;
      &lt;button onClick={this.handleScott.bind(this)}&gt;
        Scott
      &lt;/button&gt;
    &lt;/div&gt;;
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <p>Why not leverage MOAR ECMAScript 2015 (ES6)?</p>
    <p>7, 12: Destructuring</p>
    <p>8, 15: Arrow functions</p>
    <p>9: Property Value Shorthand</p>
  </div>
</div>

---

# It's Just JavaScript

<div class="Split">
  <div class="Split-column Split-column--50">
    [![](./img/ryanflorence-javascript.png)](https://twitter.com/ryanflorence/status/577685415919898625)
  </div>
  <div class="Split-column Split-column--50">
    <img src="./img/fast-typing.gif" style="width: 500px;" />
  </div>
</div>

---

<!--
{
  "className": "Slide--static"
}
-->

# Legacy Mixins

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre class="language-jsx language--clean language--small"><code>
var SetIntervalMixin = {
  componentWillMount: function() { this.set = []; },
  setInterval: function() {
    this.set.push(
      window.setInterval.apply(null, arguments)
    );
  },
  componentWillUnmount: function() {
    this.set.forEach(clearInterval);
  }
};

var TickTock = React.createClass({
  mixins: [SetIntervalMixin],
  getInitialState: function() { return { seconds: 0 } },
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

ReactDOM.render(
  &lt;TickTock /&gt;,
  document.getElementById('example')
);</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <iframe height='468' scrolling='no' src='//codepen.io/elijahmanor/embed/pPqEZP/?height=468&theme-id=0&default-tab=result' data-online='//codepen.io/elijahmanor/embed/pPqEZP/?height=468&theme-id=0&default-tab=result' data-offline='./pens/codepen_RPRdmg/index.html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/RPRdmg/'>RPRdmg</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
    </iframe>
  </div>
</div>

---

<!--
{
  "className": "Slide--static"
}
-->

# Legacy Mixins

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre data-line="1,14,17" class="language-jsx language--clean language--small"><code>
var SetIntervalMixin = {
  componentWillMount: function() { this.set = []; },
  setInterval: function() {
    this.set.push(
      window.setInterval.apply(null, arguments)
    );
  },
  componentWillUnmount: function() {
    this.set.forEach(clearInterval);
  }
};

var TickTock = React.createClass({
  mixins: [SetIntervalMixin],
  getInitialState: function() { return { seconds: 0 } },
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
  <div class="Split-column Split-column--30">
    <p>1. Define the `SetIntervalMixin` Mixin</p>
    <p>14. Reference `SetIntervalMixin` in the `mixins` array</p>
    <p>17. Call `setInterval` from the mixin</p>
  </div>
</div>

---

# [Mixins Considered Harmful](https://facebook.github.io/react/blog/2016/07/13/mixins-considered-harmful.html)

* Introduce Implicit Dependencies
* Cause Name Clashes
* Cause Snowballing Complexity

NOTE: The ES6 `class` syntax does not support Mixins

---

# Alternate Mixin Solutions

* Higher Order Components (HOC)
* Decorators (which end up being HOCs)

---

<!--
{
  "className": "Slide--static"
}
-->

# Mixin Alternative: HOC

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre data-line="1,17" class="language-jsx language--clean language--small"><code>
const setIntervalHoc = (ComposedComponent) =>
  class extends React.Component {
    componentWillMount() { this.set = []; }
    setInterval() {
      this.set.push(
        window.setInterval.apply(null, arguments)
      );
    }
    componentWillUnmount() {
      this.set.forEach(clearInterval);
    }
    render() {
      return &lt;ComposedComponent
        {...this.props}
        onSetInterval={::this.setInterval}
      /&gt;;
    }
  };
</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <p>1. Define the `setIntervalHoc` function</p>
  </div>
</div>

---

<!--
{
  "className": "Slide--static"
}
-->

# Mixin Alternative: HOC

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre data-line="4,15" class="language-jsx language--clean language--small"><code>
class TickTock extends React.Component {
  state = { seconds: 0 };
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
TickTock = setIntervalHoc(TickTock);

ReactDOM.render(
  &lt;TickTock /&gt;,
  document.getElementById('example')
);</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <p>15. Call the `setIntervalHoc` passing the component you want to wrap</p>
    <p>4. Invoke method passed in by HOC component</p>
  </div>
</div>

---

<!--
{
  "className": "Slide--static"
}
-->

# Mixin Alternative: Decorator

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre data-line="1-3,5,16,23" class="language-jsx language--clean language--small"><code>
const setIntervalDecorator = (ComposedComponent) =>
  /\* ... same as before ... \*/
};

@setIntervalDecorator
class TickTock extends React.Component {
  /\* ... same as before ... \*/
}

ReactDOM.render(&lt;TickTock /&gt;,
  document.getElementById('example'));</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <p>1-3. Define the `setIntervalDecorator` Decorator</p>
    <p>5. Decorate your class with `setIntervalDecorator`</p>
  </div>
</div>

<!-- # Use PureRenderMixin -->
