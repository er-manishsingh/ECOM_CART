import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constant";
export const addToCart = (data) => {
  console.log("Action: Add to Cart", data);
  
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeFromCart = (data) => {
  console.log("Action: Remove from Cart", data);
  
  return {
    type: "REMOVE_FROM_CART",
    data: data,
  };
};
