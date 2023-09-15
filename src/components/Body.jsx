import resList from "../utils/mockData";
import RestuarantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant, index) => (
          <RestuarantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
