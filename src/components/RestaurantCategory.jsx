import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({ data }) => {
  // console.log(data);
  const [showItem, setshowItem] = useState(false)
  const handleClick = () => {
    setshowItem(!showItem);
  }
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">
          {data.title}({data.itemCards.length})
        </span>
        <span>⬇️</span>
        </div>
        <div className="translate-y-6">
          {showItem && <ItemList items={data.itemCards}/>}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
