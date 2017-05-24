export const defaultCode = `
const higherOrderComponent = (BaseComponent) => 
  class WrapperComponent extends React.Component {
    constructor() {
      super();
      this.handleKey = this.handleKey.bind(this);
    }
    componentDidMount() {
      document.addEventListener(
        'keydown', this.handleKey
      );
    }
    componentWillUnmount() {
      document.removeEventListener(
        'keydown', this.handleKey
      );
    }
    handleKey(e) {
      this.setState({ keyCode: e.which });
    }
    render() {
      return <BaseComponent
        {...this.props} {...this.state}
      />;
    }
  };

const SimpleComponent = ({keyCode}) =>
  <h1>Simple Component {keyCode}</h1>;

const EnhancedComponent =
  higherOrderComponent(SimpleComponent);

const App = () => <EnhancedComponent />;

render(<App />, mountNode);
`;
