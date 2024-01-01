import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(MENU_API + resId);

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const data = await response.json();
  //     console.log(data);
  //     setResInfo(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.menu;
  const { itemCards } =
    resInfo?.menu;
  // console.log(itemCards);
  // console.log(resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl ">{name}</h1>
      <h3 className="font-bold text-xl">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      {/* <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}- <em>₹{item.card.info.price}</em>
          </li>
        ))}
      </ul> */}
      {categories.map((category) => <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}/>)}
    </div>
  );
};

export default RestaurantMenu;
