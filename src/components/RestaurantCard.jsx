import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = (props) => {
  const {loggedInUser} = useContext(UserContext);
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla,cloudinaryImageId } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-300">
       {/* <label className="absolute m-1 p-2 rounded-lg bg-gray-300 text-white">Promoted</label> */}
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}🌶️</h4>
      <h4>{avgRating}⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{loggedInUser}</h4>
      {/* <h4>{sla.deliveryTime}</h4> */}
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 p-2 rounded-lg bg-black text-white">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
