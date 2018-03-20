# New Refs API

------

## Types of APIs

<!-- .slide: data-title="Refs API" -->

* Legacy String Refs<!-- .element: class="fragment" -->
* Newer Callback Refs<!-- .element: class="fragment" -->
* Newest Object Refs<!-- .element: class="fragment" -->
* Newest forwardRef API<!-- .element: class="fragment" -->

------

## Legacy String Refs

<!-- .slide: data-title="Refs API" -->

```js
class Hello extends React.Component {
  render() {
    return <section>
      <input type="text" ref="myRef" />
    </section>;
  }
  componentDidMount() {
    this.refs.myRef.focus();
  }
}
```

<span class="fragment current-only focus-text" data-code-focus="4">String value to ref prop</span>
<span class="fragment current-only focus-text" data-code-focus="8">Use the `this.refs` property</span>

------

## Legacy String Refs

<!-- .slide: data-title="Refs API" -->

### Design is Problematic

```js
<input type="text" ref="myRef" />
```

* Async Problems<!-- .element: class="fragment" -->
* Render Props Problems<!-- .element: class="fragment" -->
* Static Typing Problems<!-- .element: class="fragment" -->
* <!-- .element: class="fragment" -->[More Problems...](https://github.com/facebook/react/issues/1373)

------

## Newer Callback Refs

<!-- .slide: data-title="Refs API" -->

```js
class Hello extends React.Component {
  render() {
    return <section>
      <input
        type="text"
        ref={element => this.myRef = element} />
    </section>;
  }
  componentDidMount() {
    this.myRef.focus();
  }
}
```

<span class="fragment current-only focus-text" data-code-focus="4-6">Callback function to ref prop</span>
<span class="fragment current-only focus-text" data-code-focus="10">Use the ref wherever it was saved</span>

------

## Newer Callback Refs

<!-- .slide: data-title="Refs API" -->

### Better Design

```js
<input type="text"
  ref={element => this.myRef = element} />
```

However, it's much more involved<!-- .element: class="fragment" -->

------

## Newest Object Refs

<!-- .slide: data-title="Refs API" -->

```js
class Hello extends React.Component {
  myRef = React.createRef();
  render() {
    return <section>
      <input type="text" ref={this.myRef} />
    </section>;
  }
  componentDidMount() {
    this.myRef.current.focus();
  }
}
```

<span class="fragment current-only focus-text" data-code-focus="2">Create a reference from React</span>
<span class="fragment current-only focus-text" data-code-focus="5">Assign the ref object to the ref prop</span>
<span class="fragment current-only focus-text" data-code-focus="9">Use the ref's current property</span>

------

## Newest Object Refs

<!-- .slide: data-title="Refs API" -->

### Simple without Problems

```js
myRef = React.createRef();
<input type="text" ref={this.myRef} />
```

------

## Newest forwardRef API

<!-- .slide: data-title="Refs API" -->

```js
const MyInput = React.forwardRef((props, ref) => (
  <div className="MyInput">
    <input type="text" ref={ref} {...props} />
  </div>
));

class Hello extends React.Component {
  myRef = React.createRef();
  render() {
    return <section>
        <MyInput ref={this.myRef} />
    </section>;
  }
  componentDidMount() {
    this.myRef.current.focus();
  }
}
```

<span class="fragment current-only focus-text" data-code-focus="1">Tell React to forward a reference</span>
<span class="fragment current-only focus-text" data-code-focus="1,3">Forward Input's ref to the input inside</span>
<span class="fragment current-only focus-text" data-code-focus="11">The ref points directly to the DOM node</span>

------

## Take Aways

<!-- .slide: data-title="Refs API" -->

* String refs will get deprecated<!-- .element: class="fragment" -->
* Object refs should fit most of your cases<!-- .element: class="fragment" -->
* Callback refs are there for advanced use cases<!-- .element: class="fragment" -->
* Use forwardRefs to access a nested element<!-- .element: class="fragment" -->

------

## Resources

<!-- .slide: data-title="Refs API" data-state="resources" -->

* [RFC to React: New Create Ref](https://github.com/reactjs/rfcs/blob/master/text/0017-new-create-ref.md)
* [Reasons why String Ref is problematic](https://github.com/facebook/react/issues/1373)