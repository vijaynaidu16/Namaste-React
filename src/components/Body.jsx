import resList from "../utils/mockData";
import RestuarantCard from "./RestaurantCard";

const Body = () => {
  let listOfRestuarants = [
    {
      data: {
        id: "744531",
        name: "KFC",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas, Burger"],
        avgRating: "3.8",
        deliveryTime: 30,
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
      },
    },
    {
      data: {
        id: "744532",
        name: "Domino's Pizza",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas, Burger"],
        avgRating: "4.5",
        deliveryTime: 30,
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
      },
    },
    {
      data: {
        id: "744533",
        name: "Mc Donalds",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas, Burger"],
        avgRating: "4.9",
        deliveryTime: 30,
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
      },
    },
  ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            listOfRestuarants = listOfRestuarants.filter(
              (res) => res.data.avgRating > 4
            );
            console.log(listOfRestuarants);
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
