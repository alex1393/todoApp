import React, { Component } from "react";
import "./search-panel.css";
export default class SearchPanel extends Component {
  state = {
    searchText: "",
  };

  render() {
    return (
      <input
        className="search-input"
        placeholder={"type to search"}
        onChange={(e) => {
          const newValue = e.target.value;
          console.log(e.target.value);
          console.log(this.state.searchText);
          this.setState(() => {
            return {
              searchText: newValue,
            };
          });
          this.props.searchElementByText(this.state.searchText);
          console.log(this.state.searchText);
        }}
        value={this.state.searchText}
      />
    );
  }
}
