import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import {
    ProductDetailsFail,
    ProductDetailsRequest,
    ProductDetailsSuccess,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
} from './productDetailsTypes';

export const getProductDetails =
    (
        id: string,
    ): ThunkAction<void, RootState, undefined, ProductDetailsRequest | ProductDetailsSuccess | ProductDetailsFail> =>
    async (dispatch) => {
        try {
            dispatch({ type: PRODUCT_DETAILS_REQUEST });

            const { data } = await axios.get(`/api/products/${id}`);

            dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
        } catch (error: any) {
            dispatch({
                type: PRODUCT_DETAILS_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
        }
    };
