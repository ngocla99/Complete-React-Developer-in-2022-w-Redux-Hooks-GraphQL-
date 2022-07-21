import { createAction } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.type';

const addCartItem = (cartItems, productToAdd) => {
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

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (product) => product.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return clearCartItem(cartItems, productToRemove);
  }

  return cartItems.map((product) =>
    product.id === productToRemove.id
      ? { ...product, quantity: product.quantity - 1 }
      : product
  );
};

const clearCartItem = (cartItems, productToClear) => {
  return cartItems.filter((product) => product.id !== productToClear.id);
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, productToClear) => {
  const newCartItems = clearCartItem(cartItems, productToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const setIsCartOpen = (boolean) => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
};
