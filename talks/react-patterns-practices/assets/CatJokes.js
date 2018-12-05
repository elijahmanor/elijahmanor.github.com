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

const fetchResource = get => WrappedComponent =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { jokes: [] };
    }
    componentDidMount() {
      get(this.props).then(jokes =>
        this.setState({ jokes })
      );
    }
    render() {
      return (
        <WrappedComponent {...this.props} {...this.state} />
      );
    }
  };

// from gist https://gist.github.com/kevinchandler/5867d55f2df364e72355
// const URL =
//   "https://cdn.rawgit.com/kevinchandler/5867d55f2df364e72355/raw/fe68104a9feeda4e8dc7d8788370bc31ffc40781/CatJokes.json";

// const fetchJokes = fetchResource((props) =>
//   fetch(URL).then((response) => response.text()).then((response) => eval(response))
// );

const fetchJokes = fetchResource(props =>
  fetch("https://icanhazdadjoke.com/search?limit=30", {
    headers: {
      Accept: "application/json",
      "User-Agent": "https://codesandbox.io/s/YE3GrJ0BY"
    }
  })
    .then(response => response.json())
    .then(response =>
      response.results.reduce((memo, { joke }) => {
        if (joke.includes("?") && !joke.includes(":")) {
          const [question, answer] = joke.split("?");
          memo.push({ question, answer });
        }
        return memo;
      }, [])
    )
);

const JokesContainer = fetchJokes(Jokes);

export default JokesContainer;
