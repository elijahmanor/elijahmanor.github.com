import React from "react";
import classNames from "classnames";

require("./Terminal.css");

export default class Terminal extends React.Component {
   constructor(props) {
     super(props);
     this.state = { currentLine: 0 };
     this.updateCurrentLine = this.updateCurrentLine.bind(this);
   }

   componentDidMount() {
     document.addEventListener("keydown", this.updateCurrentLine);
   }

   componentWillUnmount() {
     document.removeEventListener("keydown", this.updateCurrentLine);
   }

   updateCurrentLine(e) {
     const {output} = this.props;
     let { currentLine } = this.state;
     if (e.keyCode === 40) { // down
       currentLine = currentLine < output.length - 1 ? ++currentLine : currentLine;
     }
     if (e.keyCode === 38) { // up
       currentLine = currentLine > 0 ? --currentLine : currentLine;
     }
     this.setState({currentLine});
   }

   render() {
     const {output} = this.props;

     return (
         <div className="Terminal">
            <nav className="Terminal-nav">
               <button className="Terminal-button Terminal-button--close"></button>
               <button className="Terminal-button Terminal-button--minimize"></button>
               <button className="Terminal-button Terminal-button--expand"></button>
            </nav>
            <section className="Terminal-main">
               { output.reduce((memo, line, index) => {
                 if (index <= this.state.currentLine) {
                   const classes = classNames("Terminal-line fragment", {
                     "Terminal-line--current": index === this.state.currentLine
                   });
                   memo.push(<div key={ index } className={ classes }>{ line }</div>);
                 }
                 return memo;
               }, [])}
            </section>
         </div>
     );
   }
}

Terminal.propTypes = {
  output: React.PropTypes.array
};
