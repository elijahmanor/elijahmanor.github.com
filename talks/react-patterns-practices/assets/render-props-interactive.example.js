export const defaultCode = `
class NameComponent extends React.Component {
  render() {
    return this.props.children(faker.name.findName());
  }
}

const greetings = ["Hey", "Howdy", "Hello", "Good day"];
class App extends React.Component {
  state = { greeting: "Hello" }
  componentDidMount() {
    this.timeout = window.setInterval(
      () => this.setState({ greeting: _.sample(greetings) }), 5000
    );
  }
  componentWillUnmount() {
    window.clearTimeout(this.timeout);
  }
  render() {
    const { greeting } = this.state;
    const styles = {
      color: "black",
      fontSize: "3rem",
      margin: "1rem 0 0 0"
    };
  
    return <NameComponent>
      {fullName => {
        return <h2 style={styles}>
          {greeting}, {fullName}
        </h2>
      }}
    </NameComponent>
  }
};

render(<App />, mountNode);
`;
