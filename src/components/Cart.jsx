import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="flex flex-col justify-center items-center p-4 w-1/2 m-auto ">
      <h1 className="font-bold text-xl">Cart</h1>
        <button
          className="bg-orange-600 p-2 m-2 rounded-lg text-white"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
        {cartItems.length == 0 && <h1>Cart is empty add items!!!</h1>}
        <ItemList items={cartItems} />
    </div>
  );
}

export default Cart;
