import { Products } from '../../modals/Products';
import {
    ProductDetailsFail,
    ProductDetailsRequest,
    ProductDetailsSuccess,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
} from './productDetailsTypes';

interface State {
    loading: boolean;
    error: string;
    product: Products | null;
}

const INITIAL_STATE: State = {
    loading: false,
    error: '',
    product: null,
};

export const productDetailsReducer = (
    state: State = INITIAL_STATE,
    action: ProductDetailsRequest | ProductDetailsSuccess | ProductDetailsFail,
) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { ...state, loading: true };
        case PRODUCT_DETAILS_SUCCESS:
            return { ...state, loading: false, product: action.payload };
        case PRODUCT_DETAILS_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
