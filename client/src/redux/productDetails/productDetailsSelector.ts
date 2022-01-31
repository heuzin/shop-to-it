import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectProductDetails = (state: RootState) => state.productDetails;

export const selectProductDetailsIsLoadding = createSelector(
    [selectProductDetails],
    (productDetails) => productDetails.loading,
);
export const selectProducttDetailsError = createSelector(
    [selectProductDetails],
    (productDetails) => productDetails.error,
);
export const selectAllProductDetails = createSelector(
    [selectProductDetails],
    (productDetails) => productDetails.product,
);
