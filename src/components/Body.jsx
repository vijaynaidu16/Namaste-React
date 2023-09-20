import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestuarantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestuarants, setlistOfRestuarant] = useState(resList);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    console.log(json);
    setlistOfRestuarant(
      // json.data.cards[2].data.data.cards
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  // async function getRestaurants() {
  //   try {
  //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //   const json = await data.json()
  //     console.log(json)
  //     setRestaurantList(json?.data?.cards[2]?.card?.card.gridElements.infoWithStyle.restaurants);
  //     filterSetRestaurantList(json?.data?.cards[2]?.card?.card.gridElements.infoWithStyle.restaurants);
  //     } catch (error) {
  //     console.log("some error has occured " + error)
  //   }

  // }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = (listOfRestuarants = listOfRestuarants.filter(
              (res) => res.data.avgRating > 4
            ));
            setlistOfRestuarant(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {listOfRestuarants.map((restaurant, index) => (
          <RestuarantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
