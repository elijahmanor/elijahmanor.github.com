// Import React
import React from "react";

import "../assets/react-console-component.css";
import { soundex } from "talisman/phonetics/soundex";
import Parser from "html-react-parser";
import { AllHtmlEntities } from "html-entities";
import Console from "react-console-component";

export default class EchoConsole extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  echo = (text) => {
    const command = null; // this.props.commands.some( c => soundex( c.input ) === soundex( text ) );
    console.log(soundex("hello"));
    console.log("echo", command);
    if (~text.indexOf("hello")) {
      this.console.logX("logx", "hello");
    } else if (~text.indexOf("clear")) {
      this.console.setState({
        acceptInput: true,
        log: []
      });
    } else if (command) {
      if (typeof command.output === "string") {
        this.console.log(command.output);
      } else {
        command.output.forEach((c) => {
          if (typeof c === "string") {
            this.console.log(c);
          } else {
            this.console.logX(c.type, c.message);
          }
        });
      }
    } else {
      this.console.log(text);
    }
    this.console.return();
  };
  promptLabel = () => {
    return `${this.state.count}> `;
  };
  complete = (words, curr, promptText) => {
    const command = this.props.commands[this.state.count];
    this.setState({ count: this.state.count + 1 });
    return command ? [command.input] : [];
  };
  render() {
    return (
      <Console
        ref={(c) => this.console = c}
        handler={this.echo}
        promptLabel={this.promptLabel}
        complete={this.complete}
        welcomeMessage={
          "Welcome to the react-console demo!\nThis is an example of a simple echo console."
        }
        autofocus
      />
    );
  }
}
