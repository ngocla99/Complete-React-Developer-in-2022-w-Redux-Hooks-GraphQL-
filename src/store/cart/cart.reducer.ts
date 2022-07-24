import { AnyAction } from 'redux';
import { setCartItems, setIsCartOpen } from './cart.action';
import { CartItem } from './cart.type';

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};

const INITIAL_CART_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = INITIAL_CART_STATE,
  action: AnyAction
): CartState => {
  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  return state;
};
