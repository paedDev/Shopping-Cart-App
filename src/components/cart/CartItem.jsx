import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }
  return (
    <div>
      <div className="flex items-center p-5 justify-center bg-gray-300 mt-5 mb-5 rounded-xl shadow-2xl">
        <div className="flex flex-col space-y-5">
          <img
            src={cartItem?.image}
            alt={cartItem?.title}
            className="h-72 rounded-lg "
          />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-black font-bold">{cartItem?.title}</h1>
            <p className="text-black font-extrabold text-xl">
              ${cartItem?.price}
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleRemoveFromCart}
              className="bg-red-950 text-white border-2 rounded-lg font-bold px-8 py-4  cursor-pointer "
            >
              Remove Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
