import { Action } from 'redux';
import { Order } from '../../modals/Order';

export const ORDER_CREATE_REQUEST = 'ORDER_CREATE_REQUEST';
export const ORDER_CREATE_SUCCESS = 'ORDER_CREATE_SUCCESS';
export const ORDER_CREATE_FAIL = 'ORDER_CREATE_FAIL';

export interface OrderCreateRequest extends Action<typeof ORDER_CREATE_REQUEST> {}
export interface OrderCreateSuccess extends Action<typeof ORDER_CREATE_SUCCESS> {
    payload: Order;
}
export interface OrderCreateFail extends Action<typeof ORDER_CREATE_FAIL> {
    payload: string;
}
