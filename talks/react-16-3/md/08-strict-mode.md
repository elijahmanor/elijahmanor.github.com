# New Strict Mode

------

## New Strict Mode

<!-- .slide: data-title="Strict Mode" -->

```js
import React, { Component, StrictMode } from "react"

class App extends Component {
  render() {
    return <div>
      <StrictMode>
        <GettingReadyForAsync />
      </StrictMode>
      <NotSoStrictStuff />
    </div>;
  }
}
```

<span class="fragment current-only focus-text" data-code-focus="6,8">Make sure you are using best practices!</span>
<span class="fragment current-only focus-text" data-code-focus="7">Wrap around components in question</span>
<span class="fragment current-only focus-text" data-code-focus="7">If works, prob will work in Async Mode</span>

------

## Warnings

<!-- .slide: data-title="Strict Mode" data-state="zeroTop" -->

```js
import React, { Component, StrictMode } from "react"

class App extends Component {
  render() {
    return <StrictMode>
      <Problems />
    </StrictMode>;
  }
}

class Problems extends Component {
  componentWillMount() {}

  componentWillUpdate(nextProps, nextState) {}

  componentWillReceiveProps(nextProps) {}

  render() {
    return <input type="text" ref="name" />;
  }
}
```

<span class="fragment current-only focus-text" data-code-focus="5-7">Wrap around problematic component</span>
<span class="fragment current-only focus-text" data-code-focus="11-21">Ohh no...</span>

------

## Warnings

<!-- .slide: data-title="Strict Mode" -->

![](./img/strict-mode-console-2.png)

------

## Resources

<!-- .slide: data-title="Strict Mode" data-state="resources" -->

* [React Strict Mode Documentation](https://reactjs.org/docs/strict-mode.html)
* [Umbrella: 16.3 release](https://github.com/facebook/react/issues/12152)
