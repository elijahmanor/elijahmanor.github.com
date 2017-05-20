import React from "react";
import FlipCard from "react-flipcard";

import './Jokes.css';

const URL = "https://rawgit.com/elijahmanor/cyberpun/master/jokes.json";

export default class Jokes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { jokes: [] };
  }
  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(jokes => {
        jokes = jokes.filter(j => j.question).slice(0, 12);
        this.setState({ jokes });
      });
  }
  render() {
    return (
      <div className="Jokes">
        {this.state.jokes.map(joke => {
          return (
            <FlipCard>
              <div>
                <div>{joke.question}</div>
              </div>
              <div>{joke.answer}</div>
            </FlipCard>
          );
        })}
      </div>
    );
  }
}
