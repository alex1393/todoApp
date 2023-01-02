import React, { Component } from "react";
import "./search-panel.css";
export default class SearchPanel extends Component {
  state = {
    searchText: "",
  };

  onTextChange = (e) => {
    this.props.searchElementByText(e.target.value);
    this.setState({
      searchText: e.target.value,
    });
  };

  render() {
    return (
      <input
        className="search-input"
        placeholder={"type to search"}
        onChange={this.onTextChange}
        value={this.state.searchText}
      />
    );
  }
}
