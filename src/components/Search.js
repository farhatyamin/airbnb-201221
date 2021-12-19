import React from "react";
import './Search.css';


function SearchPage() {
    return (
        // <div className="search-box">
        //     <input classname="txt-searc" type="text" name="" placeholder="Type to search"></input>
        //     <a className="Search-btn" href="#">
        //     <i class="fas fa-search"></i>

        //     </a>


        // </div>
        <div className="content">
        <div className="search">
        <input type="text" class="search__input" aria-label="search" placeholder="Search Here"/>
        <button class="search__submit" aria-label="submit search" >Search<i class="fas fa-search"></i></button>
  </div>
</div>
    );
}

export default SearchPage;