import React from 'react';

import './search.scss';

const SearchBar = ({ keyword, setKeyword }) => {

    return (
        <input
            className='search-input'
            placeholder='Seacrh for a coin'
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
        />
    )
}

export default SearchBar