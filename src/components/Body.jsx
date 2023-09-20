import { useEffect, useState } from "react";
// import resList from "../utils/mockData";
import RestuarantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestuarants, setlistOfRestuarant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setlistOfRestuarant(
      // json.data.cards[2].data.data.cards
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return listOfRestuarants.length > 0 ? (
    <div className='body'>
      <div className='filter'>
        <button
          className='filter-btn'
          onClick={() => {
            let filteredList =  listOfRestuarants.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRestuarant(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className='res-container'>
        {listOfRestuarants.map((restaurant) => (
          <RestuarantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Body;