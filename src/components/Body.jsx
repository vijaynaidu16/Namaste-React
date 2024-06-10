import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import axios from "axios";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestuarants, setlistOfRestuarant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5308668&lng=78.4478991&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setlistOfRestuarant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setfilteredRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>You are offline!! Check your internet Connection</h1>;
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestuarants?.length > 0 ? (
    <div className="container mx-auto p-4">
      <div className="filter flex flex-col md:flex-row md:justify-between items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
        <div className="search flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <input
            data-testid="searchInput"
            placeholder="Search Here"
            type="text"
            className="border border-solid border-black p-2 rounded-lg w-full md:w-auto"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            className="px-5 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-500 transition-colors w-full md:w-auto"
            onClick={() => {
              const filteredRestaurant = listOfRestuarants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <button
            className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-colors w-full md:w-auto"
            onClick={() => {
              let filteredList = listOfRestuarants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setlistOfRestuarant(filteredList);
            }}
          >
            Top Restaurants
          </button>
          <div className="flex items-center space-x-2 w-full md:w-auto">
            <label className="font-medium">Username:</label>
            <input
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
              className="px-2 py-1 border border-black rounded-lg w-full md:w-auto"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant?.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <Shimmer />
  );
};

export default Body;
