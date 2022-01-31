import { Action } from 'redux';
import { Products } from '../../modals/Products';

export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST';
export const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS';
export const PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL';

export interface ProductListRequest extends Action<typeof PRODUCT_LIST_REQUEST> {}
export interface ProductListSuccess extends Action<typeof PRODUCT_LIST_SUCCESS> {
    payload: Products[];
}
export interface ProductListFail extends Action<typeof PRODUCT_LIST_FAIL> {
    payload: string;
}
