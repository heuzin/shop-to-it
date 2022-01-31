import { Action } from 'redux';
import { CartItem } from '../../modals/CartItems';
import { Products } from '../../modals/Products';

export const CART_ADD_ITEM = 'CART_ADD_ITEM';
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';

export interface CartAddItem extends Action<typeof CART_ADD_ITEM> {
    payload: CartItem;
}
export interface CartARemoveItem extends Action<typeof CART_REMOVE_ITEM> {
    payload: string;
}
