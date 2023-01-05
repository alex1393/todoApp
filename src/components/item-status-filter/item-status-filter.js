import React, { Component } from "react";
import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
  render() {
    const { onFilterChange } = this.props;

    return (
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-info"
          onClick={() => onFilterChange("All")}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => onFilterChange("Active")}
        >
          Active
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => onFilterChange("Done")}
        >
          Done
        </button>
      </div>
    );
  }
}
