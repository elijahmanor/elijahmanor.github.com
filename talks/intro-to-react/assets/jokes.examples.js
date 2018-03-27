export const defaultCode = `
class Jokes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {jokes: []};
  }
  componentDidMount() {
    fetch("https://rawgit.com/elijahmanor/cyberpun/master/jokes.json")
      .then(response => response.json())
      .then(jokes => this.setState({jokes}));
  }
  render() {
    return (
      <div className="Jokes">
        {this.state.jokes.map(joke => {
          return (
            <FlipCard>
              <div>{joke.question}</div>
              <div>{joke.answer}</div>
            </FlipCard>
          );
        })}
      </div>
    );
  }
}
`.trim();
