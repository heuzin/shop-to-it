import { CartItem } from '../../modals/CartItems';
import { ShippingAddress } from '../../modals/ShippingAddress';
import {
    CartAddItem,
    CartARemoveItem,
    CartSavePaymentMethod,
    CartSaveShippingAddress,
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_PAYMENT_METHOD,
    CART_SAVE_SHIPPING_ADDRESS,
} from './cartTypes';

interface CartState {
    paymentMethod: string;
    shippingAddress: ShippingAddress;
    cartItems: CartItem[];
}

const CART_INITIA_STATE: CartState = {
    paymentMethod: '',
    shippingAddress: {} as ShippingAddress,
    cartItems: [],
};

export const cartReducer = (
    state: CartState = CART_INITIA_STATE,
    action: CartAddItem | CartARemoveItem | CartSaveShippingAddress | CartSavePaymentMethod,
) => {
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
        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload,
            };
        case CART_SAVE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload,
            };
        default:
            return state;
    }
};
