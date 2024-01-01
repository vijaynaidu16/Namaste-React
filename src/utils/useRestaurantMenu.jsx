import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
const useRestaurantMenu =(resId) => {

const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(MENU_API);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      setResInfo(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
    return resInfo;
};

export default useRestaurantMenu;