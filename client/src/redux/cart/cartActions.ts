import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { Products } from '../../modals/Products';
import { RootState } from '../store';
import { CartAddItem, CartARemoveItem, CART_ADD_ITEM, CART_REMOVE_ITEM } from './cartTypes';

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
