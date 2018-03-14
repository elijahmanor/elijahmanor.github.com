# New AsynMode

------

## New AsynMode

<!-- .slide: data-title="Async Mode" -->

React 16 (Fiber) laid the framework for Async

```js
import React, { unstable_AsyncMode as AsynMode };

// OR

const AsynMode = React.unstable_AsyncMode;
```

<span class="fragment current-only focus-text" data-code-focus="1">Alias the named import</span>
<span class="fragment current-only focus-text" data-code-focus="5">Create an aliased const</span>




------

## Using AsynMode

<!-- .slide: data-title="Async Mode" -->

```js
import React, { unstable_AsyncMode as AsynMode };

const LowPriority = () => <AsynMode>
  <ChildComponent />
</AsynMode>;
```

<span class="fragment current-only focus-text" data-code-focus="3-5">Content in AsyncMode has less priority</span>

Notes:

// Extend class with AsynMode
const LowPriority2 extends AsynMode {
    render() {
        return <ChildComponent />;
    }
}

------

## Demo

<!-- .slide: data-title="Async Mode" -->

<iframe width="560" height="315" style="border: 1px solid white; background: white;" data-src="https://build-mbfootjxoo.now.sh/"></iframe>

------

## Beyond React 16

<!-- .slide: data-title="Async Mode" -->

<iframe width="560" height="315" data-src="https://www.youtube.com/embed/v6iR3Zk4oDY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

by [@dan_abramov](https://twitter.com/dan_abramov/) at [@jsconfis](https://twitter.com/jsconfis)

------

## Resources

<!-- .slide: data-title="Async Mode" data-state="resources" -->

* [Beyond React 16 by Dan Abramov at JSConf Iceland](https://www.youtube.com/watch?v=v6iR3Zk4oDY)
* [Sneak Peek: Beyond React 16](https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html)
* [Async Demo](https://build-mbfootjxoo.now.sh/)

Notes:

https://codesandbox.io/s/DRJO0N24Y
