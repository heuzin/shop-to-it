import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import {
    ProductListFail,
    ProductListRequest,
    ProductListSuccess,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
} from './productListTypes';

export const getAllProducts =
    (): ThunkAction<void, RootState, undefined, ProductListRequest | ProductListSuccess | ProductListFail> =>
    async (dispatch) => {
        try {
            dispatch({ type: PRODUCT_LIST_REQUEST });

            const { data } = await axios.get('/api/products');

            dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
        } catch (error: any) {
            dispatch({
                type: PRODUCT_LIST_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
        }
    };
