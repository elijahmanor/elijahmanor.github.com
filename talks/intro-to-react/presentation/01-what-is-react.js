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
  MarkdownSlides,
  Magic,
  CodePane
} from "spectacle";
import Mermaid from "./Mermaid";

export default (theme, images) => ([
  <Slide id="what-is-react" bgColor="secondary">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
        What is
    </Heading>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
        React?
    </Heading>
  </Slide>,
  <Slide bgColor="black">
    <Heading caps fit>What is React?</Heading>
    <BlockQuote>
      <Quote>A JavaScript Library for Building User Interfaces</Quote>
      <Cite>
        <Link href="https://facebook.github.io/react/" style={{ display: "inline-block" }}>
          <Text bold caps textColor="tertiary">React Website</Text>
        </Link>
      </Cite>
    </BlockQuote>
  </Slide>,
  <Slide bgColor="secondary" textColor="primary">
    <Heading caps fit>Who Uses React?</Heading>
    <Layout>
      <Fill>
        <List>
          <ListItem>Atlassian</ListItem>
          <ListItem>BBC</ListItem>
          <ListItem>Codecademy</ListItem>
          <ListItem>Dropbox</ListItem>
          <ListItem>Facebook</ListItem>
          <ListItem>GitHub</ListItem>
          <ListItem>Imgur</ListItem>
          <ListItem>Instagram</ListItem>
        </List>
      </Fill>
      <Fill>
        <List>
          <ListItem>Netflix</ListItem>
          <ListItem>PayPal</ListItem>
          <ListItem>Reddit</ListItem>
          <ListItem>Salesforce</ListItem>
          <ListItem>Venmo</ListItem>
          <ListItem>WhatsApp</ListItem>
          <ListItem>Wired</ListItem>
          <ListItem>Yahoo</ListItem>
        </List>
      </Fill>
    </Layout>
    <Text textColor="primary">Add your own entry to <Link href="https://github.com/facebook/react/wiki/Sites-Using-React" style={{ display: "inline-block" }}>
      <Text bold caps textColor="tertiary">Facebook's Sites Using React Wiki</Text>
    </Link></Text>
  </Slide>,
  <Slide bgColor="black">
    <Heading caps fit>So, It's like Angular or Ember?</Heading>
    <Appear><Heading size={5} textColor="primary" caps>No</Heading></Appear>
    <Appear>
      <BlockQuote>
        <Quote textSize={52}>Lots of people use React as the V in MVC.</Quote>
        <Cite>
          <Link href="https://facebook.github.io/react/" style={{ display: "inline-block" }}>
            <Text textColor="tertiary" textSize={24}>React Website</Text>
          </Link>
        </Cite>
      </BlockQuote>
    </Appear>
  </Slide>,
  <Slide bgColor="black">
    <Heading caps fit>So, It's a Template Library?</Heading>
    <Appear><Heading size={5} textColor="primary" caps>No</Heading></Appear>
    <Appear>
      <BlockQuote>
        <Quote textSize={52}>React components are far more powerful than Angular templates; they should be compared with Angular's directives instead</Quote>
        <Cite>
      Pete Hunt
      (<Link href="http://www.quora.com/Pete-Hunt/Posts/Facebooks-React-vs-AngularJS-A-Closer-Look)" style={{ display: "inline-block" }}>
            <Text textColor="tertiary" textSize={24}>Quora</Text>
          </Link>)
        </Cite>
      </BlockQuote>
    </Appear>
  </Slide>,
  <Slide bgColor="black">
    <Heading caps fit>Why is it Compelling?</Heading>
    <List textColor="primary">
      <ListItem>Declarative & Composable</ListItem>
      <ListItem>Virtual DOM</ListItem>
      <ListItem>One-Way Data Flow</ListItem>
    </List>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading fit>Declarative &amp; Composable</Heading>
    <Layout>
      <Fill style={{ marginRight: "0.5rem" }}>
        <Heading size={5} textColor="primary" margin={10}>
        Imperative: How
        </Heading>
        <CodePane lang="jsx" theme="light" source={`
$('form').on('submit', function(e) {
  e.preventDefault();
  $.ajax({
    url: '/customers',
    type: 'POST',
    data: $(this).serialize(),
    success: function(data) {
      $('.status')
        .append('<h3>' + data + '</h3>');
    }
  });
});
          `}
        margin="20px auto"
        overflow = "overflow"
        />
      </Fill>
      <Fill style={{ leftRight: "0.5rem" }}>
        <Heading size={5} textColor="primary" margin={10}>
        Declarative: What
        </Heading>
        <CodePane
          lang="jsx"
          theme="light"
          source={`
var NoteBox = React.createClass({
  // ... more code ...
  render: function() {
    return <div className="NoteBox">
      <h1>Notes</h1>
      <NoteList data={this.state.data} />
      <NoteForm onPost={this.handlePost} />
    </div>;
  }
});
          `}
          margin="20px auto"
          overflow = "overflow"
        />
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor="black">
    <Heading caps fit>Declarative & Composable</Heading>
    <List textColor="primary">
      <ListItem>React is an Abstraction away from the DOM</ListItem>
      <ListItem>It Simplifies the Mental Model</ListItem>
      <ListItem>Re-render the whole app on every update</ListItem>
      <ListItem>Mix and match components to build UIs</ListItem>
    </List>
  </Slide>,
  <Slide bgColor="black">
    <Heading caps fit>Virtual DOM</Heading>
    <Layout>
      <Fill style={{ marginRight: "0.5rem" }}>
        <List textColor="primary">
          <ListItem>Re-rendering the whole app on every update is not efficient</ListItem>
          <ListItem>The Virtual DOM will only update what is necessary</ListItem>
          <ListItem>It works much like a Gaming Engine</ListItem>
        </List>
      </Fill>
      <Fill style={{ marginLeft: "0.5rem" }}>
        <BlockQuote>
          <Quote textSize={42}>I tend to think of React as Version Control for the DOM</Quote>
          <Cite>AdonisSMU </Cite>
        </BlockQuote>
        <Image src={images.marioSprite.replace("/", "")} />
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor="black">
    <Heading caps fit textColor="quartenary">React Uses a</Heading>
    <Heading caps fit textColor="tertiary">One-Way Data Flow</Heading>
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
    <Text textColor="primary">We will upack this later in the presentation</Text>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading fit>Dangers of a Two-Way Data Flow</Heading>
    <Layout>
      <Fill>
        <BlockQuote>
          <Quote textSize={38}>...you can set the directionality of it to be 2-Way Data Binding. That actually seems to be a good idea until you have a large scale application and then it turns out you have no idea whats going on... and turns out to be an anti-pattern for large apps.</Quote>
          <Cite>
            <Link href="https://www.youtube.com/watch?v=uD6Okha_Yj0#t=1785" style={{ display: "inline-block" }}>
              <Text textColor="tertiary" textSize={24}>Misko Hevery</Text>
            </Link>
          </Cite>
        </BlockQuote>
      </Fill>
      <Fill>
        <Image src={images.twoWayDataFlow.replace("/", "")} style={{ marginBottom: "1rem" }} />
        <Text textSize={24} textColor="primary">Image from <Link href="https://medium.com/@davidsouther/song-flux-e1f9786579f6" style={{ display: "inline-block" }}>
          <Text textColor="tertiary" textSize={24}>David Souther</Text>
        </Link></Text>
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor="black">
    <Heading caps fit>So, Why is it Compelling?</Heading>
    <Heading fit textColor="primary" style={{ margin: "2rem 0" }}>Declarative → Predictable → Confidence → Reliability</Heading>
    <Text textSize={24} textColor="primary">Tom Ochino's <Link href="https://www.youtube.com/watch?v=KVZ-P-ZI6W4#t=868" style={{ display: "inline-block" }}>
      <Text textColor="tertiary" textSize={24}>React.js Conf keynote</Text>
    </Link></Text>
  </Slide>,
  <Slide bgColor="black">
    <Heading caps fit>So, What is the Learning Curve?</Heading>
    <List textColor="primary">
      <ListItem>Learning React? **Easy**</ListItem>
      <ListItem>Learning the Rest? **Intermediate**</ListItem>
    </List>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading fit style={{ marginBottom: "2rem" }}>Getting Started</Heading>
    <Layout style={{ marginTop: "1rem" }}>
      <Fill>
        <Text textSize={38} textColor="primary" style={{ margin: "0 1rem 2rem 0" }}>Once you know the basics (we'll cover those in this talk), then you can get started building locally with the <Link href="https://github.com/facebookincubator/create-react-app" textColor="tertiary" style={{ display: "inline-block" }}>create-react-app</Link> command-line utility.</Text>
        <Text textSize={38} textColor="primary" style={{ marginRight: "1rem" }}>Or, if you just want to tinker online then <Link href="https://codesandbox.io" textColor="tertiary" style={{ display: "inline-block" }}>codesandbox.io</Link> is a great option!</Text>
      </Fill>
      <Fill>
        <iframe src="https://codesandbox.io/embed/92yzpkw2xw?autoresize=1&codemirror=1"
          frameBorder="0"
          style={{ overflow: "hidden", height: "60vh", width: "100%" }}
        />
      </Fill>
    </Layout>
  </Slide>
  /*
  MarkdownSlides`
# Large Scale Applications?

* React scales better with complexity
* Good news is... the main SPA frameworks are influencing each other
* Angular 2x & Ember 2x are moving away from 2-way data binding

---

# Is React Similar to Web Components?

## No

React is abstracted away from the browser, while Web Components will be a native browser feature

> "We’re not going to build React on it because there’s a strong model difference -- imperative in Web Components to declarative in React.  Web Components doesn’t have an idiomatic way to define things like where events go." -—Sebastian [Google Docs](https://docs.google.com/document/d/1QZxArgMwidgCrAbuSikcB2iBxkffH6w0YB0C1qCsuH0/edit)

---

# Can React be used with other JavaScript MVC Frameworks? Yes

* [Improving Angular Rendering Performance](http://mono.software/posts/Improving-AngularJS-long-list-rendering-performance-using-ReactJS/) & [Faster Angular Rendering](http://www.williambrownstreet.net/blog/2014/04/faster-angularjs-rendering-angularjs-and-reactjs/)
* [Using React as Backbone View](http://www.thomasboyt.com/2013/12/17/using-reactjs-as-a-backbone-view.html)

`
*/
]);
