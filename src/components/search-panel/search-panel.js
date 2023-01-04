import React, { Component } from "react";
import "./search-panel.css";
export default class SearchPanel extends Component {
  state = {
    term: "",
  };

  onTextChange = (e) => {
    const term = e.target.value;
    this.props.onSearchChange(term);
    this.setState({ term });
  };

  render() {
    return (
      <input
        className="search-input"
        placeholder={"type to search"}
        onChange={this.onTextChange}
        value={this.state.term}
      />
    );
  }
}
