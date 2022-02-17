import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { Order } from '../../modals/Order';
import { OrderDetails } from '../../modals/OrderDetails';
import { RootState } from '../store';
import {
    OrderCreateFail,
    OrderCreateRequest,
    OrderCreateSuccess,
    OrderDeliverFail,
    OrderDeliverRequest,
    OrderDeliverSuccess,
    OrderDetailsFail,
    OrderDetailsRequest,
    OrderDetailsSuccess,
    OrderListFail,
    OrderListMyFail,
    OrderListMyRequest,
    OrderListMySuccess,
    OrderListRequest,
    OrderListSuccess,
    OrderPayFail,
    OrderPayRequest,
    OrderPaySuccess,
    ORDER_CREATE_FAIL,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_DELIVER_FAIL,
    ORDER_DELIVER_REQUEST,
    ORDER_DELIVER_SUCCESS,
    ORDER_DETAILS_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_LIST_FAIL,
    ORDER_LIST_MY_FAIL,
    ORDER_LIST_MY_REQUEST,
    ORDER_LIST_MY_SUCCESS,
    ORDER_LIST_REQUEST,
    ORDER_LIST_SUCCESS,
    ORDER_PAY_FAIL,
    ORDER_PAY_REQUEST,
    ORDER_PAY_SUCCESS,
} from './orderTypes';

export const createOrder =
    (
        order: Order,
    ): ThunkAction<void, RootState, undefined, OrderCreateRequest | OrderCreateFail | OrderCreateSuccess> =>
    async (dispatch, getState) => {
        try {
            dispatch({ type: ORDER_CREATE_REQUEST });

            const {
                user: { userInfo },
            } = getState();

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo?.token}`,
                },
            };

            const { data } = await axios.post<Order>(`/api/orders`, order, config);

            dispatch({
                type: ORDER_CREATE_SUCCESS,
                payload: data,
            });
        } catch (error: any) {
            dispatch({
                type: ORDER_CREATE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
        }
    };

export const getOrderDetails =
    (
        id: string,
    ): ThunkAction<void, RootState, undefined, OrderDetailsRequest | OrderDetailsSuccess | OrderDetailsFail> =>
    async (dispatch, getState) => {
        try {
            dispatch({ type: ORDER_DETAILS_REQUEST });

            const {
                user: { userInfo },
            } = getState();

            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo?.token}`,
                },
            };

            const { data } = await axios.get<OrderDetails>(`/api/orders/${id}`, config);

            dispatch({
                type: ORDER_DETAILS_SUCCESS,
                payload: data,
            });
        } catch (error: any) {
            dispatch({
                type: ORDER_DETAILS_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
        }
    };

export const payOrder =
    (
        orderId: string,
        paymentResult: any,
    ): ThunkAction<void, RootState, undefined, OrderPayRequest | OrderPaySuccess | OrderPayFail> =>
    async (dispatch, getState) => {
        try {
            dispatch({ type: ORDER_PAY_REQUEST });

            const {
                user: { userInfo },
            } = getState();

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo?.token}`,
                },
            };

            await axios.put(`/api/orders/${orderId}/pay`, paymentResult, config);

            dispatch({
                type: ORDER_PAY_SUCCESS,
            });
        } catch (error: any) {
            dispatch({
                type: ORDER_PAY_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
        }
    };

export const deliverOrder =
    (
        order: Order,
    ): ThunkAction<void, RootState, undefined, OrderDeliverRequest | OrderDeliverSuccess | OrderDeliverFail> =>
    async (dispatch, getState) => {
        try {
            dispatch({ type: ORDER_DELIVER_REQUEST });

            const {
                user: { userInfo },
            } = getState();

            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo?.token}`,
                },
            };

            await axios.put(`/api/orders/${order._id}/deliver`, {}, config);

            dispatch({
                type: ORDER_DELIVER_SUCCESS,
            });
        } catch (error: any) {
            dispatch({
                type: ORDER_DELIVER_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
        }
    };

export const listMyOrders =
    (): ThunkAction<void, RootState, undefined, OrderListMyRequest | OrderListMySuccess | OrderListMyFail> =>
    async (dispatch, getState) => {
        try {
            dispatch({ type: ORDER_LIST_MY_REQUEST });

            const {
                user: { userInfo },
            } = getState();

            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo?.token}`,
                },
            };

            const { data } = await axios.get<OrderDetails[]>(`/api/orders/myorders`, config);

            dispatch({
                type: ORDER_LIST_MY_SUCCESS,
                payload: data,
            });
        } catch (error: any) {
            dispatch({
                type: ORDER_LIST_MY_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
        }
    };

export const listOrders =
    (): ThunkAction<void, RootState, undefined, OrderListRequest | OrderListSuccess | OrderListFail> =>
    async (dispatch, getState) => {
        try {
            dispatch({ type: ORDER_LIST_REQUEST });

            const {
                user: { userInfo },
            } = getState();

            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo?.token}`,
                },
            };

            const { data } = await axios.get<OrderDetails[]>(`/api/orders`, config);

            dispatch({
                type: ORDER_LIST_SUCCESS,
                payload: data,
            });
        } catch (error: any) {
            dispatch({
                type: ORDER_LIST_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
        }
    };
