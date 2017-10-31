import React from "react";
import FlipCard from "react-flipcard";

import "./Jokes.css";

function renderJoke(joke) {
  return (
    <FlipCard>
      <div>
        <div>{joke.question}</div>
      </div>
      <div>{joke.answer}</div>
    </FlipCard>
  );
}

function Jokes({ jokes }) {
  return <div className="Jokes">{jokes.map(joke => renderJoke(joke))}</div>;
}

class JokeResource extends React.Component {
  state = { jokes: [] };
  componentDidMount() {
    window
      .fetch(this.props.url)
      .then(this.props.parser)
      .then(jokes => this.setState({ jokes }));
  }
  render() {
    return this.props.children(this.state.jokes);
  }
}
JokeResource.defaultProps = {
  parser: r => r.json()
};

class JokesContainer extends React.Component {
  render() {
    const url = "https://rawgit.com/elijahmanor/cyberpun/master/jokes.json";
    // const url =
    //   "https://cdn.rawgit.com/kevinchandler/5867d55f2df364e72355/raw/fe68104a9feeda4e8dc7d8788370bc31ffc40781/CatJokes.json";
    // const parser = r => r.text().then(r => eval(r));
    return <JokeResource url={url}>{jokes => <Jokes jokes={jokes} />}</JokeResource>;
  }
}

const App = () => <JokesContainer />;

export default JokesContainer;
