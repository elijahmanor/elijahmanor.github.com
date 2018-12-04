import React, { Component } from "react";
import ReactDOM from "react-dom";
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
  MarkdownSlides,
  CodePane,
  Code,
  S
} from "spectacle";
import CodeSlide from "spectacle-code-slide";
import Terminal from "spectacle-terminal";
import PropTypes from "prop-types";

const snippets = {
  helloWorldFunction: {
    code: require("raw-loader!../snippets/hello-world.code"),
    play: require("raw-loader!../snippets/hello-world.play")
  },
  helloWorldFat: {
    code: require("raw-loader!../snippets/hello-world-fat.code")
  },
  helloWorldClass: {
    code: require("raw-loader!../snippets/hello-world-class.code")
  },
  helloWorldLegacy: {
    code: require("raw-loader!../snippets/hello-world-legacy.code")
  },
  helloWorldMigrate: {
    code: require("raw-loader!../snippets/hello-world-migrate.code")
  },
  letsGetDynamic: {
    code: require("raw-loader!../snippets/lets-get-dynamic.code"),
    play: require("raw-loader!../snippets/lets-get-dynamic.play")
  },
  letsGetDynamicDestructure: {
    code: require("raw-loader!../snippets/lets-get-dynamic-destructure.code")
  },
  classProps: {
    code: require("raw-loader!../snippets/class-props.code")
  },
  classPropTypes: {
    code: require("raw-loader!../snippets/class-proptypes.code")
  },
  classPropTypesStage: {
    code: require("raw-loader!../snippets/class-proptypes-stage.code")
  },
  letsLookAtState: {
    code: require("raw-loader!../snippets/lets-look-at-state.code"),
    play: require("raw-loader!../snippets/lets-look-at-state.play")
  },
  letsLookAtStateOverload: {
    code: require("raw-loader!../snippets/lets-look-at-state-overload.code")
  },
  overloadedSetState: {
    code: require("raw-loader!../snippets/overloaded-setstate.code")
  },
  stateStage: {
    code: require("raw-loader!../snippets/state-stage.code")
  },
  eventHandlersBind: {
    code: require("raw-loader!../snippets/event-handlers-bind.code")
  },
  eventHandlersConstructor: {
    code: require("raw-loader!../snippets/event-handlers-constructor.code")
  },
  eventHandlersStage: {
    code: require("raw-loader!../snippets/event-handlers-stage.code")
  },
  eventHandlersInline: {
    code: require("raw-loader!../snippets/event-handlers-inline.code")
  },
  refsToChildren: {
    code: require("raw-loader!../snippets/refs-to-children.code"),
    play: require("raw-loader!../snippets/refs-to-children.play")
  },
  functionGotcha: {
    code: require("raw-loader!../snippets/function-gotcha.code")
  },
  getCurrentNode: {
    code: require("raw-loader!../snippets/get-current-node.code"),
    play: require("raw-loader!../snippets/get-current-node.play")
  },
  dealingWithLists: {
    code: require("raw-loader!../snippets/lists.code"),
    play: require("raw-loader!../snippets/lists.play")
  },
  dealingWithListsES6: {
    code: require("raw-loader!../snippets/lists-es6.code")
  }
};

export default (theme, images) => [
  <Slide id="components" bgColor="secondary">
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="primary"
    >
      Components
    </Heading>
  </Slide>,
  <Slide bgColor="black">
    <Heading caps fit>
      State Machines
    </Heading>
    <BlockQuote>
      <Quote>
        <Heading textColor="primary" size={5}>
          Components are Just State Machines
        </Heading>
        <Text
          textColor="primary"
          textSize={36}
          style={{ margin: "1rem 0" }}
        >
          React thinks of UIs as simple state machines. By
          thinking of a UI as being in various states and
          rendering those states, it's easy to keep your UI
          consistent.
        </Text>
        <Text textColor="primary" textSize={36}>
          In React, you simply update a component's state,
          and then render a new UI based on this new state.
          React takes care of updating the DOM for you in
          the most efficient way.
        </Text>
      </Quote>
      <Cite>
        <Link
          href="https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html#components-are-just-state-machines"
          style={{ display: "inline-block" }}
        >
          <Text textColor="tertiary" textSize={22}>
            Interactivity and Dynamic UIs
          </Text>
        </Link>
      </Cite>
    </BlockQuote>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading caps fit>
      show me the code!
    </Heading>
    <BlockQuote>
      <Quote textSize={52}>
        Talk is cheap. Show me the code.
      </Quote>
      <Cite>
        <Link
          href="http://en.wikiquote.org/wiki/Linus_Torvalds#2000-04"
          style={{ display: "inline-block" }}
        >
          <Text textColor="tertiary" textSize={34}>
            Linus Torvalds
          </Text>
        </Link>
      </Cite>
    </BlockQuote>
    <Image src={images.rightNow.replace("/", "")} />
  </Slide>,
  <CodeSlide
    maxHeight="100vh"
    maxWidth="90vw"
    lang="jsx"
    code={snippets.helloWorldFunction.code}
    ranges={[
      { loc: [0, 10], title: "Hello, world" },
      {
        loc: [2, 5],
        note: "HelloWorld component is just a function!"
      },
      {
        loc: [6, 10],
        note:
          "ReactDOM.render creates the component, starts the framework, and injects HTML into a DOM node."
      }
    ]}
  />,
  <Slide
    maxHeight="100vh"
    maxWidth="90vw"
    bgColor="secondary"
  >
    <Heading caps fit>
      Hello, world
    </Heading>
    <ComponentPlayground
      theme="external"
      scope={{ Terminal }}
      code={snippets.helloWorldFunction.play}
    />
  </Slide>,
  <CodeSlide
    lang="jsx"
    code={snippets.helloWorldFat.code}
    ranges={[
      { loc: [0, 9], title: "Hello, world" },
      {
        loc: [2, 4],
        note:
          "You can even use ECMAScript 2015 (ES6) arrow functions!"
      }
    ]}
  />,
  <CodeSlide
    lang="jsx"
    code={snippets.helloWorldClass.code}
    ranges={[
      { loc: [0, 15], title: "Hello, world" },
      {
        loc: [3, 10],
        note:
          "Can use the ECMAScript 2015 (ES6) class and extend React.Component"
      },
      {
        loc: [4, 9],
        note:
          "The render method is required. You can think of this as your template."
      }
    ]}
  />,
  <CodeSlide
    lang="jsx"
    code={snippets.helloWorldLegacy.code}
    ranges={[
      { loc: [0, 15], title: "Hello, world" },
      {
        loc: [3, 10],
        note:
          "React.createClass is how we defined a component in React v15.4 and below."
      }
    ]}
  />,
  <CodeSlide
    lang="jsx"
    code={snippets.helloWorldMigrate.code}
    ranges={[
      { loc: [0, 15], title: "Hello, world" },
      {
        loc: [1, 3],
        note:
          "After React v15.5+ you can migrate React.createClass to  createReactClass"
      },
      {
        loc: [0, 15],
        note:
          "You can use jscodeshift to migrate your legacy components"
      }
    ]}
  />,
  <Slide bgColor="secondary">
    <Heading caps fit>
      Markup in my JavaScript... WHAT!?
    </Heading>
    <Layout>
      <Fill style={{ marginRight: "0.5rem" }}>
        <Image
          src={images.iAmDeveloperJsx.replace("/", "")}
        />
      </Fill>
      <Fill style={{ marginLeft: "0.5rem" }}>
        <Image
          src={images.ohNoYes.replace("/", "")}
          style={{ minWidth: "100%" }}
        />
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading fit>But Seriously</Heading>
    <Layout>
      <Fill>
        <List textColor="primary">
          <ListItem>
            Templates separate technologies, not concerns
          </ListItem>
          <ListItem>
            Allows you to focus on building components, not
            templates
          </ListItem>
          <ListItem>
            Combining Markup and JavaScript reduces context
            switching
          </ListItem>
        </List>
      </Fill>
      <Fill>
        <BlockQuote>
          <Quote textSize={44}>
            React component is "...a highly cohesive
            building block for UIs loosely coupled with
            other components."
          </Quote>
          <Cite>
            <Link
              href="http://www.slideshare.net/floydophone/react-preso-v2"
              style={{ display: "inline-block" }}
            >
              <Text textColor="tertiary" textSize={24}>
                Pete Hunt
              </Text>
            </Link>
          </Cite>
        </BlockQuote>
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading fit>JSX Compiles Down to JavaScript</Heading>
    <CodePane
      lang="jsx"
      theme="external"
      source={`'use strict';

var HelloWorld = function HelloWorld() {
  return React.createElement(
    'h1',
    null,
    'Hello, world!'
  );
};

ReactDOM.render(
  React.createElement(HelloWorld, null),  
  document.getElementById('root')
);
`}
      margin="20px auto"
      overflow="overflow"
    />
  </Slide>,
  <CodeSlide
    lang="jsx"
    code={snippets.letsGetDynamic.code}
    ranges={[
      { loc: [0, 10], title: "Let's Get Dynamic" },
      {
        loc: [8, 9],
        note:
          "You can pass read-only properties to a React component via its attributes."
      },
      {
        loc: [3, 6],
        note:
          "You can access this data with the props parameter inside of a JavaScript Expression {}"
      }
    ]}
  />,
  <Slide
    maxHeight="100vh"
    maxWidth="90vw"
    bgColor="secondary"
  >
    <Heading caps fit>
      Let's Get Dynamic
    </Heading>
    <ComponentPlayground
      theme="external"
      scope={{ PropTypes }}
      code={snippets.letsGetDynamic.play}
    />
  </Slide>,
  <CodeSlide
    lang="jsx"
    code={snippets.letsGetDynamicDestructure.code}
    ranges={[
      { loc: [0, 11], title: "Props and Destructuring" },
      {
        loc: [3, 6],
        note:
          "You can use ECMAScript 2015 (ES6) destructuring to pick off the  name property from the  props parameter"
      }
    ]}
  />,
  <CodeSlide
    lang="jsx"
    code={snippets.classProps.code}
    ranges={[
      { loc: [0, 18], title: "Props in a Class" },
      {
        loc: [3, 12],
        note:
          "When using a React class you can access  props off the this implicit parameter."
      },
      {
        loc: [7, 8],
        note:
          "Feel free to use destructuring as well here... const { name } = this.props;"
      }
    ]}
  />,
  <CodeSlide
    lang="jsx"
    code={snippets.classPropTypes.code}
    ranges={[
      { loc: [0, 19], title: "PropTypes" },
      {
        loc: [2, 3],
        note:
          "In React 15.5+, import  prop-types instead of  React.PropTypes (migration codemod)"
      },
      {
        loc: [13, 16],
        note:
          "Check the types of the  props during development with propTypes."
      },
      {
        loc: [13, 16],
        note:
          "array, bool, func, number, object, string, node, element, etc..."
      }
    ]}
  />,
  <CodeSlide
    lang="jsx"
    code={snippets.classPropTypesStage.code}
    ranges={[
      { loc: [0, 19], title: "PropTypes Class Field" },
      {
        loc: [5, 8],
        note:
          "Alternataively, you can use a public class field"
      }
    ]}
  />,
  <CodeSlide
    lang="jsx"
    code={snippets.letsLookAtState.code}
    ranges={[
      { loc: [0, 25], title: "Let's Look at State" },
      {
        loc: [4, 8],
        note:
          "Provide default state by assigning object from contructor"
      },
      {
        loc: [15, 16],
        note:
          "Access component state via the  this.state object"
      },
      {
        loc: [16, 22],
        note:
          "Declaratively wire-up delegated Event Handlers via props"
      },
      {
        loc: [18, 19],
        note: "NOTE: Make sure to bind event handler!!!"
      },
      {
        loc: [8, 13],
        note:
          "Update state by calling this.setState passing in difference"
      }
    ]}
  />,
  <Slide
    maxHeight="100vh"
    maxWidth="90vw"
    bgColor="secondary"
  >
    <Heading caps fit>
      Let's Look at State
    </Heading>
    <ComponentPlayground
      theme="external"
      scope={{ PropTypes }}
      code={snippets.letsLookAtState.play}
    />
  </Slide>,
  <Slide bgColor="secondary">
    <Heading caps size={2} textColor="tertiary">
      Déjà Vu
    </Heading>
    <Link
      href="https://twitter.com/iamdevloper/status/567363727176253440"
      style={{ display: "inline-block" }}
    >
      <Image
        src={images.iAmDeveloperOnClick.replace("/", "")}
      />
    </Link>
  </Slide>,
  <CodeSlide
    lang="jsx"
    code={snippets.overloadedSetState.code}
    ranges={[
      { loc: [0, 29], title: "Overloaded setState" },
      {
        loc: [8, 13],
        note:
          "As of React v0.13+ you can pass a callback function to  this.setState. React will pass the current state &  props and you return the new state"
      }
    ]}
  />,
  <CodeSlide
    lang="jsx"
    code={snippets.stateStage.code}
    ranges={[
      { loc: [0, 29], title: "State Class Field" },
      {
        loc: [4, 5],
        note:
          "Instead of using a contructor, you can use a public class field"
      }
    ]}
  />,
  <CodeSlide
    lang="jsx"
    code={snippets.eventHandlersBind.code}
    ranges={[
      { loc: [0, 29], title: "Bind Event Handlers: Bind" },
      {
        loc: [13, 18],
        note:
          "Manually binding event handlers can be slow, annoying, and verbose..."
      },
      {
        loc: [14, 15],
        note: "Thankfully there are other alternatives"
      }
    ]}
  />,
  <CodeSlide
    lang="jsx"
    code={snippets.eventHandlersConstructor.code}
    ranges={[
      {
        loc: [0, 30],
        title: (
          <div>
            <div>Bind Event Handlers</div>
            <div>Constructor</div>
          </div>
        )
      },
      {
        loc: [7, 9],
        note: "Do the binding once in the constructor"
      },
      {
        loc: [18, 22],
        note: "Reference the prebinded event handler"
      }
    ]}
  />,
  <CodeSlide
    lang="jsx"
    code={snippets.eventHandlersStage.code}
    ranges={[
      {
        loc: [0, 29],
        title: (
          <div>
            <div>Bind Event Handlers</div>
            <div>Class Field</div>
          </div>
        )
      },
      {
        loc: [5, 10],
        note:
          "Use the experimental (stage 3) Property Initializer Syntax"
      },
      {
        loc: [13, 17],
        note: "Reference the prebinded event handler"
      }
    ]}
  />,
  <CodeSlide
    lang="jsx"
    code={snippets.eventHandlersInline.code}
    ranges={[
      {
        loc: [0, 29],
        title: (
          <div>
            <div>Bind Event Handlers</div>
            <div>Inline</div>
          </div>
        )
      },
      {
        loc: [13, 18],
        note:
          "Add inline event handler passing along the event argument"
      },
      {
        loc: [14, 15],
        note:
          "This is not preferred as it creates new binding function on each render. Prefer approaches like Constructor or Property Initializer Syntax"
      }
    ]}
  />,
  <Slide bgColor="secondary">
    <Link
      href="https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods"
      style={{ display: "inline-block" }}
    >
      <Text textColor="tertiary">Component LifeCycle</Text>
    </Link>
    <List textColor="primary">
      <Appear>
        <ListItem
          style={{ marginBottom: "1rem" }}
          textSize={32}
        >
          <S type="bold">componentDidMount</S> – Fired once,
          after initial rendering occurs. Can use{" "}
          <Code bgColor="#ccc" textSize={30}>
            ReactDOM.findDOMNode
          </Code>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem
          style={{ marginBottom: "1rem" }}
          textSize={32}
        >
          <S type="bold">componentDidUpdate</S> - Fired
          after the component's updates are made to the DOM
        </ListItem>
      </Appear>
      <Appear>
        <ListItem
          style={{ marginBottom: "1rem" }}
          textSize={32}
        >
          <S type="bold">componentWillReceiveProps</S> –
          Fired when a component is receiving new props. You
          might want to{" "}
          <Code bgColor="#ccc" textSize={30}>
            this.setState
          </Code>{" "}
          depending on the props
        </ListItem>
      </Appear>
      <Appear>
        <ListItem
          style={{ marginBottom: "1rem" }}
          textSize={32}
        >
          <S type="bold">shouldComponentUpdate</S> - Fired
          before rendering when new props or state are
          received.{" "}
          <Code bgColor="#ccc" textSize={30}>
            return false
          </Code>{" "}
          if you know an update isn't needed
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textSize={32}>
          <S type="bold">componentWillUnmount</S> – Fired
          immediately before a component is unmounted from
          the DOM. Good place to remove message listeners or
          general clean up
        </ListItem>
      </Appear>
    </List>
  </Slide>,
  <CodeSlide
    lang="jsx"
    code={snippets.refsToChildren.code}
    ranges={[
      { loc: [0, 33], title: "Reference to Children" },
      {
        loc: [16, 20],
        note:
          "Add ref attribute to element, ref callback receives the DOM element as argument."
      },
      {
        loc: [5, 8],
        note:
          "You can access saved DOM element elsewhere to update it."
      },
      {
        loc: [6, 7],
        note: "CAREFUL: You're working outside of React!"
      }
    ]}
  />,
  <Slide
    maxHeight="100vh"
    maxWidth="90vw"
    bgColor="secondary"
  >
    <Heading caps fit>
      Reference to Children Nodes
    </Heading>
    <ComponentPlayground
      theme="external"
      scope={{ PropTypes, Component }}
      code={snippets.refsToChildren.play}
    />
  </Slide>,
  <CodeSlide
    lang="jsx"
    code={snippets.functionGotcha.code}
    ranges={[
      { loc: [0, 31], title: "Functional Gotcha" },
      {
        loc: [3, 5],
        note: "functional components don't have instances!"
      },
      {
        loc: [14, 16],
        note: "Component passed to ref will be null"
      },
      {
        loc: [7, 12],
        note: "therefore, console.log will be null"
      }
    ]}
  />,
  <CodeSlide
    lang="jsx"
    code={snippets.getCurrentNode.code}
    ranges={[
      { loc: [0, 36], title: "Current DOM Node" },
      { loc: [15, 30], note: "the render method..." },
      { loc: [16, 17], note: "returns a div" },
      {
        loc: [5, 10],
        note:
          "in componentDidMount you can get the top level element with findDOMNode method"
      }
    ]}
  />,
  <Slide
    maxHeight="100vh"
    maxWidth="90vw"
    bgColor="secondary"
  >
    <Heading caps fit>
      Current DOM Node
    </Heading>
    <ComponentPlayground
      theme="external"
      scope={{ PropTypes, Component, ReactDOM }}
      code={snippets.getCurrentNode.play}
    />
  </Slide>,
  <CodeSlide
    lang="jsx"
    code={snippets.dealingWithLists.code}
    ranges={[
      { loc: [0, 50], title: "Dealing with Lists" },
      {
        loc: [6, 12],
        note: "Save off props into state for later use"
      },
      {
        loc: [29, 34],
        note:
          "Map over the names array from state and convert to list items"
      },
      {
        loc: [34, 42],
        note: "Button to Sort and Filter Scotts"
      },
      {
        loc: [12, 17],
        note:
          "Sort the names array and assign back to setState"
      },
      {
        loc: [17, 26],
        note:
          'Filter only names that match "Scott" and then update state'
      }
    ]}
  />,
  <CodeSlide
    lang="jsx"
    code={snippets.dealingWithListsES6.code}
    ranges={[
      { loc: [0, 44], title: "Dealing with Lists: ES6" },
      {
        loc: [6, 10],
        note: "Destructuring & Property Value Shorthand"
      },
      {
        loc: [15, 22],
        note:
          "Arrow function, Implicit Return, includes method"
      },
      {
        loc: [22, 36],
        note:
          "Destructuring, Arrow function, Implicit Return, Property Value Shorthand"
      }
    ]}
  />,
  <Slide
    maxHeight="100vh"
    maxWidth="90vw"
    bgColor="secondary"
  >
    <Heading caps fit>
      Dealing with Lists
    </Heading>
    <ComponentPlayground
      theme="external"
      scope={{ PropTypes, Component, ReactDOM }}
      code={snippets.dealingWithLists.play}
    />
  </Slide>,
  <Slide bgColor="secondary">
    <Heading caps fit>
      It's Just JavaScript
    </Heading>
    <Layout>
      <Fill style={{ marginRight: "0.5rem" }}>
        <Link
          href="https://twitter.com/ryanflorence/status/577685415919898625"
          style={{ display: "inline-block" }}
        >
          <Image
            src={images.ryanFlorenceJavaScript.replace(
              "/",
              ""
            )}
          />
        </Link>
      </Fill>
      <Fill style={{ marginLeft: "0.5rem" }}>
        <Image
          src={images.fastTyping.replace("/", "")}
          style={{ minWidth: "100%" }}
        />
      </Fill>
    </Layout>
  </Slide>
  //   MarkdownSlides`
  // # Legacy Mixins

  // <div class="Split">
  //   <div class="Split-column Split-column--70">
  //     <pre class="language-jsx language--clean language--small"><code>
  // var SetIntervalMixin = {
  //   componentWillMount: function() { this.set = []; },
  //   setInterval: function() {
  //     this.set.push(
  //       window.setInterval.apply(null, arguments)
  //     );
  //   },
  //   componentWillUnmount: function() {
  //     this.set.forEach(clearInterval);
  //   }
  // };

  // var TickTock = React.createClass({
  //   mixins: [SetIntervalMixin],
  //   getInitialState: function() { return { seconds: 0 } },
  //   componentDidMount: function() {
  //     this.setInterval(this.tick, 1000);
  //   },
  //   tick: function() {
  //     this.setState({seconds: this.state.seconds + 1});
  //   },
  //   render: function() {
  //     return &lt;p&gt;
  //       Running for {this.state.seconds} seconds.
  //     &lt;/p&gt;;
  //   }
  // });

  // ReactDOM.render(
  //   &lt;TickTock /&gt;,
  //   document.getElementById('example')
  // );</code></pre>
  //   </div>
  //   <div class="Split-column Split-column--30">
  //     <iframe height='468' scrolling='no' src='//codepen.io/elijahmanor/embed/pPqEZP/?height=468&theme-id=0&default-tab=result' data-online='//codepen.io/elijahmanor/embed/pPqEZP/?height=468&theme-id=0&default-tab=result' data-offline='./pens/codepen_RPRdmg/index.html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/RPRdmg/'>RPRdmg</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
  //     </iframe>
  //   </div>
  // </div>

  // ---

  // # Legacy Mixins

  // <div class="Split">
  //   <div class="Split-column Split-column--70">
  //     <pre data-line="1,14,17" class="language-jsx language--clean language--small"><code>
  // var SetIntervalMixin = {
  //   componentWillMount: function() { this.set = []; },
  //   setInterval: function() {
  //     this.set.push(
  //       window.setInterval.apply(null, arguments)
  //     );
  //   },
  //   componentWillUnmount: function() {
  //     this.set.forEach(clearInterval);
  //   }
  // };

  // var TickTock = React.createClass({
  //   mixins: [SetIntervalMixin],
  //   getInitialState: function() { return { seconds: 0 } },
  //   componentDidMount: function() {
  //     this.setInterval(this.tick, 1000);
  //   },
  //   tick: function() {
  //     this.setState({seconds: this.state.seconds + 1});
  //   },
  //   render: function() {
  //     return &lt;p&gt;
  //       Running for {this.state.seconds} seconds.
  //     &lt;/p&gt;;
  //   }
  // });

  // ReactDOM.render(&lt;TickTock /&gt;,
  //   document.getElementById('example'));</code></pre>
  //   </div>
  //   <div class="Split-column Split-column--30">
  //     <p>1. Define the \`SetIntervalMixin\` Mixin</p>
  //     <p>14. Reference \`SetIntervalMixin\` in the \`mixins\` array</p>
  //     <p>17. Call \`setInterval\` from the mixin</p>
  //   </div>
  // </div>

  // ---

  // # [Mixins Considered Harmful](https://facebook.github.io/react/blog/2016/07/13/mixins-considered-harmful.html)

  // * Introduce Implicit Dependencies
  // * Cause Name Clashes
  // * Cause Snowballing Complexity

  // NOTE: The ES6 \`class\` syntax does not support Mixins

  // ---

  // # Alternate Mixin Solutions

  // * Higher Order Components (HOC)
  // * Decorators (which end up being HOCs)
  // * Render Props (not discussed in this talk)

  // ---

  // # Mixin Alternative: HOC

  // <div class="Split">
  //   <div class="Split-column Split-column--65">
  //     <pre data-line="1,17" class="language-jsx language--clean language--small"><code>
  // const setIntervalHoc = (ComposedComponent) =>
  //   class extends React.Component {
  //     componentWillMount() { this.set = []; }
  //     setInterval() {
  //       this.set.push(
  //         window.setInterval.apply(null, arguments)
  //       );
  //     }
  //     componentWillUnmount() {
  //       this.set.forEach(clearInterval);
  //     }
  //     render() {
  //       return &lt;ComposedComponent
  //         {...this.props}
  //         onSetInterval={::this.setInterval}
  //       /&gt;;
  //     }
  //   };
  // </code></pre>
  //   </div>
  //   <div class="Split-column Split-column--35">
  //     <p>1. Define the \`setIntervalHoc\` function</p>
  //   </div>
  // </div>

  // ---

  // # Mixin Alternative: HOC

  // <div class="Split">
  //   <div class="Split-column Split-column--65">
  //     <pre data-line="4,15" class="language-jsx language--clean language--small"><code>
  // class TickTock extends React.Component {
  //   state = { seconds: 0 };
  //   componentDidMount() {
  //     this.props.onSetInterval(::this.tick, 1000);
  //   }
  //   tick() {
  //     this.setState({seconds: this.state.seconds + 1});
  //   }
  //   render() {
  //     return &lt;p&gt;
  //       Running for {this.state.seconds} seconds.
  //     &lt;/p&gt;;
  //   }
  // }
  // TickTock = setIntervalHoc(TickTock);

  // ReactDOM.render(
  //   &lt;TickTock /&gt;,
  //   document.getElementById('example')
  // );</code></pre>
  //   </div>
  //   <div class="Split-column Split-column--35">
  //     <p>15. Call the \`setIntervalHoc\` passing the component you want to wrap</p>
  //     <p>4. Invoke method passed in by HOC component</p>
  //   </div>
  // </div>

  // ---

  // # Mixin Alternative: Decorator (basically a HOC)

  // <div class="Split">
  //   <div class="Split-column Split-column--65">
  //     <pre data-line="1-3,5,16,23" class="language-jsx language--clean language--small"><code>
  // const setIntervalDecorator = (ComposedComponent) =>
  //   /\* ... same as before ... \*/
  // };

  // @setIntervalDecorator
  // class TickTock extends React.Component {
  //   /\* ... same as before ... \*/
  // }

  // ReactDOM.render(&lt;TickTock /&gt;,
  //   document.getElementById('example'));</code></pre>
  //   </div>
  //   <div class="Split-column Split-column--35">
  //     <p>1-3. Define the \`setIntervalDecorator\` Decorator</p>
  //     <p>5. Decorate your class with \`setIntervalDecorator\`</p>
  //   </div>
  // </div>

  // <!-- # Use PureRenderMixin -->

  // # How Do They Relate to Angular Directives?

  // <div class="Split">
  //   <div class="Split-column Split-column--65">
  //     <pre class="language-javascript language--clean language--small"><code>
  // var module = angular.module('directiveModule');
  // module.directive('fakeReactComponent', function () {
  //   return {
  //     restrict: 'E',    // Element Restricted
  //     scope: {},        // Isolate Scope
  //     transclude: true, // Transcluded
  //     template: '&lt;div class="ReactComponent"&gt;' +
  //       '&lt;ng-transclude&gt;&lt;/ng-transclude&gt;' +
  //     '&lt;/div&gt;'
  //   };
  // });</code></pre>
  //   </div>
  //   <div class="Split-column Split-column--35">
  //     <pre class="language-markup language--clean language--small"><code>
  // &lt;fake-react-component&gt;
  // Hello World!
  // &lt;/fake-react-component&gt;</code></pre>
  //     <ul>
  //       <li>Element Restricted (element, not attribute)</li>
  //       <li>Isolate Scoped<br/> (no inherit parent scope)</li>
  //       <li>Transcluded Directive (yield template inside)</li>
  //     </ul>
  //   </div>
  // </div>
  // `,
  //   MarkdownSlides`
  // # Legacy References

  // <div class="Split">
  //   <div class="Split-column Split-column--70">
  //     <pre data-line="4,10-12" class="language-jsx language--clean language--small"><code>
  // class HelloWorld extends React.Component {
  //   /\* ... constructor ... \*/
  //   componentDidMount() {
  //     this.refs.count.textContent = '42';
  //   }
  //   /\* ... handleClick ... \*/
  //   render() {
  //     return (
  //       &lt;div&gt;
  //         &lt;p&gt;Hello &lt;span ref="count"&gt;
  //           {this.state.count}
  //         &lt;/span&gt;!&lt;/p&gt;
  //         &lt;button onClick={this.handleClick.bind(this)}&gt;
  //           Click Me
  //         &lt;/button&gt;
  //       &lt;/div&gt;
  //     );
  //   }
  // }
  // </code></pre>
  //   </div>
  //   <div class="Split-column Split-column--30">
  //     <p>10-12. String refs are [deprecated](https://facebook.github.io/react/docs/refs-and-the-dom.html#legacy-api-string-refs) and are likely to be removed in a future release</p>
  //     <p>1. References are held off the \`refs\` property on the instance</p>
  //   </div>
  // </div>
  // `
];
