import { RootState } from './../store';
import { CartState } from './cart.reducer';
import { CartItem } from './cart.type';
import { createSelector } from 'reselect';

const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems: CartItem[]) =>
    cartItems.reduce((total, product) => total + product.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems: CartItem[]) =>
    cartItems.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    )
);
