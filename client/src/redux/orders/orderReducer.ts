import { Order } from '../../modals/Order';
import { OrderDetails } from '../../modals/OrderDetails';
import {
    OrderCreateFail,
    OrderCreateRequest,
    OrderCreateSuccess,
    OrderDetailsFail,
    OrderDetailsRequest,
    OrderDetailsSuccess,
    OrderListMyFail,
    OrderListMyRequest,
    OrderListMyReset,
    OrderListMySuccess,
    OrderPayFail,
    OrderPayRequest,
    OrderPayReset,
    OrderPaySuccess,
    ORDER_CREATE_FAIL,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_DETAILS_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_LIST_MY_FAIL,
    ORDER_LIST_MY_REQUEST,
    ORDER_LIST_MY_RESET,
    ORDER_LIST_MY_SUCCESS,
    ORDER_PAY_FAIL,
    ORDER_PAY_REQUEST,
    ORDER_PAY_RESET,
    ORDER_PAY_SUCCESS,
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

interface OrderDetailsState {
    loading: boolean;
    success: boolean;
    error: string;
    order: OrderDetails;
}

const ORDER_DETAILS_INITIAL_STATE: OrderDetailsState = {
    loading: true,
    success: false,
    error: '',
    order: {} as OrderDetails,
};

export const orderDetailsReducer = (
    state: OrderDetailsState = ORDER_DETAILS_INITIAL_STATE,
    action: OrderDetailsSuccess | OrderDetailsRequest | OrderDetailsFail,
) => {
    switch (action.type) {
        case ORDER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ORDER_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                order: action.payload,
            };
        case ORDER_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

interface OrderPayState {
    loading: boolean;
    success: boolean;
    error: string;
}

const ORDER_PAY_INITIAL_STATE: OrderPayState = {
    loading: false,
    success: false,
    error: '',
};

export const orderPayReducer = (
    state: OrderPayState = ORDER_PAY_INITIAL_STATE,
    action: OrderPayRequest | OrderPaySuccess | OrderPayFail | OrderPayReset,
) => {
    switch (action.type) {
        case ORDER_PAY_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ORDER_PAY_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            };
        case ORDER_PAY_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case ORDER_PAY_RESET:
            return {
                ...ORDER_PAY_INITIAL_STATE,
            };
        default:
            return state;
    }
};

interface OrderListMyState {
    loading: boolean;
    error: string;
    orders: OrderDetails[];
}

const ORDER_LIST_MY_INITIAL_STATE: OrderListMyState = {
    loading: false,
    error: '',
    orders: [],
};

export const orderListMyReducer = (
    state: OrderListMyState = ORDER_LIST_MY_INITIAL_STATE,
    action: OrderListMyRequest | OrderListMySuccess | OrderListMyFail | OrderListMyReset,
) => {
    switch (action.type) {
        case ORDER_LIST_MY_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ORDER_LIST_MY_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload,
            };
        case ORDER_LIST_MY_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case ORDER_LIST_MY_RESET:
            return {
                ...ORDER_LIST_MY_INITIAL_STATE,
            };
        default:
            return state;
    }
};
