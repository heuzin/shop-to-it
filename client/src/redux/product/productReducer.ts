import { Products } from '../../modals/Products';
import {
    ProductCreateFail,
    ProductCreateRequest,
    ProductCreateReset,
    ProductCreateReviewFail,
    ProductCreateReviewRequest,
    ProductCreateReviewReset,
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
    ProductUpdateReset,
    ProductUpdateSuccess,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_RESET,
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_RESET,
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
    PRODUCT_UPDATE_RESET,
    PRODUCT_UPDATE_SUCCESS,
} from './productTypes';

interface ProductDetailsState {
    loading: boolean;
    error: string;
    product: Products | null;
}

const PRODUCT_DETAILS_INITIAL_STATE: ProductDetailsState = {
    loading: false,
    error: '',
    product: null,
};

export const productDetailsReducer = (
    state: ProductDetailsState = PRODUCT_DETAILS_INITIAL_STATE,
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

interface ProductListState {
    loading: boolean;
    error: string;
    products: Products[];
    page: number;
    pages: number;
}

const PRODUCT_LIST_INITIAL_STATE: ProductListState = {
    loading: false,
    error: '',
    products: [],
    page: 0,
    pages: 0,
};

export const productListReducer = (
    state: ProductListState = PRODUCT_LIST_INITIAL_STATE,
    action: ProductListRequest | ProductListSuccess | ProductListFail,
) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { ...state, loading: true };
        case PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload.products,
                page: action.payload.page,
                pages: action.payload.pages,
            };
        case PRODUCT_LIST_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

interface ProductDeleteState {
    loading: boolean;
    success: boolean;
    error: string;
}

const PRODUCT_DELETE_INITIAL_STATE: ProductDeleteState = {
    loading: false,
    success: false,
    error: '',
};

export const productDeleteReducer = (
    state: ProductDeleteState = PRODUCT_DELETE_INITIAL_STATE,
    action: ProductDeleteRequest | ProductDeleteSuccess | ProductDeleteFail,
) => {
    switch (action.type) {
        case PRODUCT_DELETE_REQUEST:
            return { ...state, loading: true };
        case PRODUCT_DELETE_SUCCESS:
            return { ...state, loading: false, success: true };
        case PRODUCT_DELETE_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

interface ProductCreateState {
    loading: boolean;
    success: boolean;
    product: Products | null;
    error: string;
}

const PRODUCT_CREATE_INITIAL_STATE: ProductCreateState = {
    loading: false,
    success: false,
    product: null,
    error: '',
};

export const productCreateReducer = (
    state: ProductCreateState = PRODUCT_CREATE_INITIAL_STATE,
    action: ProductCreateRequest | ProductCreateSuccess | ProductCreateFail | ProductCreateReset,
) => {
    switch (action.type) {
        case PRODUCT_CREATE_REQUEST:
            return { ...state, loading: true };
        case PRODUCT_CREATE_SUCCESS:
            return { ...state, loading: false, success: true, product: action.payload };
        case PRODUCT_CREATE_FAIL:
            return { ...state, loading: false, error: action.payload };
        case PRODUCT_CREATE_RESET:
            return { ...PRODUCT_CREATE_INITIAL_STATE };
        default:
            return state;
    }
};

interface ProductUpdateState {
    loading: boolean;
    success: boolean;
    product: Products | null;
    error: string;
}

const PRODUCT_UPDATE_INITIAL_STATE: ProductUpdateState = {
    loading: false,
    success: false,
    product: null,
    error: '',
};

export const productUpdateReducer = (
    state: ProductUpdateState = PRODUCT_UPDATE_INITIAL_STATE,
    action: ProductUpdateRequest | ProductUpdateSuccess | ProductUpdateFail | ProductUpdateReset,
) => {
    switch (action.type) {
        case PRODUCT_UPDATE_REQUEST:
            return { ...state, loading: true };
        case PRODUCT_UPDATE_SUCCESS:
            return { ...state, loading: false, success: true, product: action.payload };
        case PRODUCT_UPDATE_FAIL:
            return { ...state, loading: false, error: action.payload };
        case PRODUCT_UPDATE_RESET:
            return { ...PRODUCT_UPDATE_INITIAL_STATE };
        default:
            return state;
    }
};

interface ProductCreateReviewState {
    loading: boolean;
    success: boolean;
    error: string;
}

const PRODUCT_CREATE_REVIEW_INITIAL_STATE: ProductCreateReviewState = {
    loading: false,
    success: false,
    error: '',
};

export const productCreateReviewReducer = (
    state: ProductCreateReviewState = PRODUCT_CREATE_REVIEW_INITIAL_STATE,
    action:
        | ProductCreateReviewRequest
        | ProductCreateReviewSuccess
        | ProductCreateReviewFail
        | ProductCreateReviewReset,
) => {
    switch (action.type) {
        case PRODUCT_CREATE_REVIEW_REQUEST:
            return { ...state, loading: true };
        case PRODUCT_CREATE_REVIEW_SUCCESS:
            return { ...state, loading: false, success: true };
        case PRODUCT_CREATE_REVIEW_FAIL:
            return { ...state, loading: false, error: action.payload };
        case PRODUCT_CREATE_REVIEW_RESET:
            return { ...PRODUCT_CREATE_REVIEW_INITIAL_STATE };
        default:
            return state;
    }
};

interface ProductTopRatedState {
    loading: boolean;
    products: Products[];
    error: string;
}

const PRODUCT_TOP_RATED_INITIAL_STATE: ProductTopRatedState = {
    loading: false,
    products: [],
    error: '',
};

export const productTopRatedReducer = (
    state: ProductTopRatedState = PRODUCT_TOP_RATED_INITIAL_STATE,
    action: ProductTopRatedRequest | ProductTopRatedSuccess | ProductTopRatedFail,
) => {
    switch (action.type) {
        case PRODUCT_TOP_RATED_REQUEST:
            return { ...state, loading: true };
        case PRODUCT_TOP_RATED_SUCCESS:
            return { ...state, loading: false, products: action.payload };
        case PRODUCT_TOP_RATED_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
