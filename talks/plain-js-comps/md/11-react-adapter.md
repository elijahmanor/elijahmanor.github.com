# React Adapter

------

<!-- .slide: data-title="React Adapter" data-state="somestate" data-menu-title="Usage" -->

```html
<!DOCTYPE html>
<html>
<head>
  <title>Giphy</title>
  <link href="./Giphy.css" rel="stylesheet" type="text/css" />
</head>
<body>
  <h1>Giphy jQuery Plugin</h1>

  <div id="app"></div>

  <script src="./Giphy.js"></script>
  <script src="/bundle.js"></script>
</body>
</html>
```

<div class="stretch">
	<p class="fragment current-only focus-text" data-code-focus="5">Link in the CSS for the Giphy library</p>
	<p class="fragment current-only focus-text" data-code-focus="10">DOM Element where React will attach the Application</p>
	<p class="fragment current-only focus-text" data-code-focus="12">Include the Giphy library</p>
	<p class="fragment current-only focus-text" data-code-focus="13">Include the Webpack generated application code</p>
</div>

------

## Webpack

<!-- .slide: data-title="React Adapter" data-state="somestate" -->

```js
var path = require( "path");
var webpack = require( "webpack" );

module.exports = {
	entry: "./src/index.js",
	output: { path: "./src/", filename: "bundle.js" },
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					presets: [ "es2015", "react" ]
				}
			}
		]
	}
};
```
<!-- .element: class="stretch" -->

<p class="fragment current-only focus-text focus-text--scroll" data-code-focus="5">Use the `index.js` file as the starting point</p>
<p class="fragment current-only focus-text focus-text--scroll" data-code-focus="6">Output the results to `bundle.js`</p>
<p class="fragment current-only focus-text focus-text--scroll" data-code-focus="10-11">Run all `js` or `jsx` files through Babel</p>
<p class="fragment current-only focus-text focus-text--scroll" data-code-focus="13-15">Use the Babel `es2015` and `react` presets</p>

------

## Application Component

<!-- .slide: data-title="React Adapter" data-state="somestate" -->

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
import Giphy from "./Giphy";

class App extends React.Component {
	render() {
		return <Giphy rating="pg" />;
	}
}

ReactDOM.render( <App />, document.getElementById( "app" ) );
```

<span class="fragment current-only focus-text" data-code-focus="4">Import the Giphy React Adapter</span>
<span class="fragment current-only focus-text" data-code-focus="8">Render the Adapter passing a `rating` prop</span>
<span class="fragment current-only focus-text" data-code-focus="12">Render the App to an element with ID of `app`</span>

------

## Adapter

<!-- .slide: data-title="React Adapter" data-state="somestate" -->

```js
// Giphy.jsx
import React from "react";
import ReactDOM from "react-dom";
import GiphyLib from "../lib/Giphy.js";

export default class Giphy extends React.Component {
	componentDidMount() {
		const element = ReactDOM.findDOMNode( this );
		const { url, apiKey, rating, encoder, decoder, fetch } = this.props;
		this.giphy = new GiphyLib( element, {
			ajax: { url, apiKey, rating },
			encoder, decoder, fetch
		} );
	}
	render() {
		return ᐸinput /ᐳ;
	}
}

Giphy.propTypes = {
	url: React.PropTypes.string,
	apiKey: React.PropTypes.string,
	rating: React.PropTypes.string,
	encoder: React.PropTypes.func,
	decoder: React.PropTypes.func,
	fetch: React.PropTypes.func
};

Giphy.defaultProps = {
	url: GiphyLib.defaults.ajax.url,
	apiKey: GiphyLib.defaults.ajax.apiKey,
	rating: GiphyLib.defaults.ajax.rating,
	encoder: GiphyLib.defaults.encoder,
	decoder: GiphyLib.defaults.decoder,
	fetch: GiphyLib.defaults.fetch
};
```
<!-- .element: class="stretch" -->

<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="4">Import the Giphy Library</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="6">Export the Giphy React Component Adapter</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="15-17">Render an `input` element, which is needed for the Giphy Library</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="7-14">`componentDidMount` lifecycle hook fires immediately after initial rendering occurs</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="8">Get the raw DOM node for the React Component</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="9">Use ES6 Destructuring to pull out `props`</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="10-13">Create a Giphy object passing in the current DOM node and options from the `props`</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="20-27">`propTypes` describing the types of props passed to component</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="29-36">`defaultProps` that define the default set of properties for a component</span>

Notes:


------

## Resources

<!-- .slide: data-title="React Adapter" data-state="resources" -->

* [Source Code](https://github.com/elijahmanor/framework-independent-javascript-components/tree/master/src/6-react-adapter)

Notes:

https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/
