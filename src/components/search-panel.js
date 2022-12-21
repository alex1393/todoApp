import React from "react";
import './search-panel.css';
const SearchPanel = () => {
    const searchText = 'type to search';
    const searchStyle = {
        fontSize: '20px'
    }

    return <input
        style={searchStyle}
        placeholder={searchText}/>
}

export default SearchPanel;