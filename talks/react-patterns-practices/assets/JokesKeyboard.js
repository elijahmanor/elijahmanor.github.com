import React from "react";
import FlipCard from "react-flipcard";

import './JokesKeyboard.css';

export function Jokes({ jokes, index }) {
  const joke = jokes.length ? jokes[index] : null;

  return (
    joke &&
    <FlipCard className="Jokes">
      <div>
        <div>{joke.question}</div>
        <footer>{index + 1} of {jokes.length}</footer>
      </div>
      <div>{joke.answer}</div>
    </FlipCard>
  );
}

export default class JokesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { jokes: [], index: 0 };
    this.keyDownHandler = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.keyDownHandler);

    fetch('https://rawgit.com/elijahmanor/cyberpun/master/jokes.json')
      .then(response => response.json())
      .then((jokes) => {
        jokes = jokes.filter(j => j.question);
        this.setState({ jokes });
      });
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDownHandler);
  }
  handleKeyDown(e) {
    console.log( e.which );
    if (e.which === 38) {
      this.decrement();
    } else if (e.which === 40) {
      this.increment();
    }
  }

  increment() {
    const length = this.state.jokes.length - 1;
    this.setState(({ index }) => ({
      index: index < length ? index + 1 : length,
    }));
  }
  decrement() {
    this.setState(({ index }) => ({
      index: index > 0 ? index - 1 : 0,
    }));
  }
  render() {
    const { jokes, index } = this.state;

    return (
      <div className="JokesKeyboard">
        <Jokes jokes={jokes} index={index} />
      </div>
    );
  }
}
