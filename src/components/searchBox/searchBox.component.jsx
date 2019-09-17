import React from 'react';

import './searchBox.styles.css';

const searchBox = ({ placeholder, handleChange }) => {
    return (
        <input
            class = 'search'
            type="search"
            placeholder={placeholder}
            onChange={handleChange} />
    );
}

export default searchBox;
