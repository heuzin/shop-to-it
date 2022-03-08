import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { AllProducts, Products } from '../../modals/Products';
import { RootState } from '../store';
import {
    ProductCreateFail,
    ProductCreateRequest,
    ProductCreateReviewFail,
    ProductCreateReviewRequest,
    ProductCreateReviewSuccess,
    ProductCreateSuccess,
    ProductDeleteFail,
    ProductDeleteRequest,
    ProductDeleteSuccess,
    ProductDetailsFail,
    ProductDetailsRequest,
    ProductDetailsSuccess,
    ProductListFail,
    ProductListRequest,
    ProductListSuccess,
    ProductTopRatedFail,
    ProductTopRatedRequest,
    ProductTopRatedSuccess,
    ProductUpdateFail,
    ProductUpdateRequest,
    ProductUpdateSuccess,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_DELETE_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_TOP_RATED_FAIL,
    PRODUCT_TOP_RATED_REQUEST,
    PRODUCT_TOP_RATED_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
} from './productTypes';

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

export const getAllProducts =
    (
        keyword: string = '',
        pageNumber: number = 1,
    ): ThunkAction<void, RootState, undefined, ProductListRequest | ProductListSuccess | ProductListFail> =>
    async (dispatch) => {
        try {
            dispatch({ type: PRODUCT_LIST_REQUEST });

            const { data } = await axios.get<AllProducts>(`/api/products?keyword=${keyword}&pageNumber=${pageNumber}`);

            dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
        } catch (error: any) {
            dispatch({
                type: PRODUCT_LIST_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
        }
    };

export const deleteProduct =
    (
        id: string,
    ): ThunkAction<void, RootState, undefined, ProductDeleteRequest | ProductDeleteSuccess | ProductDeleteFail> =>
    async (dispatch, getState) => {
        try {
            dispatch({ type: PRODUCT_DELETE_REQUEST });

            const {
                user: { userInfo },
            } = getState();

            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo?.token}`,
                },
            };

            await axios.delete(`/api/products/${id}`, config);

            dispatch({
                type: PRODUCT_DELETE_SUCCESS,
            });
        } catch (error: any) {
            dispatch({
                type: PRODUCT_DELETE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
        }
    };

export const createProduct =
    (): ThunkAction<void, RootState, undefined, ProductCreateRequest | ProductCreateSuccess | ProductCreateFail> =>
    async (dispatch, getState) => {
        try {
            dispatch({ type: PRODUCT_CREATE_REQUEST });

            const {
                user: { userInfo },
            } = getState();

            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo?.token}`,
                },
            };

            const { data } = await axios.post<Products>(`/api/products/`, {}, config);

            dispatch({
                type: PRODUCT_CREATE_SUCCESS,
                payload: data,
            });
        } catch (error: any) {
            dispatch({
                type: PRODUCT_CREATE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
        }
    };

export const updateProduct =
    (
        product: Partial<Products>,
    ): ThunkAction<void, RootState, undefined, ProductUpdateRequest | ProductUpdateSuccess | ProductUpdateFail> =>
    async (dispatch, getState) => {
        try {
            dispatch({ type: PRODUCT_UPDATE_REQUEST });

            const {
                user: { userInfo },
            } = getState();

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo?.token}`,
                },
            };

            const { data } = await axios.put<Products>(`/api/products/${product._id}`, product, config);

            dispatch({
                type: PRODUCT_UPDATE_SUCCESS,
                payload: data,
            });
        } catch (error: any) {
            dispatch({
                type: PRODUCT_UPDATE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
        }
    };

export const createProductReview =
    (
        productId: string,
        review: { rating: number; comment: string },
    ): ThunkAction<
        void,
        RootState,
        undefined,
        ProductCreateReviewRequest | ProductCreateReviewSuccess | ProductCreateReviewFail
    > =>
    async (dispatch, getState) => {
        try {
            dispatch({ type: PRODUCT_CREATE_REVIEW_REQUEST });

            const {
                user: { userInfo },
            } = getState();

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo?.token}`,
                },
            };

            await axios.post(`/api/products/${productId}/reviews`, review, config);

            dispatch({
                type: PRODUCT_CREATE_REVIEW_SUCCESS,
            });
        } catch (error: any) {
            dispatch({
                type: PRODUCT_CREATE_REVIEW_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
        }
    };

export const getTopRatedProducts =
    (): ThunkAction<
        void,
        RootState,
        undefined,
        ProductTopRatedRequest | ProductTopRatedSuccess | ProductTopRatedFail
    > =>
    async (dispatch) => {
        try {
            dispatch({ type: PRODUCT_TOP_RATED_REQUEST });

            const { data } = await axios.get<Products[]>(`/api/products/top`);

            dispatch({ type: PRODUCT_TOP_RATED_SUCCESS, payload: data });
        } catch (error: any) {
            dispatch({
                type: PRODUCT_TOP_RATED_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
        }
    };
