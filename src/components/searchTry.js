import React from "react";

import  "./css/styletry.css";

function SearchTry(){
    return(
        < div className="all" style={{"border-radius": "1rem" ,"padding-left":"9px",}} >
                 <div className="dropdown"  >
 <div className="input-group mb-3">
  <div className="input-group-prepend">
    <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style={{"background-color":"white"}}>Location</button>
   
  </div>
 
  {/* <input type="text" name="search" className="asd" placeholder="     Search.."/>
  <i className="fa fa-search"></i> */}
</div>

        </div>
            <div className="flexx">
               
          <button class="fa fa-search"></button>  
          <input type="text" name="search" className="search" placeholder="Search.."/>
             </div>
             </div>
    )
}
export default SearchTry;

