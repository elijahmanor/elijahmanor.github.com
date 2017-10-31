<!--
{
  "className": "Slide--title"
}
-->

# What's New in React v16?

---

<div class="Split">
  <div class="Split-column Split-column--50">
    <h1>Complete Rewrite</h1>
    <h2>Now With Fiber</h2>
  </div>
  <div class="Split-column Split-column--50">
    <img style="height: 75vh; max-width: none;" src="./img/fiber-one-nutty.jpeg" />
  </div>
</div>

---

# React Fiber

* Prioritize Updates by Importance
* Better Error Handling
* Return Multiple Elements from Render
* Portals
* Etc...

---

# Prioritize Updates by Importance

---

## Stack Reconciliation Algorithm (<= v15)

<div>
  <img style="height: 50vh; max-width: none;" src="./img/react-stack-reconciliation.png" />
  <small style="display: block"><a href="https://www.youtube.com/watch?v=ZCuYPiUIONs">Lin Clark - A Cartoon Intro to Fiber</a></small>
</div>

Blocks the main thread as it calculates the tree

---

## Fiber Reconciliation Algorithm (>= v16)

<div>
  <img style="height: 50vh; max-width: none;" src="./img/react-fiber-reconciliation.png" />
  <small style="display: block"><a href="https://www.youtube.com/watch?v=ZCuYPiUIONs">Lin Clark - A Cartoon Intro to Fiber</a></small>
</div>

Calculates part of tree & pauses (`window.requestIdleCallback`) to check for updates

---

## Prioritize Updates by Importance

<div>
  <img style="height: 50vh; max-width: none;" src="./img/react-fiber-priorities.png" />
  <small style="display: block"><a href="https://www.youtube.com/watch?v=ZCuYPiUIONs">Lin Clark - A Cartoon Intro to Fiber</a></small>
</div>

---

<!--
{
  "className": "Slide--static"
}
-->

# Error Boundaries

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre data-line="3,7-13" class="language-jsx language--clean language--small"><code>
class App extends React.Component {
  state = { error: false };
  componentDidCatch(error, info) {
    this.setState({ error, info });
  }
  render() {
    const { error, info } = this.state;
    return error ?
      &lt;div&gt;
        KaBoom!
        &lt;pre&gt;{error.toString()}&lt;/pre&gt;
        &lt;pre&gt;{info.componentStack}&lt;/pre&gt;
      &lt;/div&gt; :
      &lt;ThrowUp /&gt;;
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <p>3. <code>componentDidCatch</code> is a new lifecycle method</p>
    <p>4, 7-13. Can display this information if you want </p>
  </div>
</div>

---

<!--
{
  "className": "Slide--static"
}
-->

# Error Boundaries

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre data-line="3-5,9-13,14-18" class="language-jsx language--clean language--small"><code>
class ThrowUp extends React.Component {
  state = { showError: false };
  throwUp() {
    throw new Error( "Throw Up!" );
  }
  render() {
    return (
      &lt;div&gt;
        &lt;button onClick={() =&gt;
          this.setState({ showError: true })}&gt;
          Throw & Catch
        &lt;/button&gt;
        {this.state.showError && this.throwUp()}
        &lt;button
          onClick={() =&gt; {
            throw new Error("Didn't Catch");
          }}
        &gt;Throw, but not Catch&lt;/button&gt;
      &lt;/div&gt;
    );
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <p>3-5, 9-13. Errors from render are thrown and caught</p>
    <p>14-18. Errors outside of render (as result of event, etc) are not caught by error boundaries</p>
  </div>
</div>

---

<!--
{
  "className": "Slide--static"
}
-->

# Error Boundaries

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre data-line="" class="language-jsx language--clean language--small"><code>
class App extends React.Component {
  state = { error: false };
  componentDidCatch(error, info) {
    this.setState({ error, info });
  }
  render() {
    const { error, info } = this.state;
    return error ?
      &lt;div&gt;
        KaBoom!
        &lt;pre&gt;{error.toString()}&lt;/pre&gt;
        &lt;pre&gt;{info.componentStack}&lt;/pre&gt;
      &lt;/div&gt; :
      &lt;ThrowUp /&gt;;
  }
}

class ThrowUp extends React.Component {
  state = { showError: false };
  throwUp() {
    throw new Error( "Throw Up!" );
  }
  render() {
    return (
      &lt;div&gt;
        &lt;button onClick={() =&gt;
          this.setState({ showError: true })}&gt;
          Throw & Catch
        &lt;/button&gt;
        {this.state.showError && this.throwUp()}
        &lt;button
          onClick={() =&gt; {
            throw new Error("Didn't Catch");
          }}
        &gt;Throw, but not Catch&lt;/button&gt;
      &lt;/div&gt;
    );
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <iframe height='468' scrolling='no' src='//codepen.io/elijahmanor/embed/jaNMmZ/?height=468&theme-id=0&default-tab=result' data-online='//codepen.io/elijahmanor/embed/jaNMmZ/?height=468&theme-id=0&default-tab=result' data-offline='./pens/codepen_jaNMmZ/index.html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/jaNMmZ/'>jaNMmZ</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.</iframe>
  </div>
</div>

---

<!--
{
  "className": "Slide--static"
}
-->

# Error Boundaries

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre data-line="" class="language-jsx language--clean language--small"><code>
class ErrorBoundary extends React.Component {
  state = { error: null, info: null };
  componentDidCatch(error, info) {
    this.setState({ error, info });
  }
  render() {
    const { error, info } = this.state;
    if (error) {
      return (
        &lt;div&gt;
          &lt;h2&gt;Something went wrong.&lt;/h2&gt;
          &lt;details&gt;
            {error.toString()}
            &lt;br /&gt;
            {info.componentStack}
          &lt;/details&gt;
        &lt;/div&gt;
      );
    }
    return this.props.children;
  }  
}

class ThrowUp extends React.Component { /* ... */ }

const App = () =&gt; &lt;ErrorBoundary&gt; 
  &lt;ThrowUp /&gt;
&lt;/ErrorBoundary&gt;;

ReactDOM.render(
  &lt;App /&gt;,
  document.getElementById("root")
);
</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <iframe height='468' scrolling='no' src='//codepen.io/elijahmanor/embed/ZaYvLJ/?height=468&theme-id=0&default-tab=result' data-online='//codepen.io/elijahmanor/embed/ZaYvLJ/?height=468&theme-id=0&default-tab=result' data-offline='./pens/codepen_ZaYvLJ/index.html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/ZaYvLJ/'>ZaYvLJ</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.</iframe>
  </div>
</div>

---

# Return Multiple Elements from Render

<div class="Split">
  <div class="Split-column">
    <p>Bad (<= v15)</p>
    <pre class="language-jsx language--clean"><code>
return (
  &lt;div&gt;Test 1&lt;/div&gt;
  &lt;div&gt;Test 2&lt;/div&gt;
);</code></pre>
  </div>
  <div class="Split-column">
    <p>Good (>= v16)</p>
    <pre class="language-jsx language--clean"><code>
return (
  [
    &lt;div key="1">Test 1&lt;/div&gt;,
    &lt;div key="2">Test 2&lt;/div&gt;
  ]
);</code></pre>
  </div>
</div>

---

# Return Multiple Elements from Render

<div class="Split">
  <div class="Split-column">
    <p>Self-eradicating Component</p>
    <pre class="language-jsx language--clean"><code>
const Aux = props =>
  props.children;

const App = () =>
  &lt;Aux&gt;
    &lt;p&gt;Hello&lt;/p&gt;
    &lt;p&gt;World!&lt;/p&gt;
  &lt;/Aux&gt;;
</code></pre>
  </div>
  <div class="Split-column">
    <p><a href="https://github.com/gajus/react-aux">react-aux</a></p>
    <pre class="language-jsx language--clean"><code>
import Aux from "react-aux";

const App = () =>
  &lt;Aux&gt;
    &lt;p&gt;Hello&lt;/p&gt;
    &lt;p&gt;World!&lt;/p&gt;
  &lt;/Aux&gt;;
</code></pre>
  </div>
</div>

---

# Portals

> Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

---

# Portals

React does *not* create a new div. It renders the children into `domNode`.

`domNode` is any valid DOM node, regardless of its location in the DOM.

<div class="Split">
  <div class="Split-column">
    <pre class="language-jsx language--clean"><code>
render() {
  return ReactDOM.createPortal(
    this.props.children,
    domNode,
  );
}
</code></pre>
  </div>
  <div class="Split-column">
    <p>Possible Use Cases</p>
    <ul style="margin-top: 0;">
      <li>Modals</li>
      <li>Lightboxes</li>
      <li>Custom Dropdowns</li>
      <li>Loading Bars</li>
      <li><a href="https://codepen.io/gaearon/pen/yzMaBd">Example</a> by <a href="https://twitter.com/dan_abramov">@dan_abramov</a></li>
    </ul>
  </div>
</div>
