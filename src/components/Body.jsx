import { useState } from "react";
import resList from "../utils/mockData";
import RestuarantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestuarants, setlistOfRestuarant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = (listOfRestuarant = listOfRestuarants.filter(
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
