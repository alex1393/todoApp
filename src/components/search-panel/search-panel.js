import React, { Component } from "react";
import "./search-panel.css";
export default class SearchPanel extends Component {
  searchText = "type to search";

  render() {
    return <input className="search-input" placeholder={this.searchText} />;
  }
}
