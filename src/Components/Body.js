import ResturantCard from "./ResturantCard.js";
import { useState,useEffect } from "react";
import Shimmer from "./shimmer";
//import resList from '../utils/mockData';

const Body = () =>{
  //state variable should be declare at the top level
const [listOfRestaurants,setListOfRestaurants] =useState([]);
const[filteredRestaurants,setFilteredRestaurants] =useState([]);

const [searchText,setSearchText] =useState([]);

//Whenever state variable update , reactvtriggers a reconciliation cycle and re-render the component
console.log("Body Rendered");

useEffect(()=>{
    fetchData();
},[]);
const fetchData = async () => {
    const data = await fetch(
         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6006363&lng=88.3840919&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
};
return (listOfRestaurants.length === 0 )? (
    <Shimmer/>
):(
        <div className="body">
            <div className="filter">
              <div className="search">
                <input type="text" className="searchbox" value={
                  searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}/>
                <button onClick={() =>{
                  //filer the resturant cards anf update the UI
                  //searchText
                  console.log(searchText);
                  const filteredResturant = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  setFilteredRestaurants(filteredResturant);
                }}>Search</button>
              </div>
               <button className="filter-btn" onClick={()=>
                {
                  //filter logic here
                   const filteredList=listOfRestaurants.filter(
                  (res)=>res.info.avgRating>4
                  );
                  setListOfRestaurants(filteredList);
                }}
                >
                  Top-Rated Resturant</button>
            </div>
            <div className="res-container">
              {filteredRestaurants.map((restaurants) => (
          <ResturantCard key={restaurants.info.id} resData={restaurants} />
        ))}
               
            </div>

        </div>
    )

}
export default Body; 

 

// import React, { useState, useEffect } from "react";
// import RestaurantCard from "./ResturantCard";
// import Shimmer from "./shimmer";

// const Body = () => {
//   const [listOfRestaurants, setListOfRestaurants] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     console.log("Fetching Swiggy API...");
//     try {
//       setLoading(true);
//       setError(null);

//       const response = await fetch(
//         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6006363&lng=88.3840919&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP Error: ${response.status}`);
//       }

//       const json = await response.json();

//       console.log("Swiggy API Response:", json);

//       // Find the card containing restaurant data
//       const cards = json?.data?.cards || [];

//       let restaurants = [];

//       for (const card of cards) {
//         const foundRestaurants =
//           card?.card?.card?.gridElements?.infoWithStyle?.restaurants;

//         if (foundRestaurants?.length) {
//           restaurants = foundRestaurants;
//           break;
//         }
//       }

//       if (!restaurants.length) {
//         throw new Error("Restaurant data not found in API response");
//       }

//       setListOfRestaurants(restaurants);
//     } catch (error) {
//   console.log("FULL ERROR:", error);
//   console.log("ERROR MESSAGE:", error.message);

//   setError(error.message || "Something went wrong");
// } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // Loading screen
//   //conditional renderring
//   if (loading) {
//     return <Shimmer />;
//   }

//   // Error screen
//   if (error) {
//     return (
//       <div className="error">
//         <h2>Something went wrong!</h2>
//         <p>{error}</p>
//         <button onClick={fetchData}>Try Again</button>
//       </div>
//     );
//   }

//   // Filter top-rated restaurants
//   const handleFilter = () => {
//     const filteredList = listOfRestaurants.filter(
//       (restaurant) => restaurant?.info?.avgRating > 4
//     );

//     setListOfRestaurants(filteredList);
//   };

//   return (
//     <div className="body">
//       <div className="filter">
//         <div className="search">
//           <input type="text" className="searchbox"></input>
//           <button>Search</button>
//         </div>
//         <button
//           className="filter-btn"
//           onClick={handleFilter}
//         >
//           Top-Rated Restaurants
//         </button>
//       </div>

//       <div className="res-container">
//         {listOfRestaurants.map((restaurant) => (
//           <RestaurantCard
//             key={restaurant?.info?.id}
//             resData={restaurant}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;
