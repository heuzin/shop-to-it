import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { Order } from '../../modals/Order';
import { RootState } from '../store';
import {
    OrderCreateFail,
    OrderCreateRequest,
    OrderCreateSuccess,
    ORDER_CREATE_FAIL,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
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
