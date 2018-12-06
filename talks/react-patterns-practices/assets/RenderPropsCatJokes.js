import React from "react";
import FlipCard from "react-flipcard";

import "./Jokes.css";

function renderJoke(joke) {
  return (
    <FlipCard>
      <div>{joke.question}</div>
      <div>{joke.answer}</div>
    </FlipCard>
  );
}

function Jokes({ jokes }) {
  return (
    <div className="Jokes">
      {jokes.map(joke => renderJoke(joke))}
    </div>
  );
}

class JokeResource extends React.Component {
  state = { jokes: [] };
  componentDidMount() {
    const { url, headers, parser } = this.props;
    window
      .fetch(url, { headers })
      .then(parser)
      .then(jokes => this.setState({ jokes }));
  }
  render() {
    return this.props.children(this.state.jokes);
  }
}
JokeResource.defaultProps = {
  parser: r => r.json(),
  headers: {}
};

const headers = {
  Accept: "application/json",
  "User-Agent": "https://codesandbox.io/s/YE3GrJ0BY"
};
const parser = resource =>
  resource.json().then(resource =>
    resource.results.reduce((memo, { joke }) => {
      if (joke.includes("?") && !joke.includes(":")) {
        const [question, answer] = joke.split("?");
        memo.push({ question, answer });
      }
      return memo;
    }, [])
  );
class JokesContainer extends React.Component {
  render() {
    const url =
      "https://icanhazdadjoke.com/search?limit=30";
    return (
      <JokeResource
        url={url}
        headers={headers}
        parser={parser}
      >
        {jokes => <Jokes jokes={jokes} />}
      </JokeResource>
    );
  }
}

const App = () => <JokesContainer />;

export default JokesContainer;
