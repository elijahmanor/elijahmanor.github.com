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
compoenntWillReceiveProps ➡ getDerivedStateFromProps
```

------

### `getDerivedStateFromProps`

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

## Timeline

<!-- .slide: data-title="Lifecycle Methods" data-state="zeroTopx" -->

```
// will be deprecated in v16.4
componentWillReceiveProps(nextProps) {}

// UNSAFE_ introduced in v16.3, v17 only UNSAFE will remain
UNSAFE_componentWillReceiveProps(nextProps) {}

// instead use new...
static getDerivedStateFromProps(nextProps, prevState) {}
```

<span class="fragment current-only focus-text" data-code-focus="4-5">`v16.3` The UNSAFE methods introduced</span>
<span class="fragment current-only focus-text" data-code-focus="1-2">`v16.4` The non-UNSAFE methods will be deprecated</span>
<span class="fragment current-only focus-text" data-code-focus="1-2">`v17.0` The non-UNSAFE methods will be removed.</span>
<span class="fragment current-only focus-text" data-code-focus="4-5">`v17.0` Only the UNSAFE methods will remain.</span>
<span class="fragment current-only focus-text" data-code-focus="7-8">Migrate to UNSAFE or use the recommended lifecycle method</span>

------

## Codemod

<!-- .slide: data-title="Lifecycle Methods" -->

### [React-Codemod](https://github.com/reactjs/react-codemod/#rename-unsafe-lifecycles)

```
jscodeshift -t
  react-codemod/transforms/rename-unsafe-lifecycles.js <path>
```

------

## Resources

<!-- .slide: data-title="Lifecycle Methods" data-state="resources" -->

* [RFC to React: Static Lifecycle Methods](https://github.com/reactjs/rfcs/blob/master/text/0006-static-lifecycle-methods.md)
* [React Components](https://reactjs.org/docs/react-component.html)
* [React-Codemod](https://github.com/reactjs/react-codemod/#rename-unsafe-lifecycles)
