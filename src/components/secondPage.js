import React from "react";
import "./css/style.css";

function SecondPage(){
    return(
        <><div className="row">
  <div className="column" >
      
   <div className="hover-zoom">
    <img src={'https://www.posist.com/restaurant-times/wp-content/uploads/2016/12/restaurant-delivery-orders-1024x683.jpg'}  
    />
    <h2 >Order Online..</h2>
    <p>Stay home and order to your doorstep</p>
  </div>
  </div>
  <div className="column" >
    
   <img src={'https://www.oyster.com/wp-content/uploads/sites/35/2019/05/the-waterfront-restaurant-v11901811-1440-1024x683.jpg'}
    className="hover-zoom"/>
    <h2>Dining Out..</h2>
    <p>View the city's favourite dining venues</p>
  </div>
  <div className="column">
    <img src="https://cdn.vox-cdn.com/thumbor/FcMyzfqY_7E58-nLRsQpg2WXlSY=/0x0:1800x1200/1200x800/filters:focal(756x456:1044x744)/cdn.vox-cdn.com/uploads/chorus_image/image/69749089/Sachi3_by_Daniel_Swartz.0.jpg"
    className="hover-zoom"/>
    <h2>Nightlife and Clubs..</h2>
    <p>Explore the city's top nightlife outlets</p>
  </div>
</div></>

    )
}
export default SecondPage;