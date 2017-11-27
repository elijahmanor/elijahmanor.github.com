import React from "react";

export default class LocalStorage extends React.Component {
    onChange = e => {
        window.localStorage[ this.props.id ] = e.target.innerHTML;
    };
    render() {
        return <div contentEditable={true} style={ { border: "1px dashed #111" } } onBlur={this.onChange}>
          {window.localStorage[ this.props.id ]}
        </div>
    }
}
  