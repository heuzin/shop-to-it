import { CartItem } from '../../modals/CartItems';
import { CartAddItem, CartARemoveItem, CART_ADD_ITEM, CART_REMOVE_ITEM } from './cartTypes';

interface State {
    cartItems: CartItem[];
}

const INITIA_STATE: State = {
    cartItems: [],
};

export const cartReducer = (state: State = INITIA_STATE, action: CartAddItem | CartARemoveItem) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;

            const existItem = state.cartItems?.find((cartItem) => cartItem.product === item.product);

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems?.map((cartItem) =>
                        cartItem.product === existItem.product ? item : cartItem,
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems!, item],
                };
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.product !== action.payload),
            };
        default:
            return state;
    }
};
