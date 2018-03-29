# New Context API

------

## Old Context API

<!-- .slide: data-title="Context API" -->

![](./img/old-context-api.png)

------

## `createContext`

<!-- .slide: data-title="Context API" data-state="zeroTop"  -->

```js
import React from "react";
import { render } from "react-dom";

const MyContext = React.createContext("Hello");

console.log(MyContext);
```

<span class="fragment current-only focus-text" data-code-focus="4">Create a new Context with default value</span>
<span class="fragment current-only focus-text focus-code" data-code-focus="6"><code>{
  Consumer: Object,
  Provider: Object,
  currentValue: "Hello"
  defaultValue: "Hello"
}</code>
</span>

------

## Provider

<!-- .slide: data-title="Context API" data-state="zeroTopx" -->

```js
import React from "react";
import { render } from "react-dom";

const MyContext = React.createContext("Hello");

const MyProvider = ({children}) =>
  <MyContext.Provider value="world">
    {children}
  </MyContext.Provider>;
```

<span class="fragment current-only focus-text" data-code-focus="7,9">Use Provider off of the context created</span>
<span class="fragment current-only focus-text" data-code-focus="8">Render the children passed</span>
<span class="fragment current-only focus-text" data-code-focus="7">You can change the value</span>

------

## Consumer

<!-- .slide: data-title="Context API" data-state="zeroTop" -->

```js
import React from "react";
import { render } from "react-dom";

const MyContext = React.createContext("Hello");

const MyProvider = ({children}) =>
  <MyContext.Provider value="world">
    {children}
  </MyContext.Provider>;

const App = () => (
  <MyProvider>
    <MyContext.Consumer>
      {value => <h1>Hello, {value}!</h1>}
    </MyContext.Consumer>
  </MyProvider>
);

render(
  <App />,
  document.getElementById("⚛️")
);
```

<span class="fragment current-only focus-text" data-code-focus="12,16">Use the Provider to wrap content</span>
<span class="fragment current-only focus-text" data-code-focus="13,15">The Consumer receives the context value</span>
<span class="fragment current-only focus-text" data-code-focus="14">Uses the Render Props pattern 🎉</span>
<span class="fragment current-only focus-text" data-code-focus="13-15">Consumers are allowed at any level</span>

------

## Simple L10n Context [🔗](https://codesandbox.io/s/6lxxo1x5vn)<!-- .element: class="icon" -->

<!-- .slide: data-title="Context API" data-state="zeroTop" -->

<iframe src="https://codesandbox.io/embed/6lxxo1x5vn?autoresize=1&hidenavigation=1&view=preview" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

------

## Simple L10n Context [🔗](https://codesandbox.io/s/6lxxo1x5vn)<!-- .element: class="icon" -->

<!-- .slide: data-title="Context API" data-state="zeroTop" -->

```js
import React from "react";
import { render } from "react-dom";
import { CDNFlagIcon } from "react-flag-kit";
import "./index.css";

const ThemeContext = React.createContext();

const localeMap = {
  "en-US": { locale: "en-US", flag: "US", content: "Hello, World!" },
  "fr-FR": { locale: "fr-FR", flag: "FR", content: "Bonjour le monde!" },
  "es-ES": { locale: "es-ES", flag: "ES", content: "¡Hola Mundo!" }
};
class LocaleSwitcher extends React.Component {
  state = localeMap["en-US"];
  render() {
    return (
      <ThemeContext.Provider
        value={{
          state: this.state,
          updateLocale: e => this.setState(localeMap[e.target.value])
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

const LocaleSelect = () => (
  <ThemeContext.Consumer>
    {context => (
      <select value={context.state.locale}
        onChange={context.updateLocale}>
        <option value="en-US">English</option>
        <option value="fr-FR">French</option>
        <option value="es-ES">Spanish</option>
      </select>
    )}
  </ThemeContext.Consumer>
);

const LocaleFlag = () => (
  <ThemeContext.Consumer>
    {context => <CDNFlagIcon code={context.state.flag} size={256} />}
  </ThemeContext.Consumer>
);

const LocaleContent = () => (
  <ThemeContext.Consumer>
    {context => <h1>{context.state.content}</h1>}
  </ThemeContext.Consumer>
);

class App extends React.Component {
  render() {
    return (
      <LocaleSwitcher>
        <LocaleSelect />
        <LocaleFlag />
        <LocaleContent />
      </LocaleSwitcher>
    );
  }
}

render(<App />, document.getElementById("⚛️"));
```

<span class="fragment current-only focus-text" data-code-focus="6">Create the ThemeContext</span>
<span class="fragment current-only focus-text" data-code-focus="8-12">localeMap flags and content</span>
<span class="fragment current-only focus-text" data-code-focus="13-27">LocaleSwitcher is the Provider</span>
<span class="fragment current-only focus-text" data-code-focus="14">Maintains the state</span>
<span class="fragment current-only focus-text" data-code-focus="17-22,24">Passes context of state & methods</span>
<span class="fragment current-only focus-text" data-code-focus="23">Pass children through for composition</span>
<span class="fragment current-only focus-text" data-code-focus="29-40">Consumer gets context when it changes</span>
<span class="fragment current-only focus-text" data-code-focus="31-33">Use state to get & methods to set</span>
<span class="fragment current-only focus-text" data-code-focus="42-46">Consumer gets flag from context</span>
<span class="fragment current-only focus-text" data-code-focus="48-52">Consumer gets context from context</span>
<span class="fragment current-only focus-text" data-code-focus="57-61">App uses the LocaleSwitcher Provider</span>
<span class="fragment current-only focus-text" data-code-focus="58-60">Inside the Provider are the Consumers</span>

------

## Use Cases

<!-- .slide: data-title="Context API" data-state="zeroTopX" -->

* Reduce Prop Drilling<!-- .element: class="fragment" -->
* Theming<!-- .element: class="fragment" -->
* Localization<!-- .element: class="fragment" -->
* <!-- .element: class="fragment" -->Data Flow ([Unstated](http://unstated.io))

------

<h2>Polyfill <a style="text-transform: initial;" href="https://github.com/jamiebuilds/create-react-context">create-react-context</a></h2>

<!-- .slide: data-title="Context API" data-state="zeroTop" -->

```js
import createReactContext from "create-react-context";

const DateContext = createReactContext(new Date(2018, 3, 1));

const DateProvider = ({children}) =>
  <DateContext.Provider value={new Date()}>
    {children}
  </DateContext.Provider>;

const App = () => <DateContext.Consumer>
  {date => <h1>Today is {date.toLocaleDateString()}</h1>}
</DateContext.Consumer>;

ReactDOM.render(
  <DateProvider><App /></DateProvider>,
  document.getElementById("⚛️")
);
```

<span class="fragment current-only focus-text" data-code-focus="1,3">Use createReactContext from polyfill</span>
<span class="fragment current-only focus-text" data-code-focus="5-17">Rest of the code is the same API</span>

------

## Don't Worry...

<!-- .slide: data-title="Context API" data-state="zeroTopx" -->

> The old context API will keep working for all React 16.x releases, so you will have time to migrate.

------

## Resources

<!-- .slide: data-title="Context API" data-state="resources" -->

* [RFC to React: New Version of Context](https://github.com/reactjs/rfcs/blob/master/text/0002-new-version-of-context.md)
* [Unstated: Context API based State Management](http://unstated.io) - State so simple
* [Polyfill: create-react-context](https://github.com/jamiebuilds/create-react-context)