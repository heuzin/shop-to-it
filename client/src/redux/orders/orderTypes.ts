import { Action } from 'redux';
import { Order } from '../../modals/Order';
import { OrderDetails } from '../../modals/OrderDetails';

export const ORDER_CREATE_REQUEST = 'ORDER_CREATE_REQUEST';
export const ORDER_CREATE_SUCCESS = 'ORDER_CREATE_SUCCESS';
export const ORDER_CREATE_FAIL = 'ORDER_CREATE_FAIL';

export const ORDER_DETAILS_REQUEST = 'ORDER_DETAILS_REQUEST';
export const ORDER_DETAILS_SUCCESS = 'ORDER_DETAILS_SUCCESS';
export const ORDER_DETAILS_FAIL = 'ORDER_DETAILS_FAIL';

export const ORDER_PAY_REQUEST = 'ORDER_PAY_REQUEST';
export const ORDER_PAY_SUCCESS = 'ORDER_PAY_SUCCESS';
export const ORDER_PAY_FAIL = 'ORDER_PAY_FAIL';
export const ORDER_PAY_RESET = 'ORDER_PAY_RESET';

export const ORDER_LIST_MY_REQUEST = 'ORDER_LIST_MY_REQUEST';
export const ORDER_LIST_MY_SUCCESS = 'ORDER_LIST_MY_SUCCESS';
export const ORDER_LIST_MY_FAIL = 'ORDER_LIST_MY_FAIL';
export const ORDER_LIST_MY_RESET = 'ORDER_LIST_MY_RESET';

export const ORDER_LIST_REQUEST = 'ORDER_LIST_REQUEST';
export const ORDER_LIST_SUCCESS = 'ORDER_LIST_SUCCESS';
export const ORDER_LIST_FAIL = 'ORDER_LIST_FAIL';

export const ORDER_DELIVER_REQUEST = 'ORDER_DELIVER_REQUEST';
export const ORDER_DELIVER_SUCCESS = 'ORDER_DELIVER_SUCCESS';
export const ORDER_DELIVER_FAIL = 'ORDER_DELIVER_FAIL';
export const ORDER_DELIVER_RESET = 'ORDER_DELIVER_RESET';

export interface OrderCreateRequest extends Action<typeof ORDER_CREATE_REQUEST> {}
export interface OrderCreateSuccess extends Action<typeof ORDER_CREATE_SUCCESS> {
    payload: Order;
}
export interface OrderCreateFail extends Action<typeof ORDER_CREATE_FAIL> {
    payload: string;
}

export interface OrderDetailsRequest extends Action<typeof ORDER_DETAILS_REQUEST> {}
export interface OrderDetailsSuccess extends Action<typeof ORDER_DETAILS_SUCCESS> {
    payload: OrderDetails;
}
export interface OrderDetailsFail extends Action<typeof ORDER_DETAILS_FAIL> {
    payload: string;
}

export interface OrderPayRequest extends Action<typeof ORDER_PAY_REQUEST> {}
export interface OrderPaySuccess extends Action<typeof ORDER_PAY_SUCCESS> {}
export interface OrderPayFail extends Action<typeof ORDER_PAY_FAIL> {
    payload: string;
}
export interface OrderPayReset extends Action<typeof ORDER_PAY_RESET> {}

export interface OrderListMyRequest extends Action<typeof ORDER_LIST_MY_REQUEST> {}
export interface OrderListMySuccess extends Action<typeof ORDER_LIST_MY_SUCCESS> {
    payload: OrderDetails[];
}
export interface OrderListMyFail extends Action<typeof ORDER_LIST_MY_FAIL> {
    payload: string;
}
export interface OrderListMyReset extends Action<typeof ORDER_LIST_MY_RESET> {}

export interface OrderListRequest extends Action<typeof ORDER_LIST_REQUEST> {}
export interface OrderListSuccess extends Action<typeof ORDER_LIST_SUCCESS> {
    payload: OrderDetails[];
}
export interface OrderListFail extends Action<typeof ORDER_LIST_FAIL> {
    payload: string;
}

export interface OrderDeliverRequest extends Action<typeof ORDER_DELIVER_REQUEST> {}
export interface OrderDeliverSuccess extends Action<typeof ORDER_DELIVER_SUCCESS> {}
export interface OrderDeliverFail extends Action<typeof ORDER_DELIVER_FAIL> {
    payload: string;
}
export interface OrderDeliverReset extends Action<typeof ORDER_DELIVER_RESET> {}
