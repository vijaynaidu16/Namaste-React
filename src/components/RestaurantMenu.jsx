import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
      const response = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId=721102&submitAction=ENTER"
      );
      const data = await response.json();
      console.log(data);
      setResInfo(data);
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resInfo?.data?.cards[0]?.card?.card?.info?.name}</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biriyani</li>
        <li>Burger</li>
        <li>Diet coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
