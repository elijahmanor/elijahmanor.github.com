# Updated Lifecycle Methods

------

## Deprecations

<!-- .slide: data-title="Lifecycle Methods" -->

The following methods will soon be deprecated and prepended with `UNSAFE_`

* componentWillMount
* componentWillUpdate
* componentWillReceiveProps

<blockquote class="fragment">THINK: All the <code>Will</code> methods <strong>Will</strong> be deprecated (except <code>componentWillUnmount</code>)</blockquote>

------

## Why the Deprecations?

<!-- .slide: data-title="Lifecycle Methods" -->

These methods have been confusing and, in some cases, are being used in ways that are problematic.

As React looks forward to Async Mode, these methods stand in it's way and need to be deprecated.

For detailed scenarios check out the [RFC to React](https://github.com/reactjs/rfcs/blob/master/text/0006-static-lifecycle-methods.md) regarding these changes.

------

## Migration

<!-- .slide: data-title="Lifecycle Methods" -->

```js
componentWillMount        ➡ componentDidMount
componentWillUpdate       ➡ componentDidUpdate
componentWillReceiveProps ➡ getDerivedStateFromProps
```

<span class="fragment current-only focus-text" data-code-focus="1">Instead of componentWillMount, use componentDidMount</span>
<span class="fragment current-only focus-text" data-code-focus="2">Instead of componentWillUpdate, use componentDidUpdate</span>
<span class="fragment current-only focus-text" data-code-focus="3">Instead of componentWillReceiveProps, use getDerivedStateFromProps</span>

------

### New `getDerivedStateFromProps`

<!-- .slide: data-title="Lifecycle Methods" data-state="zeroTopx" -->

```js
class MyClass extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value !== prevState.value) {
      return({value: nextProps.value});
    }
  }
}
```

<span class="fragment current-only focus-text" data-code-focus="2-6">Static methods are a part of ES6, so no special babel transforms are needed</span>
<span class="fragment current-only focus-text" data-code-focus="4">Can’t reference `this`. What's returned is updated (or null if none is needed)</span>
<span class="fragment current-only focus-text" data-code-focus="2-6">It's called on the initial mounting and when re-rendering</span>

------

### New `getSnapshotBeforeUpdate`

<!-- .slide: data-title="Lifecycle Methods" data-state="zeroTopx" -->

```js
class MyClass extends Component {
  listRef = React.createRef();
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return prevProps.list.length < this.props.list.length ?
      this.listRef.scrollHeight : null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      const listRef = this.listRef;
      listRef.scrollTop += listRef.scrollHeight - snapshot;
    }
  }
  render() { return <div ref={this.listRef}>{ /*...*/ }</div>; }
}
```

<small>Example from <a href="https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#open-source-project-maintainers">Update on Async Rendering Post</a></small>

<span class="fragment current-only focus-text focus-text--abs" data-code-focus="3-6">Called before mutations are made (e.g. DOM is udpated)</span>
<span class="fragment current-only focus-text focus-text--abs" data-code-focus="4-5">Return value is passed to 3rd param to componentDidUpdate</span>
<span class="fragment current-only focus-text focus-text--abs" data-code-focus="7-12">snapshot represents the value returned from getSnapshotBeforeUpdate</span>

------

## Timeline

<!-- .slide: data-title="Lifecycle Methods" data-state="zeroTopx" -->

```js
// will be deprecated in a future v16.x release
componentWillReceiveProps(nextProps) {}

// UNSAFE_ introduced in v16.3, v17 only UNSAFE will remain
UNSAFE_componentWillReceiveProps(nextProps) {}

// instead use new...
static getDerivedStateFromProps(nextProps, prevState) {}
```

<span class="fragment current-only focus-text" data-code-focus="4-5">`v16.3` The UNSAFE methods introduced</span>
<span class="fragment current-only focus-text" data-code-focus="1-2">Future `v16.x` release the non-UNSAFE methods will be deprecated</span>
<span class="fragment current-only focus-text" data-code-focus="1-2">`v17.0` The non-UNSAFE methods will be removed.</span>
<span class="fragment current-only focus-text" data-code-focus="4-5">`v17.0` Only the UNSAFE methods will remain.</span>
<span class="fragment current-only focus-text" data-code-focus="7-8">Migrate to UNSAFE or use the recommended lifecycle method</span>

------

## Codemod

<!-- .slide: data-title="Lifecycle Methods" -->

### [React-Codemod](https://github.com/reactjs/react-codemod/#rename-unsafe-lifecycles)

```bash
jscodeshift -t
  react-codemod/transforms/rename-unsafe-lifecycles.js <path>
```

------

### [react-lifecycles-compat](https://github.com/reactjs/react-lifecycles-compat) Polyfill

<!-- .slide: data-title="Lifecycle Methods" -->

```js
import React, { Component } from "react";
import polyfill from "react-lifecycles-compat";

class MyComponent extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {}
}

polyfill(MyComponent);

export default MyComponent;
```

<span class="fragment current-only focus-text focus-text--absx" data-code-focus="2">npm install react-lifecycles-compat</span>
<span class="fragment current-only focus-text focus-text--absx" data-code-focus="4-6">Use the new lifecycle methods as you please</span>
<span class="fragment current-only focus-text focus-text--absx" data-code-focus="8">Pass your component to the polyfill to work with older versions of React</span>

------

## Resources

<!-- .slide: data-title="Lifecycle Methods" data-state="resources" -->

* [React Lifecycle Method Documentation](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html)
* [RFC to React: Static Lifecycle Methods](https://github.com/reactjs/rfcs/blob/master/text/0006-static-lifecycle-methods.md)
* [React Components](https://reactjs.org/docs/react-component.html)
* [Update on Async Rendering](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html)
* [React-Codemod](https://github.com/reactjs/react-codemod/#rename-unsafe-lifecycles)
* [react-lifecycles-compat](http://npm.im/react-lifecycles-compat)