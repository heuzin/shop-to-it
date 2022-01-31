import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);
