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
  // console.log(listOfRestuarants);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://api.allorigins.win/raw?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D15.8323892%26lng%3D78.0544946%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // console.log(json);
      // Optional Chaining
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

  const {loggedInUser, setUserName} = useContext(UserContext)

  return listOfRestuarants || [].length > 0 ? (
    <div className="body">
      <div className="filter flex ">
        <div className="search m-4 p-4">
          <input
            placeholder="Search Here"
            type="text"
            className="border border-solid border-black p-1 rounded-lg"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-5 py-2 bg-orange-600 text-white m-4 rounded-lg hover:bg-orange-500"
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
        <div className="m-4 p-4 flex items-center ">
          <button
            className="px-4 py-2 bg-gray-400 text-white rounded-lg"
            onClick={() => {
              let filteredList = listOfRestuarants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setlistOfRestuarant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label>Username:</label>
          <input
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
            className="px-2 border border-black"
          />
        </div>
      </div>
      <div className="flex flex-wrap ">
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

// https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING
export default Body;
