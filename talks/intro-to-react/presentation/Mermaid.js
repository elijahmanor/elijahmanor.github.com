import React, { Component } from "react";
import mermaid, { mermaidAPI } from "mermaid";
import stripIndent from "strip-indent";

export default class Mermaid extends Component {
  state = { diagram: "Loading diagram..." }
  componentDidMount() {
    mermaidAPI.render(this.props.name, stripIndent(this.props.children.toString()), (html) => this.setState({ diagram: html }));
  }
  render() {
    return (
      <div className="mermaid" style={{ margin: "1rem 0", backgroundColor: "#f1ede4" }} dangerouslySetInnerHTML={{ __html: this.state.diagram }} />
    );
  }
}
