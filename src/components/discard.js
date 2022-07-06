import React from "react";
import "./css/style.css";

function Discard(){
    return(
      <div className="row">
      <div className="column" style={{width:"25%"}}>

      <div className="card">
        <img className="card-img-top" 
        src="https://www.posist.com/restaurant-times/wp-content/uploads/2016/12/restaurant-delivery-orders-1024x683.jpg" 
        alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Order Online..</h5>
          <p className="card-text">Stay home and order to your doorstep</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>


     
      <div className="column" style={{width:"25%"}}>

      <div className="card">
        <img className="card-img-top" 
        src="https://www.oyster.com/wp-content/uploads/sites/35/2019/05/the-waterfront-restaurant-v11901811-1440-1024x683.jpg'" 
        alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">Dining Out..</h5>
          <p className="card-text">View the city's favourite dining venues</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>

     
      <div className="column" style={{width:"25%"}}>

      <div className="card">
        <img className="card-img-top" 
        src="https://cdn.vox-cdn.com/thumbor/FcMyzfqY_7E58-nLRsQpg2WXlSY=/0x0:1800x1200/1200x800/filters:focal(756x456:1044x744)/cdn.vox-cdn.com/uploads/chorus_image/image/69749089/Sachi3_by_Daniel_Swartz.0.jpg" 
        alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">Nightlife and Clubs..</h5>
          <p className="card-text">Stay home and order to your doorstep</p>
          <a href="#" className="btn btn-primary">Explore the city's top nightlife outlets</a>
        </div>
      </div>
      </div>
      </div> 
     
    )
}
export default Discard;