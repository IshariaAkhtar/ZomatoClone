import React from "react";

import  "./css/styletry.css";

function Search(){
    return(
        < div className="all">
         <button type="dropdown" className="location_btn" placeholder="Location"/>
      
            <div className="flexx">
               
          <button class="fa fa-search"></button>  
          <input type="text" name="search" className="search" placeholder="Search.."/>
             </div>
             </div>
    )
}
export default Search;

