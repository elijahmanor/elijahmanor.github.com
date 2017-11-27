import React from "react";
import ReactModal from "react-modal";
import _ from "lodash";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGroups: props.selectedGroups,
      isCheckedAll: props.selectedGroups.length === props.groups.length
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState( {
      isCheckedAll: this.state.selectedGroups.length === nextProps.groups.length
    } );
  }
  handleUpdate = () => {
    this.props.onUpdate(this.state.selectedGroups);
  };
  handleChange = e => {
    const { checked, value } = e.target;
    let { selectedGroups } = this.state;
    selectedGroups = checked ? [...selectedGroups, value] : _.without(selectedGroups, value);
    this.setState({
        selectedGroups,
        isCheckedAll: selectedGroups.length === this.props.groups.length
    });
  };
  handleSelectChange = selectedGroups => {
    this.setState({ selectedGroups });
  };
  handleCheckedAll = e => {
    const { checked } = e.target;
    const selectedGroups = checked ? this.props.groups.map( g => g.name ) : [];
    this.setState( { selectedGroups, isCheckedAll: checked } );
  };
  render() {
    const { isOpen, groups, onClose } = this.props;
    const { selectedGroups, isCheckedAll } = this.state;
    const options = groups.map(group => ({ label: group.name, value: group.name }));

    return (
      <ReactModal
        isOpen={isOpen}
        contentLabel="Basic Modal"
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)"
          },
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "75%",
            width: "75%",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px"
          }
        }}
      >
        <h3 style={ { margin: "0 auto", textAlign: "center" } }>Modules</h3>
        <form
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridColumnGap: "1rem",
            fontFamily: "monospace",
            fontSize: "1.75rem",
            color: "black",
            margin: "0 0 1rem 0"
          }}
        >
            <label style={ { padding: "0 0 0 0.5rem" } }>
                <input
                    type="checkbox"
                    value={"CheckAll"}
                    checked={isCheckedAll}
                    onChange={this.handleCheckedAll}
                />&nbsp;Check All
            </label>
          {groups.map((group, index) => {
            const isChecked = selectedGroups.some(g => g === group.name);
            const styles = {
              padding: "0 0 0 0.5rem",
              backgroundColor: isChecked ? "#FFEB3B" : ""
            };
            return (
              <label key={group.name} style={styles}>
                <input
                  type="checkbox"
                  value={group.name}
                  checked={isChecked}
                  onChange={this.handleChange}
                />&nbsp;{index.toString().padStart(2, "0")}.&nbsp;{group.name}
              </label>
            );
          })}
        </form>
        <div style={{ textAlign: "center" }}>
          <button className="btn" onClick={this.handleUpdate}>Update</button>
          {` `}
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </ReactModal>
    );
  }
}
