import React from 'react';
import SearchCSS from './Search.module.css'
import SearchBox from './SearchBox/SearchBox';
export default function Search(){
    return (
        <div className ={SearchCSS["search-bar-div"]}>
            <SearchBox />
        </div>
    );
}