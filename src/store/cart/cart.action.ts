import { ActionWithPayload } from './../../utils/reducer/reducer.utils';
import { CategoryItem } from '../category/category.type';
import { createAction, withMatcher } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.type';
import { CartItem } from './cart.type';

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (product) => product.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((product) =>
      product.id === productToAdd.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (
  cartItems: CartItem[],
  productToRemove: CartItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (product) => product.id === productToRemove.id
  );

  if (existingCartItem && existingCartItem.quantity === 1) {
    return clearCartItem(cartItems, productToRemove);
  }

  return cartItems.map((product) =>
    product.id === productToRemove.id
      ? { ...product, quantity: product.quantity - 1 }
      : product
  );
};

const clearCartItem = (
  cartItems: CartItem[],
  productToClear: CartItem
): CartItem[] => {
  return cartItems.filter((product) => product.id !== productToClear.id);
};

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  productToRemove: CartItem
) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return setCartItems(newCartItems);
};

export const clearItemFromCart = (
  cartItems: CartItem[],
  productToClear: CartItem
) => {
  const newCartItems = clearCartItem(cartItems, productToClear);
  return setCartItems(newCartItems);
};

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const setIsCartOpen = withMatcher((boolean: boolean): SetIsCartOpen => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
});
