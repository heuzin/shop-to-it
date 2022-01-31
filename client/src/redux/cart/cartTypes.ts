import { Action } from 'redux';
import { CartItem } from '../../modals/CartItems';
import { ShippingAddress } from '../../modals/ShippingAddress';

export const CART_ADD_ITEM = 'CART_ADD_ITEM';
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
export const CART_SAVE_SHIPPING_ADDRESS = 'CART_SAVE_SHIPPING_ADDRESS';
export const CART_SAVE_PAYMENT_METHOD = 'CART_SAVE_PAYMENT_METHOD';

export interface CartAddItem extends Action<typeof CART_ADD_ITEM> {
    payload: CartItem;
}
export interface CartARemoveItem extends Action<typeof CART_REMOVE_ITEM> {
    payload: string;
}
export interface CartSaveShippingAddress extends Action<typeof CART_SAVE_SHIPPING_ADDRESS> {
    payload: ShippingAddress;
}
export interface CartSavePaymentMethod extends Action<typeof CART_SAVE_PAYMENT_METHOD> {
    payload: string;
}
