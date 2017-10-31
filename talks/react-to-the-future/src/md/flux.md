<!--
{
  "className": "Slide--title"
}
-->

# Flux

---

# Why?

> "We found that two-way data bindings led to cascading updates, where changing one object led to another object changing, which could also trigger more updates. As applications grew, these cascading updates made it very difficult to predict what would change as the result of one user interaction. When updates can only change data within a single round, the system as a whole becomes more predictable." --https://facebook.github.io/flux/docs/overview.html

---

# Flux

> "Flux is more of a pattern than a framework" --[Flux](https://github.com/facebook/flux#requirements)

---

# What is Flux

<div class="mermaid">
  graph LR;

  classDef action fill:#65B9CA,stroke:#FFFFFF,stroke-width:4px;
  classDef dispatcher fill:#444142,stroke:#FFFFFF,stroke-width:4px;
  classDef store fill:#294552,stroke:#FFFFFF,stroke-width:4px;
  classDef view fill:#5FAF6A,stroke:#FFFFFF,stroke-width:4px;

  Action1(Action)-->Dispatcher(Dispatcher);
  Dispatcher-->Store(Store);
  Store-->View(View);
  View-->Action2(Action);
  Action2-->Dispatcher;

  class Action1,Action2 action;
  class Dispatcher dispatcher;
  class Store store;
  class View view;
</div>

---

# A Flux Story

<div class="FluxStory FluxStory--1">
	<div class="FluxStory-actor FluxStory--actionCreator">The action creator</div>
	<div class="FluxStory-actor FluxStory--dispatcher">The dispatcher</div>
	<div class="FluxStory-actor FluxStory--store">The store</div>
	<div class="FluxStory-actor FluxStory--controllerView">The controller view</div>
	<div class="FluxStory-actor FluxStory--view">The view</div>
</div>


<small>[A cartoon guide to Flux](https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#.yr9pjvwjt) by [@linclark](https://twitter.com/linclark)</small>

---

# A Flux Story

<div class="FluxStory FluxStory--2">
	<div class="FluxStory-actor FluxStory--actionCreator">The action creator</div>
	<div class="FluxStory-actor FluxStory--dispatcher">The dispatcher</div>
	<div class="FluxStory-actor FluxStory--store">The store</div>
	<div class="FluxStory-actor FluxStory--controllerView">The controller view</div>
	<div class="FluxStory-actor FluxStory--view">The view</div>
</div>


<small>[A cartoon guide to Flux](https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#.yr9pjvwjt) by [@linclark](https://twitter.com/linclark)</small>

---

# A Flux Story

<div class="FluxStory FluxStory--3">
	<div class="FluxStory-actor FluxStory--actionCreator">The action creator</div>
	<div class="FluxStory-actor FluxStory--dispatcher">The dispatcher</div>
	<div class="FluxStory-actor FluxStory--store">The store</div>
	<div class="FluxStory-actor FluxStory--controllerView">The controller view</div>
	<div class="FluxStory-actor FluxStory--view">The view</div>
</div>


<small>[A cartoon guide to Flux](https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#.yr9pjvwjt) by [@linclark](https://twitter.com/linclark)</small>

---

# A Flux Story

<div class="FluxStory FluxStory--4">
	<div class="FluxStory-actor FluxStory--actionCreator">The action creator</div>
	<div class="FluxStory-actor FluxStory--dispatcher">The dispatcher</div>
	<div class="FluxStory-actor FluxStory--store">The store</div>
	<div class="FluxStory-actor FluxStory--controllerView">The controller view</div>
	<div class="FluxStory-actor FluxStory--view">The view</div>
</div>


<small>[A cartoon guide to Flux](https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#.yr9pjvwjt) by [@linclark](https://twitter.com/linclark)</small>

---

# A Flux Story

<div class="FluxStory FluxStory--5">
	<div class="FluxStory-actor FluxStory--actionCreator">The action creator</div>
	<div class="FluxStory-actor FluxStory--dispatcher">The dispatcher</div>
	<div class="FluxStory-actor FluxStory--store">The store</div>
	<div class="FluxStory-actor FluxStory--controllerView">The controller view</div>
	<div class="FluxStory-actor FluxStory--view">The view</div>
</div>

<small>[A cartoon guide to Flux](https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#.yr9pjvwjt) by [@linclark](https://twitter.com/linclark)</small>

---

# A Flux Story

<div class="FluxStory FluxStory--6">
	<div class="FluxStory-actor FluxStory--actionCreator">The action creator</div>
	<div class="FluxStory-actor FluxStory--dispatcher">The dispatcher</div>
	<div class="FluxStory-actor FluxStory--store">The store</div>
	<div class="FluxStory-actor FluxStory--controllerView">The controller view</div>
	<div class="FluxStory-actor FluxStory--view">The view</div>
</div>

<small>[A cartoon guide to Flux](https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#.yr9pjvwjt) by [@linclark](https://twitter.com/linclark)</small>

---

# Flux Galore

<div class="Split">
  <div class="Split-column">
    <ul>
      <li>[Facebook's Flux](https://github.com/facebook/flux)</li>
      <li>[Fluxible by Yahoo](http://fluxible.io)</li>
      <li>[Reflux](https://github.com/spoike/refluxjs)</li>
      <li>[Alt](https://github.com/goatslacker/alt)</li>
      <li>[McFly](https://github.com/kenwheeler/mcfly)</li>
      <li>[Flummox](https://github.com/acdlite/flummox)</li>
    </ul>
  </div>
  <div class="Split-column">
    <ul>
    <li>[Lux](https://github.com/LeanKit-Labs/lux.js)</li>
    <li>[Material Flux](https://github.com/azu/material-flux)</li>
    <li>[Marty.js](http://martyjs.org)</li>
    <li>[Fluxxor](http://fluxxor.com)</li>
    <li>[Delorean.js](http://deloreanjs.com)</li>
    <li>[Redux](https://github.com/rackt/redux)</li>
    </ul>
  </div>
</div>

[Flux Comparison](https://github.com/voronianski/flux-comparison)

---

# What Do I Use?

## Reflux, Lux.js, and Redux

---

# Redux

<div class="mermaid">
  graph LR;

  classDef action fill:#65B9CA,stroke:#FFFFFF,stroke-width:4px;
  classDef store fill:#2E4551,stroke:#FFFFFF,stroke-width:4px;
  classDef view fill:#5FAF6A,stroke:#FFFFFF,stroke-width:4px;
  classDef reducers fill:#444242,stroke:#FFFFFF,stroke-width:4px;

  Action(Action)-->Reducers("Reducer(s)");
  Reducers-- updates -->Store(Store);
  Store-- subscribes -->View(View);
  View-- dispatches -->Action;

  class Action action;
  class Reducers reducers;
  class Store store;
  class View view;
</div>

---

[Redux Dev Tools](https://github.com/gaearon/redux-devtools)


<img src="./img/redux-devtools.gif" style="height: 600px;" />

---

# These Slides are React & Redux!

<img src="./img/dog-fooding.gif" style="height: 600px;" />

---

# Index (`Index.js`)

<!--
{
  "className": "Slide--static"
}
-->

```
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Slides from './Slides';

const App = () => <Slides />;

render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/:index" component={App} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
```

---

<!--
{
  "className": "Slide--static"
}
-->

# Slides (`Slides.js`)

```
import React from 'react';
import Slide from './Slide';
import { connect } from 'react-redux';
import { getSlide, getCount } from './reducers';
import * as actions from './actions';
import { Redirect, withRouter } from 'react-router';

class Slides extends React.Component {
  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentWillMount() {
    this.props.fetchSlides();
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown(e) {
    const { decrement, increment, history } = this.props;
    if (e.which === 37) {
      decrement(history);
    } else if (e.which === 39) {
      increment(history);
    }
  }
  render() {
    const { slide = {}, index = 0, count = 0 } = this.props;
    return (
      <section>
        <Slide slide={slide} index={index} count={count} />
      </section>
    );
  }
}

const mapStateToProps = (state, { match }) => {
  const { index = 0 } = match.params;
  return {
    slide: getSlide(state, index),
    count: getCount(state),
    index: parseInt(index),
  };
};

Slides = withRouter(connect(mapStateToProps, actions)(Slides));

export default Slides;
```

---

<!--
{
  "className": "Slide--static"
}
-->

# Slide (`Slide.js`)

```
import React from 'react';

import './Slide.css';

export default function Slide({ slide, count, index }) {
  return (
    slide &&
    <div className="Slide">
      <div dangerouslySetInnerHTML={{ __html: slide }} />
      <footer>{index + 1} of {count}</footer>
    </div>
  );
}
```

---

<!--
{
  "className": "Slide--static"
}
-->

# Actions (`actions/index.js`)

```
import getSlides from '../api/slidesApi';

export const fetchSlides = () => (dispatch, getState) => {
  dispatch({
    type: 'FETCH_SLIDES_PENDING',
  });

  return getSlides().then(
    (slides) => {
      dispatch({
        type: 'FETCH_SLIDES_FULFILLED',
        response: slides,
      });
    },
    (error) => {
      dispatch({
        type: 'FETCH_SLIDES_REJECTED',
        response: [],
      });
    },
  );
};

export const decrement = history => (dispatch, getState) => {
  dispatch({
    type: 'SLIDE_DECREMENT',
  });
  const { slides } = getState();
  history.push(`/${slides.index}`);
};

export const increment = history => (dispatch, getState) => {
  dispatch({
    type: 'SLIDE_INCREMENT',
  });
  const { slides } = getState();
  history.push(`/${slides.index}`);
};
```

---

<!--
{
  "className": "Slide--static"
}
-->

# Example Markdown (`what-is-react.js`)

```
export default \`
# What is React?

It's a library for building dynamic web applications.

---

## Why should you learn React?

1. Declarative & Composable
2. Virtual DOM
3. One-Way Data Flow
\`;
```

---

<!--
{
  "className": "Slide--static"
}
-->

# API (`api/slidesApi.js`)

```
import MarkdownIt from 'markdown-it';

import introduction from '../markdown/introduction.js';
import whatIsReact from '../markdown/what-is-react.js';
import conclusion from '../markdown/conclusion.js';

const md = new MarkdownIt();

const SETS = [introduction, whatIsReact, conclusion];

export default function getSlides() {
  return Promise.resolve(
    SETS.reduce((memo, markdown) => {
      const markup = md.render(markdown);
      return memo.concat(markup.split('<hr>'));
    }, []),
  );
}
```

---

<!--
{
  "className": "Slide--static"
}
-->

# Slides Reducer (`slidesReducers.js`)

```
export default (
  state = {
    fetching: false,
    list: [],
    index: 0,
    error: null,
  },
  action,
) => {
  switch (action.type) {
    case 'FETCH_SLIDES_PENDING': {
      return { ...state, fetching: true };
    }
    case 'FETCH_SLIDES_REJECTED': {
      return { ...state, fetching: false, error: action.payload };
    }
    case 'FETCH_SLIDES_FULFILLED': {
      return { ...state, fetching: false, list: action.response };
    }
    case 'SLIDE_DECREMENT': {
      let { index } = state;
      index = index > 0 ? index - 1 : 0;
      return { ...state, index };
    }
    case 'SLIDE_INCREMENT': {
      let { index } = state;
      const length = state.list.length - 1;
      index = index < length ? index + 1 : length;
      return { ...state, index };
    }
    default: {
      return state;
    }
  }
};

export const getSlide = (state, index) => state.list[index];
export const getCount = state => state.list.length;
```

<!--
NOTES:

* https://github.com/voronianski/flux-comparison
* https://github.com/spoike/refluxjs
* https://facebook.github.io/flux/docs/overview.html#content
* http://jonathancreamer.com/what-the-flux/
* http://blog.andrewray.me/flux-for-stupid-people/
* https://ochronus.com/react-reflux-example/
* https://github.com/enaqx/awesome-react#flux-tutorials
-->
