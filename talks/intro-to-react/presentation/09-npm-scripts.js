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
  CodePane,
  Code,
  S
} from "spectacle";

export default (theme, images) => [
  <Slide id="npm-scripts" bgColor="secondary">
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="primary"
    >
      npm scripts
    </Heading>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading
      size={4}
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      Running Scripts
    </Heading>
    <Layout>
      <Fill
        style={{
          marginRight: "0.5rem",
          flexGrow: "0",
          flexBasis: "50%"
        }}
      >
        <CodePane
          lang="json"
          theme="external"
          className="CodePane"
          source={`{
  "name": "myproject",
  "description": "package.json file for myproject",
  "devDependencies": {
    "eslint": "latest"
  },
  "scripts": {
    "lint": "eslint --cache --ext .js --ext .jsx src"
  }
}
`}
          margin="20px auto"
          overflow="overflow"
        />
      </Fill>
      <Fill style={{ leftRight: "0.5rem" }}>
        <div style={{ margin: "1rem" }}>
          <Code bgColor="#ccc" textSize={40}>
            npm run-script lint
          </Code>
        </div>
        <div>
          <Code bgColor="#ccc" textSize={40}>
            npm run lint
          </Code>
        </div>
      </Fill>
    </Layout>
    <Link
      textColor="tertiary"
      href="https://egghead.io/courses/how-to-use-npm-scripts-as-your-build-tool"
    >
      How to Use npm scripts As Your Build Tool
    </Link>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading
      size={4}
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      Shortcut Scripts
    </Heading>
    <Layout>
      <Fill
        style={{
          marginRight: "0.5rem",
          flexGrow: "0",
          flexBasis: "70%"
        }}
      >
        <CodePane
          lang="json"
          theme="external"
          className="CodePane"
          source={`{
  "name": "myproject",
  "devDependencies": {
    "karma": "latest",
    "webpack-dev-server": "latest"
  },
  "scripts": {
    "test": "karma start --log-leve=error karma.config.js --single-run=true",
    "start": "webpack-dev-server --progress --colors --config webpack.dev.config.js",
  }
}
`}
          margin="20px auto"
          overflow="overflow"
        />
      </Fill>
      <Fill style={{ leftRight: "0.5rem" }}>
        <div style={{ margin: "1rem" }}>
          <Code bgColor="#ccc" textSize={42}>
            npm test
          </Code>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <Code bgColor="#ccc" textSize={42}>
            npm start
          </Code>
        </div>
        <div>
          <Code bgColor="#ccc" textSize={42}>
            npm stop
          </Code>
        </div>
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading
      size={4}
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      Pre and Post Hooks
    </Heading>
    <Layout>
      <Fill
        style={{
          marginRight: "0.5rem",
          flexGrow: "0",
          flexBasis: "60%"
        }}
      >
        <CodePane
          lang="json"
          theme="external"
          className="CodePane"
          source={`{
  "name": "myproject",
  "devDependencies": {
    "eslint": "latest"
    "karma": "latest"
  },
  "scripts": {
    "lint": "eslint --cache --ext .js --ext .jsx src",
    "test": "karma start --log-leve=error karma.config.js --single-run=true",
    "pretest": "npm run lint",
    "posttest": "echo 'Finished running tests'"
  }
}
`}
          margin="20px auto"
          overflow="overflow"
        />
      </Fill>
      <Fill style={{ leftRight: "0.5rem" }}>
        <div style={{ margin: "1rem", color: "white" }}>
          <Code bgColor="#ccc" textSize={42}>
            npm test
          </Code>{" "}
          will run...
        </div>
        <List>
          <ListItem>
            <Code bgColor="#ccc" textSize={42}>
              pretest
            </Code>
          </ListItem>
          <ListItem>
            <Code bgColor="#ccc" textSize={42}>
              test
            </Code>
          </ListItem>
          <ListItem>
            <Code bgColor="#ccc" textSize={42}>
              posttest
            </Code>
          </ListItem>
        </List>
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading
      size={4}
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      Passing Arguments
    </Heading>
    <Layout>
      <Fill
        style={{
          marginRight: "0.5rem",
          flexGrow: "0",
          flexBasis: "60%"
        }}
      >
        <CodePane
          lang="json"
          theme="external"
          className="CodePane"
          source={`{
  "name": "myproject",
  "devDependencies": {
    "karma": "latest"
  },
  "scripts": {
    "test": "karma start --log-leve=error karma.config.js --single-run=true",
    "test-nyan": "npm run test -- --reporters nyan"
  }
}
`}
          margin="20px auto"
          overflow="overflow"
        />
      </Fill>
      <Fill style={{ leftRight: "0.5rem" }}>
        <Code
          bgColor="#ccc"
          style={{
            marginTop: "1rem",
            display: "inline-block"
          }}
          textSize={40}
        >
          npm run test-nyan
        </Code>
        <Text textColor="primary" textSize={36}>
          {" "}
          will run...{" "}
        </Text>
        <Code bgColor="#ccc" textSize={40}>
          karma start --log-leve=error karma.config.js
          --single-run=true --reporters nyan
        </Code>
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading
      size={4}
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      Chaining
    </Heading>
    <Layout>
      <Fill
        style={{
          marginRight: "0.5rem",
          flexGrow: "0",
          flexBasis: "60%"
        }}
      >
        <CodePane
          lang="json"
          theme="external"
          className="CodePane"
          source={`{
  "name": "myproject",
  "devDependencies": {
    "eslint": "latest",
    "sass-lint": "latest"
  },
  "scripts": {
    "lint": "npm run eslint && npm run sass-lint",
    "eslint": "eslint --cache --ext .js --ext .jsx src",
    "sass-lint": "sass-lint"
  }
}
`}
          margin="20px auto"
          overflow="overflow"
        />
      </Fill>
      <Fill style={{ leftRight: "0.5rem" }}>
        <div style={{ margin: "1rem", color: "white" }}>
          <Code bgColor="#ccc" textSize={40}>
            npm run lint
          </Code>{" "}
          will run...
        </div>
        <List>
          <ListItem>
            <Code bgColor="#ccc" textSize={40}>
              eslint
            </Code>
          </ListItem>
          <ListItem>
            <Code bgColor="#ccc" textSize={40}>
              sass-lint
            </Code>
          </ListItem>
        </List>
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading
      size={4}
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      Pre-Commit Hooks
    </Heading>
    <Layout>
      <Fill
        style={{
          marginRight: "0.5rem",
          flexGrow: "0",
          flexBasis: "60%"
        }}
      >
        <CodePane
          lang="json"
          theme="external"
          className="CodePane"
          source={`{
  "name": "myproject",
  "devDependencies": {
    "eslint": "latest",
    "sass-lint": "latest",
    "husky": "latest"
  },
  "scripts": {
    "lint": "npm run eslint && npm run sass-lint",
    "eslint": "eslint --cache --ext .js --ext .jsx src",
    "sass-lint": "sass-lint",
    "precommit": "npm run lint"
  }
}
`}
          margin="20px auto"
          overflow="overflow"
        />
      </Fill>
      <Fill style={{ leftRight: "0.5rem" }}>
        <div style={{ margin: "1rem", color: "white" }}>
          <Code bgColor="#ccc" textSize={40}>
            git commit -am "WIP"
          </Code>{" "}
          will run...
        </div>
        <List>
          <ListItem>
            <Code bgColor="#ccc" textSize={40}>
              precommit
            </Code>
          </ListItem>
          <ListItem>
            <Code bgColor="#ccc" textSize={40}>
              lint
            </Code>
          </ListItem>
        </List>
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading
      size={4}
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      npm scripts
    </Heading>
    <CodePane
      lang="json"
      theme="external"
      className="CodePane"
      source={`{
  "scripts": {
    "lint": "npm run eslint && npm run sass-lint",
    "eslint": "eslint --cache --ext .js --ext .jsx src spec",
    "sass-lint": "sass-lint",
    "test-watch": "karma start --log-leve=error karma.config.js",
    "test": "karma start --log-leve=error karma.config.js --single-run=true",
    "start": "webpack-dev-server --progress --colors --config webpack.dev.config.js",
    "build": "webpack --progress --colors --config webpack.dev.config.js",
    "dist": "npm run build -- -p --bail --optimize-minimize --optimize-dedupe",
    "precommit": "npm run lint"
  }
}
`}
      margin="20px auto"
      overflow="overflow"
    />
  </Slide>
];
