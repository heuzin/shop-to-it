import { Action } from 'redux';
import { AllProducts, Products } from '../../modals/Products';

export const PRODUCT_DETAILS_REQUEST = 'PRODUCT_DETAILS_REQUEST';
export const PRODUCT_DETAILS_SUCCESS = 'PRODUCT_DETAILS_SUCCESS';
export const PRODUCT_DETAILS_FAIL = 'PRODUCT_DETAILS_FAIL';

export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST';
export const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS';
export const PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL';

export const PRODUCT_DELETE_REQUEST = 'PRODUCT_DELETE_REQUEST';
export const PRODUCT_DELETE_SUCCESS = 'PRODUCT_DELETE_SUCCESS';
export const PRODUCT_DELETE_FAIL = 'PRODUCT_DELETE_FAIL';

export const PRODUCT_CREATE_REQUEST = 'PRODUCT_CREATE_REQUEST';
export const PRODUCT_CREATE_SUCCESS = 'PRODUCT_CREATE_SUCCESS';
export const PRODUCT_CREATE_FAIL = 'PRODUCT_CREATE_FAIL';
export const PRODUCT_CREATE_RESET = 'PRODUCT_CREATE_RESET';

export const PRODUCT_UPDATE_REQUEST = 'PRODUCT_UPDATE_REQUEST';
export const PRODUCT_UPDATE_SUCCESS = 'PRODUCT_UPDATE_SUCCESS';
export const PRODUCT_UPDATE_FAIL = 'PRODUCT_UPDATE_FAIL';
export const PRODUCT_UPDATE_RESET = 'PRODUCT_UPDATE_RESET';

export const PRODUCT_CREATE_REVIEW_REQUEST = 'PRODUCT_CREATE_REVIEW_REQUEST';
export const PRODUCT_CREATE_REVIEW_SUCCESS = 'PRODUCT_CREATE_REVIEW_SUCCESS';
export const PRODUCT_CREATE_REVIEW_FAIL = 'PRODUCT_CREATE_REVIEW_FAIL';
export const PRODUCT_CREATE_REVIEW_RESET = 'PRODUCT_CREATE_REVIEW_RESET';

export const PRODUCT_TOP_RATED_REQUEST = 'PRODUCT_TOP_RATED_REQUEST';
export const PRODUCT_TOP_RATED_SUCCESS = 'PRODUCT_TOP_RATED_SUCCESS';
export const PRODUCT_TOP_RATED_FAIL = 'PRODUCT_TOP_RATED_FAIL';

export interface ProductDetailsRequest extends Action<typeof PRODUCT_DETAILS_REQUEST> {}
export interface ProductDetailsSuccess extends Action<typeof PRODUCT_DETAILS_SUCCESS> {
    payload: Products;
}
export interface ProductDetailsFail extends Action<typeof PRODUCT_DETAILS_FAIL> {
    payload: string;
}

export interface ProductListRequest extends Action<typeof PRODUCT_LIST_REQUEST> {}
export interface ProductListSuccess extends Action<typeof PRODUCT_LIST_SUCCESS> {
    payload: AllProducts;
}
export interface ProductListFail extends Action<typeof PRODUCT_LIST_FAIL> {
    payload: string;
}

export interface ProductDeleteRequest extends Action<typeof PRODUCT_DELETE_REQUEST> {}
export interface ProductDeleteSuccess extends Action<typeof PRODUCT_DELETE_SUCCESS> {}
export interface ProductDeleteFail extends Action<typeof PRODUCT_DELETE_FAIL> {
    payload: string;
}

export interface ProductCreateRequest extends Action<typeof PRODUCT_CREATE_REQUEST> {}
export interface ProductCreateSuccess extends Action<typeof PRODUCT_CREATE_SUCCESS> {
    payload: Products;
}
export interface ProductCreateFail extends Action<typeof PRODUCT_CREATE_FAIL> {
    payload: string;
}
export interface ProductCreateReset extends Action<typeof PRODUCT_CREATE_RESET> {}

export interface ProductUpdateRequest extends Action<typeof PRODUCT_UPDATE_REQUEST> {}
export interface ProductUpdateSuccess extends Action<typeof PRODUCT_UPDATE_SUCCESS> {
    payload: Products;
}
export interface ProductUpdateFail extends Action<typeof PRODUCT_UPDATE_FAIL> {
    payload: string;
}
export interface ProductUpdateReset extends Action<typeof PRODUCT_UPDATE_RESET> {}

export interface ProductCreateReviewRequest extends Action<typeof PRODUCT_CREATE_REVIEW_REQUEST> {}
export interface ProductCreateReviewSuccess extends Action<typeof PRODUCT_CREATE_REVIEW_SUCCESS> {}
export interface ProductCreateReviewFail extends Action<typeof PRODUCT_CREATE_REVIEW_FAIL> {
    payload: string;
}
export interface ProductCreateReviewReset extends Action<typeof PRODUCT_CREATE_REVIEW_RESET> {}

export interface ProductTopRatedRequest extends Action<typeof PRODUCT_TOP_RATED_REQUEST> {}
export interface ProductTopRatedSuccess extends Action<typeof PRODUCT_TOP_RATED_SUCCESS> {
    payload: Products[];
}
export interface ProductTopRatedFail extends Action<typeof PRODUCT_TOP_RATED_FAIL> {
    payload: string;
}
