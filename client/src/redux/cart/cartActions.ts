import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { Products } from '../../modals/Products';
import { RootState } from '../store';
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

export const addToCart =
    (id: string, qty: number): ThunkAction<void, RootState, undefined, CartAddItem> =>
    async (dispatch, getState) => {
        const { data } = await axios.get<Products>(`/api/products/${id}`);

        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                countInStock: data.countInStock,
                price: data.price,
                qty,
            },
        });

        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    };

export const removeFromCart =
    (id: string): ThunkAction<void, RootState, undefined, CartARemoveItem> =>
    (dispatch, getState) => {
        dispatch({
            type: CART_REMOVE_ITEM,
            payload: id,
        });

        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    };

export const saveShippingAddress =
    (data: any): ThunkAction<void, RootState, undefined, CartSaveShippingAddress> =>
    (dispatch) => {
        dispatch({
            type: CART_SAVE_SHIPPING_ADDRESS,
            payload: data,
        });

        localStorage.setItem('shippingAddress', JSON.stringify(data));
    };

export const savePaymentMethod =
    (data: any): ThunkAction<void, RootState, undefined, CartSavePaymentMethod> =>
    (dispatch) => {
        dispatch({
            type: CART_SAVE_PAYMENT_METHOD,
            payload: data,
        });

        localStorage.setItem('paymentMethod', JSON.stringify(data));
    };
