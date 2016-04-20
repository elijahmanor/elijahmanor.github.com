# Angular 2.x Adapter

------

<!-- .slide: data-title="Angular 2.x Adapter" data-state="somestate" data-menu-title="Usage" -->

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Giphy</title>
    <link href="./Giphy.css" rel="stylesheet" type="text/css" />
    <script src="https://code.angularjs.org/2.0.0-beta.15/angular2-polyfills.js"></script>
    <script src="https://code.angularjs.org/tools/system.js"></script>
    <script src="https://code.angularjs.org/tools/typescript.js"></script>
    <script src="config.js"></script>
    <script src="https://code.angularjs.org/2.0.0-beta.15/Rx.js"></script>
    <script src="https://code.angularjs.org/2.0.0-beta.15/angular2.min.js"></script>
    <script src="https://code.angularjs.org/2.0.0-beta.15/http.min.js"></script>
    <script src="./Giphy.js"></script>
    <script>
      System.import( "app" ).catch( console.error.bind( console ) );
    </script>
  </head>
  <body>
    <my-app>
    loading...
    </my-app>
  </body>
</html>
```
<!-- .element: class="stretch" -->

<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="5">Link in the CSS for the Giphy library</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="6-12">Angular 2.x Specific Includes</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="13">Include the Giphy Library</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="15">Kickstart System to import the Angular `app`</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="19-21">Location where Angular will render `my-app`</span>

------

## Config

<!-- .slide: data-title="Angular 2.x Adapter" data-state="somestate" -->

```
// config.ts
System.config( {
  transpiler: 'typescript',
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  map: {
    app: "./src"
  },
  packages: {
    app: {
      main: './main.ts',
      defaultExtension: 'ts'
    }
  }
});
```

<span class="fragment current-only focus-text" data-code-focus="2-16">Give SystemJS some config for the app</span>
<span class="fragment current-only focus-text" data-code-focus="3-6">Use TypeScript</span>
<span class="fragment current-only focus-text" data-code-focus="7-9">The application is located at `./src`</span>
<span class="fragment current-only focus-text" data-code-focus="10-15">The application starts at `./main.ts`</span>

------

## Bootstrap

<!-- .slide: data-title="Angular 2.x Adapter" data-state="somestate" -->

```js
// main.ts
import { bootstrap } from "angular2/platform/browser";
import { App } from "./app";

bootstrap( App, [] ).catch( err => console.error( err ) );
```

<span class="fragment current-only focus-text" data-code-focus="5">Bootstrap the application</span>

------

## Application

<!-- .slide: data-title="Angular 2.x Adapter" data-state="somestate" -->

```js
// app.ts
import { Component } from "angular2/core";
import { GiphyComponent } from "./giphy.component";

@Component({
  selector: 'my-app',
  directives: [ GiphyComponent ],
  template: `
    <div>
      <h3>Hello</h3>
      <my-giphy rating="pg"></my-giphy>
    </div>
  `
})
export class App {}
```

<span class="fragment current-only focus-text" data-code-focus="3">Import the Angular 2.x Component Adapter</span>
<span class="fragment current-only focus-text" data-code-focus="5-15">`App` component uses `my-giphy` adapter</span>
<span class="fragment current-only focus-text" data-code-focus="7">`App` depends on `GiphyComponent`</span>
<span class="fragment current-only focus-text" data-code-focus="8-13">Template that will be rendered in `my-app`</span>
<span class="fragment current-only focus-text" data-code-focus="11">`my-giphy` adapter will be displayed</span>

------

## Adapter

<!-- .slide: data-title="Angular 2.x Adapter" data-state="somestate" -->

```js
// giphy.component.ts
import { Component, ElementRef, OnInit } from "angular2/core";

declare var Giphy: any;

@Component( {
	selector: "my-giphy",
	template: "<input />",
	inputs: [ "rating" ]
} )
export class GiphyComponent {
	constructor( private el:ElementRef ) {}

	ngOnInit():any {
		const input = this.el.nativeElement.querySelector( "input" );
		this.giphy = new Giphy( input, {
			ajax: { rating: this.rating }
		} );
	}
}
```
<!-- .element: class="stretch" -->

<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="4">Declare Giphy since it is global</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="6-20">Angular Giphy Component Adapter</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="6-10">Define the `selector` and `template`</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="12">Create a private property representing the underlying element</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="14-19">On `ngOnInit` grab the `nativeElement` and create an instance of `Giphy`</span>

------

## Resources

<!-- .slide: data-title="Angular 2.x Adapter" data-state="resources" -->

* [Source Code](https://github.com/elijahmanor/framework-independent-javascript-components/tree/master/src/8-angular2-adapter)
