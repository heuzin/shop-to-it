import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectProductsList = (state: RootState) => state.productList;

export const selectProductsListIsLoadding = createSelector(
    [selectProductsList],
    (producstList) => producstList.loading,
);
export const selectProductstListError = createSelector([selectProductsList], (producstList) => producstList.error);
export const selectAllProductsList = createSelector([selectProductsList], (producstList) => producstList.products);
