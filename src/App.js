import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestuarantCard from "./components/RestaurantCard";
import mockData from "./utils/mockData"

const AppLayout = () => {
  return (
    <div class="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
