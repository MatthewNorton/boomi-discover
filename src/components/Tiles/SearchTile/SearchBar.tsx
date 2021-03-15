import * as React from 'react';

/* ########################## */
/* ##### INVIDIUAL TILE Template ##### */
/* ########################## */

const SearchBar = (props: {
    inputValue: string,
    itemSearchOnChange: any,
}) => {
    return (
        <div className="tag-nav-wrapper search-bar">
           <label htmlFor="Bar"></label>
           <input type="text" placeholder="Search" value={props.inputValue} onChange={props.itemSearchOnChange}/>
        </div>
    );
};
export default SearchBar;
