import React from "react";
import FlipCard from "react-flipcard";

import "./JokesAddBroken.css";

function Jokes({ jokes, index }) {
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

class AddJoke extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { question: { value: q }, answer: { value: a } } = this;
    this.props.onCreate({ question: q, answer: a });
    this.question.value = "";
    this.answer.value = "";
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>New Joke</legend>
          <input type="text" placeholder="Question" ref={(c) => this.question = c} />
          <input type="text" placeholder="Answer" ref={(c) => this.answer = c} />
          <input type="submit" value="Create" />
        </fieldset>
      </form>
    );
  }
}

export default class JokesContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { jokes: [], index: 0 };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);

    fetch("https://rawgit.com/elijahmanor/cyberpun/master/jokes.json")
      .then((response) => response.json())
      .then((jokes) => {
        jokes = jokes.filter((j) => j.question);
        this.setState({ jokes });
      });
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown(e) {
    if (e.which === 38) {
      this.decrement();
    } else if (e.which === 40) {
      this.increment();
    }
  }
  increment() {
    const length = this.state.jokes.length - 1;
    this.setState(({ index }) => ({
      index: index < length ? index + 1 : length
    }));
  }
  decrement() {
    this.setState(({ index }) => ({
      index: index > 0 ? index - 1 : 0
    }));
  }
  handleCreate(joke) {
    this.setState(({ jokes }) => {
      jokes.push(joke);
      return { jokes };
    });
  }
  render() {
    const { jokes, index } = this.state;

    return (
      <div className="JokesAddBroken">
        <Jokes jokes={jokes} index={index} />
        <AddJoke onCreate={this.handleCreate} />
      </div>
    );
  }
}
