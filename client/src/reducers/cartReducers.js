import {
  CART_ADD_ITEM, CART_ADD_ITEM_FAIL, CART_EMPTY, CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ADD_ITEM:
      //get items from payload, And add this item to the cart
      const item = payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          error: '',
          //update cart items
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        //add new items to the cartItems at the end of list
        return { ...state, error: '', cartItems: [...state.cartItems, item] };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        error: '',
        cartItems: state.cartItems.filter((x) => x.product !== payload),
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: payload };
    case CART_SAVE_PAYMENT_METHOD:
      return { ...state, paymentMethod: payload };
    case CART_ADD_ITEM_FAIL:
      return { ...state, error: payload };
    case CART_EMPTY:
      return { ...state, error: '', cartItems: [] };
    default:
      return state;
  }
};
