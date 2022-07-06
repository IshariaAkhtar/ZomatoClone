import React from "react";
import  "./css/styletry.css";

function Try(){
    return(
        <div className="row">
            <div className="hover-zoom"style={{marginLeft:"5%"}}>
  {/* <div className="cardComponents">     */}
<div className="card">
  <img className="card-img-top" 
  src="https://www.posist.com/restaurant-times/wp-content/uploads/2016/12/restaurant-delivery-orders-1024x683.jpg" alt="Card image cap"/>
  <div className="card-body"><h3>Order Online</h3>
    <p className="card-text"> 
    <p>Stay home and order to your doorstep</p>
  </p>
  </div>
{/* </div> */}
</div>
</div>


<div className="hover-zoom"style={{marginLeft:"5%"}}>
<div className="card" >
  <img className="card-img-top" 
  src="https://www.oyster.com/wp-content/uploads/sites/35/2019/05/the-waterfront-restaurant-v11901811-1440-1024x683.jpg"/>
  <div className="card-body"><h3>Dining Out</h3>
    <p className="card-text">View the city's favourite dining venues           </p>
  </div>
</div>
</div>
<div className="hover-zoom"style={{marginLeft:"5%"}}>
<div className="card" >
  <img className="card-img-top" 
  src="https://cdn.vox-cdn.com/thumbor/FcMyzfqY_7E58-nLRsQpg2WXlSY=/0x0:1800x1200/1200x800/filters:focal(756x456:1044x744)/cdn.vox-cdn.com/uploads/chorus_image/image/69749089/Sachi3_by_Daniel_Swartz.0.jpg"/>
  <div className="card-body"> <h3>Nightlife and Clubs</h3>
    <p className="card-text">Explore the city's top nightlife outlets</p>
  </div>
</div>
</div>



</div>
)
}
export default Try;