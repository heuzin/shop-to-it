import { Products } from '../../modals/Products';
import {
    ProductListFail,
    ProductListRequest,
    ProductListSuccess,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
} from './productListTypes';

interface ProductListState {
    loading: boolean;
    error: string;
    products: Products[];
}

const PRODUCT_LIST_INITIAL_STATE: ProductListState = {
    loading: false,
    error: '',
    products: [],
};

export const productListReducer = (
    state: ProductListState = PRODUCT_LIST_INITIAL_STATE,
    action: ProductListRequest | ProductListSuccess | ProductListFail,
) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { ...state, loading: true };
        case PRODUCT_LIST_SUCCESS:
            return { ...state, loading: false, products: action.payload };
        case PRODUCT_LIST_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
