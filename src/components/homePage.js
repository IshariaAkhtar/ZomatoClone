import React from "react";
import "./css/style.css";
import Search from "./search";
import SearchTry from "./searchTry";

function HomePage() {
    return (

        <div className="home">
            <div className="nav">
                <h4 style={{marginLeft:"-10rem",marginRight:"2rem"}}>Login</h4>
                <h4>Sign Up</h4>
            </div>
            <h1 >Zomato</h1>

            <h4 style={{fontSize:"1.6rem"}}>Discover The best Food</h4>
         {/* <div className="dropdown">
 <div className="input-group mb-3">
  <div className="input-group-prepend">
    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Location</button>
    <div className="dropdown-menu">
      <a className="dropdown-item" href="#"/>
      <a className="dropdown-item" href="#">Another action</a>
      <a className="dropdown-item" href="#">Something else here</a>
      <div role="separator" className="dropdown-divider"></div>
      <a className="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
  */}
  {/* <input type="text" name="search" className="asd" placeholder="     Search.."/>
  <i className="fa fa-search"></i> */}
{/* </div>

        </div> */}
        <SearchTry/>
        </div>
     );

}
export default HomePage;
