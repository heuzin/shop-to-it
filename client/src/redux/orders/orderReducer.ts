import { Order } from '../../modals/Order';
import {
    OrderCreateFail,
    OrderCreateRequest,
    OrderCreateSuccess,
    ORDER_CREATE_FAIL,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
} from './orderTypes';

interface OrderCreateState {
    loading: boolean;
    success: boolean;
    error: string;
    order: Order;
}

const ORDER_CREATE_INITIAL_STATE: OrderCreateState = {
    loading: false,
    success: false,
    error: '',
    order: {} as Order,
};

export const orderCreateReducer = (
    state: OrderCreateState = ORDER_CREATE_INITIAL_STATE,
    action: OrderCreateRequest | OrderCreateSuccess | OrderCreateFail,
) => {
    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ORDER_CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                order: action.payload,
            };
        case ORDER_CREATE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
