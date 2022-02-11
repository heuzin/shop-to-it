import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { Order } from '../../modals/Order';
import { OrderDetails } from '../../modals/OrderDetails';
import { RootState } from '../store';
import {
    OrderCreateFail,
    OrderCreateRequest,
    OrderCreateSuccess,
    OrderDetailsFail,
    OrderDetailsRequest,
    OrderDetailsSuccess,
    OrderPayFail,
    OrderPayRequest,
    OrderPaySuccess,
    ORDER_CREATE_FAIL,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_DETAILS_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
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
