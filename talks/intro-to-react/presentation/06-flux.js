import React, { Component } from "react";
import {
  SlideSet,
  BlockQuote,
  Cite,
  Heading,
  Quote,
  Slide,
  Link,
  Image,
  Layout,
  Fill,
  Text,
  Appear,
  List,
  ListItem,
  ComponentPlayground,
  MarkdownSlides
} from "spectacle";
import Mermaid from "./Mermaid";

export default (theme, images) => ([
  <Slide id="flux" bgColor="secondary">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      Flux
    </Heading>
  </Slide>,
  <Slide bgColor="black">
    <Heading caps>Why?</Heading>
    <BlockQuote>
      <Quote textSize={32}>
        We found that two-way data bindings led to cascading updates, where changing one object led to another object changing, which could also trigger more updates. As applications grew, these cascading updates made it very difficult to predict what would change as the result of one user interaction. When updates can only change data within a single round, the system as a whole becomes more predictable.
      </Quote>
      <Cite>
        <Link href="https://facebook.github.io/flux/docs/overview.html" style={{ display: "inline-block" }}>
          <Text textColor="tertiary" textSize={22}>Flux</Text>
        </Link>
      </Cite>
    </BlockQuote>
  </Slide>,
  <Slide bgColor="black">
    <Heading caps>Flux</Heading>
    <BlockQuote>
      <Quote>
      Flux is more of a pattern than a framework
      </Quote>
      <Cite>
        <Link href="https://facebook.github.io/flux/docs/overview.html" style={{ display: "inline-block" }}>
          <Text textColor="tertiary" textSize={22}>Flux</Text>
        </Link>
      </Cite>
    </BlockQuote>
  </Slide>,
  <Slide bgColor="black">
    <Heading caps>What is Flux</Heading>
    <Mermaid name="diagram">
graph LR;

classDef action fill:#65B9CA,stroke:#FFFFFF,stroke-width:4px,color:white;
classDef dispatcher fill:#444142,stroke:#FFFFFF,stroke-width:4px,color:white;
classDef store fill:#294552,stroke:#FFFFFF,stroke-width:4px,color:white;
classDef view fill:#5FAF6A,stroke:#FFFFFF,stroke-width:4px,color:white;

Action1(Action)-->Dispatcher(Dispatcher);
Dispatcher-->Store(Store);
Store-->View(View);
View-->Action2(Action);
Action2-->Dispatcher;

class Action1,Action2 action;
class Dispatcher dispatcher;
class Store store;
class View view;
    </Mermaid>
  </Slide>,
  <Slide bgColor="black" slide={["fade"]}>
    <Heading caps>A Flux Story</Heading>
    <Image src={images.flux1.replace("/", "")} style={{ height: "400px" }} />
    <Text textSize={32} textColor="tertiary">
      <Link textColor="tertiary" href="https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#.yr9pjvwjt" style={{ display: "inline-block" }}>
        A cartoon guide to Flux
      </Link>
      { " by " }
      <Link textColor="tertiary" href="https://twitter.com/linclark" style={{ display: "inline-block" }}>
        @linclark
      </Link>
    </Text>
  </Slide>,
  <Slide bgColor="black" slide={["fade"]}>
    <Heading caps>A Flux Story</Heading>
    <Image src={images.flux2.replace("/", "")} style={{ height: "400px" }} />
    <Text textSize={32} textColor="tertiary">
      <Link textColor="tertiary" href="https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#.yr9pjvwjt" style={{ display: "inline-block" }}>
        A cartoon guide to Flux
      </Link>
      { " by " }
      <Link textColor="tertiary" href="https://twitter.com/linclark" style={{ display: "inline-block" }}>
        @linclark
      </Link>
    </Text>
  </Slide>,
  <Slide bgColor="black" slide={["fade"]}>
    <Heading caps>A Flux Story</Heading>
    <Image src={images.flux3.replace("/", "")} style={{ height: "400px" }} />
    <Text textSize={32} textColor="tertiary">
      <Link textColor="tertiary" href="https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#.yr9pjvwjt" style={{ display: "inline-block" }}>
        A cartoon guide to Flux
      </Link>
      { " by " }
      <Link textColor="tertiary" href="https://twitter.com/linclark" style={{ display: "inline-block" }}>
        @linclark
      </Link>
    </Text>
  </Slide>,
  <Slide bgColor="black" slide={["fade"]}>
    <Heading caps>A Flux Story</Heading>
    <Image src={images.flux4.replace("/", "")} style={{ height: "400px" }} />
    <Text textSize={32} textColor="tertiary">
      <Link textColor="tertiary" href="https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#.yr9pjvwjt" style={{ display: "inline-block" }}>
        A cartoon guide to Flux
      </Link>
      { " by " }
      <Link textColor="tertiary" href="https://twitter.com/linclark" style={{ display: "inline-block" }}>
        @linclark
      </Link>
    </Text>
  </Slide>,
  <Slide bgColor="black" slide={["fade"]}>
    <Heading caps>A Flux Story</Heading>
    <Image src={images.flux5.replace("/", "")} style={{ height: "400px" }} />
    <Text textSize={32} textColor="tertiary">
      <Link textColor="tertiary" href="https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#.yr9pjvwjt" style={{ display: "inline-block" }}>
        A cartoon guide to Flux
      </Link>
      { " by " }
      <Link textColor="tertiary" href="https://twitter.com/linclark" style={{ display: "inline-block" }}>
        @linclark
      </Link>
    </Text>
  </Slide>,
  <Slide bgColor="black">
    <Heading caps>A Flux Story</Heading>
    <Image src={images.flux6.replace("/", "")} style={{ height: "400px" }} />
    <Text textSize={32} textColor="tertiary">
      <Link textColor="tertiary" href="https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#.yr9pjvwjt" style={{ display: "inline-block" }}>
        A cartoon guide to Flux
      </Link>
      { " by " }
      <Link textColor="tertiary" href="https://twitter.com/linclark" style={{ display: "inline-block" }}>
        @linclark
      </Link>
    </Text>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading size={1} caps lineHeight={1} textColor="primary">
      Flux Galore
    </Heading>
    <Layout>
      <Fill style={{ marginRight: "0.5rem" }}>
        <List>
          <ListItem textColor="tertiary"><Link textColor="tertiary" href="https://github.com/goatslacker/alt">Alt</Link></ListItem>
          <ListItem textColor="tertiary"><Link textColor="tertiary" href="http://deloreanjs.com">Delorean.js</Link></ListItem>
          <ListItem textColor="tertiary"><Link textColor="tertiary" href="https://github.com/facebook/flux">Facebook's Flux</Link></ListItem>
          <ListItem textColor="tertiary"><Link textColor="tertiary" href="https://github.com/acdlite/flummox">Flummox</Link></ListItem>
          <ListItem textColor="tertiary"><Link textColor="tertiary" href="http://fluxible.io">Fluxible by Yahoo</Link></ListItem>
          <ListItem textColor="tertiary"><Link textColor="tertiary" href="http://fluxxor.com">Fluxxor</Link></ListItem>
          <ListItem textColor="tertiary"><Link textColor="tertiary" href="https://github.com/LeanKit-Labs/lux.js">Lux</Link></ListItem>
        </List>
      </Fill>
      <Fill style={{ leftRight: "0.5rem" }}>
        <List>
          <ListItem textColor="tertiary"><Link textColor="tertiary" href="http://martyjs.org">Marty.js</Link></ListItem>
          <ListItem textColor="tertiary"><Link textColor="tertiary" href="https://github.com/azu/material-flux">Material Flux</Link></ListItem>
          <ListItem textColor="tertiary"><Link textColor="tertiary" href="https://github.com/kenwheeler/mcfly">McFly</Link></ListItem>
          <ListItem textColor="tertiary"><Link textColor="tertiary" href="https://github.com/mobxjs/mobx">MobX</Link></ListItem>
          <ListItem textColor="tertiary"><Link textColor="tertiary" href="https://github.com/rackt/redux">Redux</Link></ListItem>
          <ListItem textColor="tertiary"><Link textColor="tertiary" href="https://github.com/spoike/refluxjs">Reflux</Link></ListItem>
        </List>
      </Fill>
    </Layout>
    <Link textColor="primary" href="https://github.com/voronianski/flux-comparison">Flux Comparison</Link>
  </Slide>,
  <Slide bgColor="black">
    <Heading fit caps>What Do I Use?</Heading>
    <Text textColor="primary" fit>Reflux, Lux.js, Redux</Text>
  </Slide>,
  <Slide bgColor="black">
    <Heading caps>Redux</Heading>
    <Mermaid name="diagram">
graph LR;

classDef action fill:#65B9CA,stroke:#FFFFFF,stroke-width:4px,color:white;
classDef store fill:#2E4551,stroke:#FFFFFF,stroke-width:4px,color:white;
classDef view fill:#5FAF6A,stroke:#FFFFFF,stroke-width:4px,color:white;
classDef reducers fill:#444242,stroke:#FFFFFF,stroke-width:4px,color:white;

Action(Action)-->Reducers("Reducer(s)");
Reducers-- updates -->Store(Store);
Store-- subscribes -->View(View);
View-- dispatches -->Action;

class Action action;
class Reducers reducers;
class Store store;
class View view;
    </Mermaid>
  </Slide>,
  <Slide bgColor="black">
    <Heading textColor="tertiary" size={3} caps><Link textColor="tertiary" href="https://github.com/gaearon/redux-devtools">Redux Dev Tools</Link></Heading>
    <Image src={images.reduxDevTools.replace("/", "")} style={{ height: "400px" }} />
  </Slide>
//   MarkdownSlides`
// # These Slides are React & Redux!

// <img src="./img/dog-fooding.gif" style="height: 500px;" />

// ---

// # Index (\`Index.js\`)

// <!--
// {
//   "className": "Slide--static"
// }
// -->

// <pre><code>
// import React from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Slides from './Slides';

// const App = () => <Slides />;

// render(
//   <Provider store={store}>
//     <Router>
//       <div>
//         <Route exact path="/" component={App} />
//         <Route path="/:index" component={App} />
//       </div>
//     </Router>
//   </Provider>,
//   document.getElementById('root'),
// );
// </code></pre>

// ---

// <!--
// {
//   "className": "Slide--static"
// }
// -->

// # Slides (\`Slides.js\`)

// <pre><code>
// import React from 'react';
// import Slide from './Slide';
// import { connect } from 'react-redux';
// import { getSlide, getCount } from './reducers';
// import * as actions from './actions';
// import { Redirect, withRouter } from 'react-router';

// class Slides extends React.Component {
//   constructor() {
//     super();
//     this.handleKeyDown = this.handleKeyDown.bind(this);
//   }
//   componentWillMount() {
//     this.props.fetchSlides();
//   }
//   componentDidMount() {
//     document.addEventListener('keydown', this.handleKeyDown);
//   }
//   componentWillUnmount() {
//     document.removeEventListener('keydown', this.handleKeyDown);
//   }
//   handleKeyDown(e) {
//     const { decrement, increment, history } = this.props;
//     if (e.which === 37) {
//       decrement(history);
//     } else if (e.which === 39) {
//       increment(history);
//     }
//   }
//   render() {
//     const { slide = {}, index = 0, count = 0 } = this.props;
//     return (
//       <section>
//         <Slide slide={slide} index={index} count={count} />
//       </section>
//     );
//   }
// }

// const mapStateToProps = (state, { match }) => {
//   const { index = 0 } = match.params;
//   return {
//     slide: getSlide(state, index),
//     count: getCount(state),
//     index: parseInt(index),
//   };
// };

// Slides = withRouter(connect(mapStateToProps, actions)(Slides));

// export default Slides;
// </code></pre>

// ---

// <!--
// {
//   "className": "Slide--static"
// }
// -->

// # Slide (\`Slide.js\`)

// <pre><code>
// import React from 'react';

// import './Slide.css';

// export default function Slide({ slide, count, index }) {
//   return (
//     slide &&
//     <div className="Slide">
//       <div dangerouslySetInnerHTML={{ __html: slide }} />
//       <footer>{index + 1} of {count}</footer>
//     </div>
//   );
// }
// </code></pre>

// ---

// <!--
// {
//   "className": "Slide--static"
// }
// -->

// # Actions (\`actions/index.js\`)

// <pre><code>
// import getSlides from '../api/slidesApi';

// export const fetchSlides = () => (dispatch, getState) => {
//   dispatch({
//     type: 'FETCH_SLIDES_PENDING',
//   });

//   return getSlides().then(
//     (slides) => {
//       dispatch({
//         type: 'FETCH_SLIDES_FULFILLED',
//         response: slides,
//       });
//     },
//     (error) => {
//       dispatch({
//         type: 'FETCH_SLIDES_REJECTED',
//         response: [],
//       });
//     },
//   );
// };

// export const decrement = history => (dispatch, getState) => {
//   dispatch({
//     type: 'SLIDE_DECREMENT',
//   });
//   const { slides } = getState();
//   history.push(\`/\${slides.index}\`);
// };

// export const increment = history => (dispatch, getState) => {
//   dispatch({
//     type: 'SLIDE_INCREMENT',
//   });
//   const { slides } = getState();
//   history.push(\`/\${slides.index}\`);
// };
// </code></pre>

// ---

// <!--
// {
//   "className": "Slide--static"
// }
// -->

// # Example Markdown (\`what-is-react.js\`)
// <pre><code>
// export default \`
// # What is React?

// It's a library for building dynamic web applications.

// ---

// ## Why should you learn React?

// 1. Declarative & Composable
// 2. Virtual DOM
// 3. One-Way Data Flow
// \`;
// </code></pre>

// ---

// <!--
// {
//   "className": "Slide--static"
// }
// -->

// # API (\`api/slidesApi.js\`)

// <pre><code>
// import MarkdownIt from 'markdown-it';

// import introduction from '../markdown/introduction.js';
// import whatIsReact from '../markdown/what-is-react.js';
// import conclusion from '../markdown/conclusion.js';

// const md = new MarkdownIt();

// const SETS = [introduction, whatIsReact, conclusion];

// export default function getSlides() {
//   return Promise.resolve(
//     SETS.reduce((memo, markdown) => {
//       const markup = md.render(markdown);
//       return memo.concat(markup.split('<hr>'));
//     }, []),
//   );
// }
// </code></pre>

// ---

// <!--
// {
//   "className": "Slide--static"
// }
// -->

// # Slides Reducer (\`slidesReducers.js\`)

// <pre><code>
// export default (
//   state = {
//     fetching: false,
//     list: [],
//     index: 0,
//     error: null,
//   },
//   action,
// ) => {
//   switch (action.type) {
//     case 'FETCH_SLIDES_PENDING': {
//       return { ...state, fetching: true };
//     }
//     case 'FETCH_SLIDES_REJECTED': {
//       return { ...state, fetching: false, error: action.payload };
//     }
//     case 'FETCH_SLIDES_FULFILLED': {
//       return { ...state, fetching: false, list: action.response };
//     }
//     case 'SLIDE_DECREMENT': {
//       let { index } = state;
//       index = index > 0 ? index - 1 : 0;
//       return { ...state, index };
//     }
//     case 'SLIDE_INCREMENT': {
//       let { index } = state;
//       const length = state.list.length - 1;
//       index = index < length ? index + 1 : length;
//       return { ...state, index };
//     }
//     default: {
//       return state;
//     }
//   }
// };

// export const getSlide = (state, index) => state.list[index];
// export const getCount = state => state.list.length;
// </code></pre>

// <!--
// NOTES:

// * https://github.com/voronianski/flux-comparison
// * https://github.com/spoike/refluxjs
// * https://facebook.github.io/flux/docs/overview.html#content
// * http://jonathancreamer.com/what-the-flux/
// * http://blog.andrewray.me/flux-for-stupid-people/
// * https://ochronus.com/react-reflux-example/
// * https://github.com/enaqx/awesome-react#flux-tutorials
// -->
// `,
]);
