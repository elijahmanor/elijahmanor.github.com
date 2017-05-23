import React from "react";

export default class Tweet extends React.Component {
  componentDidMount() {
    window.twttr.widgets.load();
  }
  render() {
    return (
      <blockquote className="twitter-tweet">
        {this.props.children}
      </blockquote>
    );
  }
}
