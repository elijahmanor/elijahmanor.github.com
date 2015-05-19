<!--
{
  "className": "Slide--title"
}
-->

# Components

---

# State Machines

> Components are Just State Machines

> React thinks of UIs as simple state machines. By thinking of a UI as being in various states and rendering those states, it's easy to keep your UI consistent.

> In React, you simply update a component's state, and then render a new UI based on this new state. React takes care of updating the DOM for you in the most efficient way. --https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html#components-are-just-state-machines

---

# Okay, Okay

> "Talk is cheap. Show me the code." --Linus Torvalds

---

# JSX

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
    <iframe height='268' scrolling='no' src='//codepen.io/elijahmanor/embed/MweXEv/?height=268&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/MweXEv/'>MweXEv</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
    </iframe>
  </div>
</div>

---

# Markup in my JavaScript... WHAT!?!

[![](./img/iamdeveloper-jsx.png)](https://twitter.com/iamdevloper/status/598435575662813184)

---

# But Seriously

> React component is "...a highly cohesive building block for UIs loosely coupled with other components." --[Pete Hunt](http://www.slideshare.net/floydophone/react-preso-v2)

* Templates separate technologies, not concerns
* Focus on building components, not templates
* Combining reduces context switching

---




---

# Déjà Vu

[![](./img/iamdeveloper-onclick.png)](https://twitter.com/iamdevloper/status/567363727176253440)

---

React.createClass - The way in which you create a new component.
render (method) - What we would like our HTML Template to look like.
React.render - Renders a React component to a DOM node.

JavaScript Expressions
var person = <Person name={window.isLoggedIn ? window.name : ''} />;

Comments
It's easy to add comments within your JSX; they're just JS expressions. You just need to be careful to put {} around the comments when you are within the children section of a tag.

var content = (
  <Nav>
    {/* child comment, put {} around */}
    <Person
      /* multi
         line
         comment */
      name={window.isLoggedIn ? window.name : ''} // end of line comment
    />
  </Nav>
);

state - The internal data store (object) of a component.
getInitialState - The way in which you set the initial state of a component.
setState - A helper method for altering the state of a component.
props - The data which is passed to the child component from the parent component.
propTypes - Allows you to control the presence, or types of certain props passed to the child component.
getDefaultProps - Allows you to set default props for your component.
Component LifeCycle
componentWillMount – Fired before the component will mount
componentDidMount – Fired after the component mounted
componentWillReceiveProps – Fired whenever there is a change to props
componentWillUnmount – Fired before the component will unmount
Events
onClick
onSubmit
onChange
refs

---

# Angular Directive

* Isolate Scoped (yield template inside)
* Element Restricted (doesn't inherit from parent scope)
* Transcluded Directive (an element, not an attribute)

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

# GOTCHAS

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

# GOTCHAS

className

---

# Pass custom info

UPDATE

```
    <a href="http://google.com" onClick={this.handleClick.bind(null, 'Google')}>Google</a>
handleClick: function(linkName, e) {
  e.preventDefault();
}
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

# Tips

---

## Use PureRenderMixin

Notes:

* http://aeflash.com/2015-02/react-tips-and-best-practices.html

---

# Tips

## Use PropTypes

---

# Tips

## It's Okay to Use Instance Properties

---

# Tips

## Reduce State

---

# Mixins

Must use `React.createClass`. Unfortuneately the ES6 `class` syntax doesn't support Mixins as of yet.

<!--
components are
reusable
composable
testable
-->
