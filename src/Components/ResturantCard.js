// import { CDN_URL } from "../utils/constant";

// const styleCard={
//     backgroundColor: "#f0f0f0",
// };
// const ResturantCard = (props) =>{
//   const {resData}=props;

//   const {
//         cloudinaryImageId,
//         name,
//         cuisines,
//         costForTwo,
//         deliveryTime
//       } = resData?.data;

//     return(
//         <div className="res-card" style={styleCard}>
//             <img className="res-logo" 
//             alt="res-logo" 
//             src={CDN_URL+cloudinaryImageId}
//             />
             
//       <h3>{resData.data.name}</h3>
//       <h4>{resData.data.cuisines.join(', ')}</h4>
//       <h4>{resData.data.avgRating} stars</h4>
//       <h4>₹{resData.data.costForTwo / 100} FOR TWO</h4>
//       <h4>{resData.data.deliveryTime} minutes</h4> 
//         </div>
//     )
    
// }
// export default ResturantCard;


import React from "react";
import { CDN_URL } from "../utils/constant";
const RestaurantCard = ({ resData }) => {
  const { info } = resData;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          info?.cloudinaryImageId
        }
        alt={info?.name || "Restaurant"}
      />

      <h3>{info?.name}</h3>

      <h4>⭐ {info?.avgRating}</h4>

      <h4>{info?.cuisines?.join(", ")}</h4>

      <h4>{info?.costForTwo}</h4>

      <h4>{info?.sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
