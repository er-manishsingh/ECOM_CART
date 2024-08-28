import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constant";

const initialState = {
  cardData: [],
};

export default function cardItems(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cardData: [...state.cardData, action.data],
      };

    case REMOVE_FROM_CART:
      console.log("Trying to remove:", action.data.name);
      console.log("Current items in cart:", state.cardData.map(item => item.name));

      // Find the index of the item to be removed
      const index = state.cardData.findIndex(item => item.name === action.data.name);
      console.log("Found index:", index);

      if (index >= 0) {
        // Return a new state with the item removed
        return {
          ...state,
          cardData: [
            ...state.cardData.slice(0, index),
            ...state.cardData.slice(index + 1)
          ],
        };
      } else {
        console.log("Item not found in cart");
      }
      return state;

    default:
      return state;
  }
}
