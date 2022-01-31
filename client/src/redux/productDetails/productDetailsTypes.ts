import { Action } from 'redux';
import { Products } from '../../modals/Products';

export const PRODUCT_DETAILS_REQUEST = 'PRODUCT_DETAILS_REQUEST';
export const PRODUCT_DETAILS_SUCCESS = 'PRODUCT_DETAILS_SUCCESS';
export const PRODUCT_DETAILS_FAIL = 'PRODUCT_DETAILS_FAIL';

export interface ProductDetailsRequest extends Action<typeof PRODUCT_DETAILS_REQUEST> {}
export interface ProductDetailsSuccess extends Action<typeof PRODUCT_DETAILS_SUCCESS> {
    payload: Products;
}
export interface ProductDetailsFail extends Action<typeof PRODUCT_DETAILS_FAIL> {
    payload: string;
}
