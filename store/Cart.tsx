import React, { Dispatch, useReducer, useContext, createContext } from 'react';

/* Type definitions */
export type CartItemType = TProduct & { quantity: number };

export type CartState = {
  [key: string]: CartItemType;
};

export type CartAction = {
  type: 'add' | 'remove' | 'increase' | 'decrease';
  item: TProduct;
  quantity?: number;
};

export type ReducerType = (state: CartState, action: CartAction) => CartState;

const defaultState = {} as CartState;

const CartItemsContext = createContext(defaultState);
const CartDispatchContext = React.createContext(
  (() => {}) as Dispatch<CartAction>
);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer<ReducerType>(cartReducers, defaultState);

  return (
    <CartItemsContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartItemsContext.Provider>
  );
};

const removeItemFromState = (state, item): CartState => {
  const newCartItems = { ...state };
  delete newCartItems[item.id];
  return newCartItems;
};

function cartReducers(
  state: CartState,
  { type, item, quantity: qtyToAdd = 1 }: CartAction
): CartState {
  const existingCartItem = state[item.id];
  switch (type) {
    case 'add':
      return {
        ...state,
        [item.id]: {
          ...item,
          quantity: qtyToAdd,
        },
      };
    case 'remove':
      return removeItemFromState(state, item);
    case 'increase':
      if (existingCartItem) {
        const quantity = existingCartItem.quantity + 1;
        return {
          ...state,
          [item.id]: {
            ...existingCartItem,
            quantity,
          },
        };
      }

      return state;
    case 'decrease':
      if (existingCartItem) {
        const quantity = existingCartItem.quantity - 1;

        if (quantity > 0) {
          return {
            ...state,
            [item.id]: {
              ...existingCartItem,
              quantity,
            },
          };
        } else {
          return removeItemFromState(state, item);
        }
      }

      return state;
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
}
const getCartSubTotal = (sum: number, item: CartItemType) => {
  sum += item.price * item.quantity;
  return sum;
};
const getCartCount = (sum: number, item: CartItemType) => sum + item.quantity;

export const useCart = () => {
  const itemsById = useContext(CartItemsContext);
  const items = Object.values(itemsById);
  const count = items.reduce(getCartCount, 0);
  const subTotal = Number(items.reduce<number>(getCartSubTotal, 0).toFixed(2));

  const isAdded = (id: string) => (itemsById[id] ? true : false);
  const getCartQuantity = (id: string) => itemsById[id].quantity;

  return {
    itemsById,
    items,
    count,
    subTotal,
    isAdded,
    getCartQuantity,
  };
};

export const useCartMutations = () => {
  const dispatch = useContext(CartDispatchContext);

  const addToCart = (product: TProduct, quantity?: number) =>
    dispatch({
      type: 'add',
      item: product,
      quantity,
    });

  const removeFromCart = (product: TProduct) =>
    dispatch({
      type: 'remove',
      item: product,
    });

  const increaseElementQuantity = (product: TProduct) =>
    dispatch({
      type: 'increase',
      item: product,
    });

  const decreaseElementQuantity = (product: TProduct) =>
    dispatch({
      type: 'decrease',
      item: product,
    });

  return {
    addToCart,
    removeFromCart,
    increaseElementQuantity,
    decreaseElementQuantity,
  };
};

export default CartProvider;
