import React from "react";
import {
  BlockQuote,
  Cite,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
  ComponentPlayground,
  Fill,
  Layout,
  MarkdownSlides,
  Link,
  Markdown,
  Appear
} from "spectacle";
import Battery from "../assets/Battery";
import TextToggle from "../assets/TextToggle";
import CodeSlide from "spectacle-code-slide";
// import slidesMarkdown from "raw-loader!../assets/markdown.md";

export default (theme, images) => [
  <Slide transition={["fade"]} bgColor="black">
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="primary"
    >
      Hooks️
    </Heading>
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="primary"
    >
      Proposal
    </Heading>
    <Appear>
      <Text textColor="quartenary" margin="2rem 0 0 0">
        ️⚠️ This is only a pre-released. Please don't use in
        production️ ⚠️
      </Text>
    </Appear>
  </Slide>,
  <Slide
    bgColor="secondary"
    className="spectacle-content--full"
  >
    <Heading
      size={5}
      caps
      textColor="primary"
      style={{ marginBottom: "0.5rem" }}
    >
      Simple State
    </Heading>
    <TextToggle />
  </Slide>,
  <Slide
    bgColor="secondary"
    className="spectacle-content--full"
  >
    <Heading
      size={5}
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      Class Component (ES6)
    </Heading>
    <CodePane
      lang="jsx"
      theme="dark"
      className="CodePane CodePane--large"
      source={`import React, { Component } from "react";

export default class Playground extends Component {
  constructor(...args) {
    super(...args);
    this.state = { text: "", checked: false };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleCheckedChange = this.handleCheckedChange.bind(this);
  }
  handleTextChange(e) {
    this.setState({ text: e.target.value })
  }
  handleCheckedChange(e) {
    this.setState({ checked: e.target.checked });
  }
  render() {
    const { text, checked } = this.state;
    return (
      <section>
        <input type="text" value={text}
          onChange={this.handleTextChange}
        />
        <input type="checkbox" checked={checked}
          onChange={this.handleCheckedChange}
        />
        <ul>
          <li>{text}</li>
          <li>{checked.toString()}</li>
        </ul>
      </section>
    );
  }
}
`}
      margin="20px auto"
      overflow="overflow"
    />
  </Slide>,
  <Slide
    bgColor="secondary"
    className="spectacle-content--full"
  >
    <Heading
      size={5}
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      Class Component (ES6+)
    </Heading>
    <CodePane
      lang="jsx"
      theme="dark"
      className="CodePane CodePane--large"
      source={`import React, { Component } from "react";

export default class Playground extends Component {
  state = { text: "", checked: false };
  handleTextChange = e =>
    this.setState({ text: e.target.value });
  handleCheckedChange = e =>
    this.setState({ checked: e.target.checked });
  render() {
    const { text, checked } = this.state;
    return (
      <section>
        <input type="text" value={text}
          onChange={this.handleTextChange}
        />
        <input type="checkbox" checked={checked}
          onChange={this.handleCheckedChange}
        />
        <ul>
          <li>{text}</li>
          <li>{checked.toString()}</li>
        </ul>
      </section>
    );
  }
}
`}
      margin="20px auto"
      overflow="overflow"
    />
  </Slide>,
  <Slide
    bgColor="secondary"
    className="spectacle-content--full"
  >
    <Heading
      size={5}
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      Function with useState
    </Heading>
    <CodePane
      lang="jsx"
      theme="dark"
      className="CodePane CodePane--large"
      source={`import React, { useState } from "react";

export default function Playground() {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  return (
    <section>
      <input type="text" value={text}
        onChange={e => setText(e.target.value)}
      />
      <input type="checkbox" checked={checked}
        onChange={e => setChecked(e.target.checked)}
      />
      <ul>
        <li>{text}</li>
        <li>{checked.toString()}</li>
      </ul>
    </section>
  );
}
`}
      margin="20px auto"
      overflow="overflow"
    />
  </Slide>,
  <Slide transition={["fade"]} bgColor="secondary">
    <Heading
      size={3}
      lineHeight={1}
      textColor="primary"
      margin="0 0 2rem 0"
    >
      🤣 Joke Time ⏰
    </Heading>
    <Text
      textColor="quartenary"
      textSize="55"
      margin="0 0 2rem 0"
    >
      q. Why did the react class component feel relieved?
    </Text>
    <Appear>
      <Text
        textColor="quartenary"
        textSize="55"
        margin="0 0 2rem 0"
      >
        a. Because it was now off the hook.
      </Text>
    </Appear>
    <Appear>
      <Text
        textColor="tertiary"
        textSize="55"
        margin="0 0 2rem 0"
      >
        But seriously, don't convert all your apps to
        hooks...
      </Text>
    </Appear>
  </Slide>,
  <Slide
    bgColor="secondary"
    className="spectacle-content--full"
  >
    <Heading
      size={5}
      caps
      textColor="primary"
      style={{ marginBottom: "0.5rem" }}
    >
      Battery Status API
    </Heading>
    <Heading
      size={6}
      caps
      textColor="tertiary"
      style={{ marginBottom: "2rem" }}
    >
      (deprecated, but fun)
    </Heading>
    <Battery />
  </Slide>,
  <Slide
    bgColor="secondary"
    className="spectacle-content--full"
  >
    <Heading
      size={5}
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      Class with setState
    </Heading>
    <CodePane
      lang="jsx"
      theme="dark"
      className="CodePane CodePane--large"
      source={`import React, { Component } from "react";
import Battery from "./Battery";

export default class Playground extends Component {
  constructor(...args) {
    super(...args);
    this.state = { level: 0, charging: false };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    navigator.getBattery().then(bat => {
      this.battery = bat;
      this.battery.addEventListener("levelchange", this.handleChange);
      this.battery.addEventListener("chargingchange", this.handleChange);
      this.handleChange({ target: this.battery });
    });
  }
  componentWillUnmount() {
    this.battery.removeEventListener("levelchange", this.handleChange);
    this.battery.removeEventListener("chargingchange", this.handleChange);
  }
  handleChange({ target: { level, charging } }) {
    this.setState({ level, charging });
  }
  render() {
    return (
      <section>
        <Battery {...this.state} />
      </section>
    );
  }
}
`}
      margin="20px auto"
      overflow="overflow"
    />
  </Slide>,
  <Slide
    bgColor="secondary"
    className="spectacle-content--full"
  >
    <Heading
      size={5}
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      Function with useEffect
    </Heading>
    <CodePane
      lang="jsx"
      theme="dark"
      className="CodePane CodePane--large"
      source={`import React, { useEffect } from "react";
import Battery from "./Battery";

export default function Playground() {
  const [battery, setBattery] = useState({ level: 0, charging: false });
  const handleChange = ({ target: { level, charging } }) =>
    setBattery({ level, charging });

  useEffect(() => {
    let battery;
    navigator.getBattery().then(bat => {
      battery = bat;
      battery.addEventListener("levelchange", handleChange);
      battery.addEventListener("chargingchange", handleChange);
      handleChange({ target: battery });
    });
    return () => {
      battery.removeEventListener("levelchange", handleChange);
      battery.removeEventListener("chargingchange", handleChange);
    };
  }, []);

  return (
    <section>
      <Battery {...battery} />
    </section>
  );
}
`}
      margin="20px auto"
      overflow="overflow"
    />
  </Slide>,
  <Slide
    bgColor="secondary"
    className="spectacle-content--full"
  >
    <Heading
      size={5}
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      Function with Custom Hook
    </Heading>
    <CodePane
      lang="jsx"
      theme="dark"
      className="CodePane CodePane--large"
      source={`import React, { useState, useEffect } from "react";
import Battery from "./Battery";

const useBattery = () => {
  const [battery, setBattery] = useState({ level: 0, charging: false });
  const handleChange = ({ target: { level, charging } }) =>
    setBattery({
      level,
      charging
    });

  useEffect(() => {
    let battery;
    navigator.getBattery().then(bat => {
      battery = bat;
      battery.addEventListener("levelchange", handleChange);
      battery.addEventListener("chargingchange", handleChange);
      handleChange({ target: battery });
    });
    return () => {
      battery.removeEventListener("levelchange", handleChange);
      battery.removeEventListener("chargingchange", handleChange);
    };
  }, []);
  return battery;
};

export default function Playground() {
  const battery = useBattery();
  return (
    <section>
      <Battery {...battery} />
    </section>
  );
}
`}
      margin="20px auto"
      overflow="overflow"
    />
  </Slide>,
  <Slide
    bgColor="secondary"
    className="spectacle-content--full"
  >
    <Heading
      size={5}
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      Function with npm Hook
    </Heading>
    <CodePane
      lang="jsx"
      theme="dark"
      className="CodePane CodePane--large"
      source={`import React from "react";
import Battery from "./Battery";
import { useBattery } from "react-use";

export default function Playground() {
  const battery = useBattery();
  return (
    <section>
      <Battery {...battery} />
    </section>
  );
}
`}
      margin="20px auto"
      overflow="overflow"
    />
  </Slide>,
  // <CodeSlide
  //   transition={[]}
  //   lang="js"
  //   code={require("raw-loader!../assets/jokes-13-recompose-jokesContainer.example")}
  //   ranges={[
  //     { loc: [0, 270], title: "Context API" },
  //     {
  //       loc: [6, 8],
  //       note:
  //         "Import compose, lifecycle, and withHandlers from `recompose`"
  //     },
  //     {
  //       loc: [18, 33],
  //       note:
  //         "compose takes a list of HOCs that all work together"
  //     },
  //     { loc: [19, 20], note: "Add `react-router` support" },
  //     { loc: [20, 21], note: "Connect to `react-redux`" },
  //     {
  //       loc: [18, 33],
  //       note:
  //         "Most of the code we had before moves into the withHandlers or lifecycle HOCs"
  //     },
  //     {
  //       loc: [21, 33],
  //       note:
  //         "Add handleKeyDown handler in the `withHandlers` HOC"
  //     },
  //     {
  //       loc: [33, 48],
  //       note:
  //         "Add some lifecycle hooks with the `likecycle` HOC"
  //     },
  //     {
  //       loc: [34, 37],
  //       note: "Fetch jokes in componentWillMount"
  //     },
  //     {
  //       loc: [37, 42],
  //       note:
  //         "Add keydown event listener in componentDidMount"
  //     },
  //     {
  //       loc: [42, 47],
  //       note:
  //         "Remove keydown event listener in componentWillUnmount"
  //     },
  //     {
  //       loc: [42, 47],
  //       note:
  //         "There are a lot of other HOCs you can use. This was just a sample."
  //     }
  //   ]}
  // />,
  <Slide transition={["fade"]} bgColor="secondary">
    <Heading
      size={3}
      lineHeight={1}
      textColor="primary"
      margin="0 0 2rem 0"
    >
      🤣 Joke Time ⏰
    </Heading>
    <Text
      textColor="quartenary"
      textSize="55"
      margin="0 0 2rem 0"
    >
      q. What does a React proposal mean?
    </Text>
    <Appear>
      <Text
        textColor="quartenary"
        textSize="55"
        margin="0 0 2rem 0"
      >
        a. It means to swallow something hook, line and
        sinker.
      </Text>
    </Appear>
    <Appear>
      <Text
        textColor="quartenary"
        textSize="55"
        margin="0 0 2rem 0"
      >
        But seriously, it's just a proposal...
      </Text>
    </Appear>
  </Slide>,
  <Slide transition={["fade"]} bgColor="secondary">
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="primary"
      margin="0 0 2rem 0"
    >
      Are you Hooked?
    </Heading>
    <Appear>
      <Text
        textColor="quartenary"
        textSize="80"
        margin="0 0 2rem 0"
      >
        🙋‍♀️ 🤷‍♀️ 🙅‍♀️
      </Text>
    </Appear>
  </Slide>
];
