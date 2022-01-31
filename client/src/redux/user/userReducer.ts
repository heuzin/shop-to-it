import { User } from '../../modals/User';
import {
    UserDetailsFail,
    UserDetailsRequest,
    UserDetailsSuccess,
    UserLoginFail,
    UserLoginRequest,
    UserLoginSuccess,
    UserLogout,
    UserRegisterFail,
    UserRegisterRequest,
    UserRegisterSuccess,
    UserUpdateProfileFail,
    UserUpdateProfileRequest,
    UserUpdateProfileReset,
    UserUpdateProfileSuccess,
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
} from './userTypes';

interface UserState {
    loading: boolean;
    error: string;
    userInfo: User | null;
}

const USER_INITIAL_STATE: UserState = {
    loading: false,
    error: '',
    userInfo: null,
};

export const userReducer = (
    state: UserState = USER_INITIAL_STATE,
    action: UserLoginRequest | UserLoginSuccess | UserLoginFail | UserLogout,
) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { ...state, loading: true };
        case USER_LOGIN_SUCCESS:
            return { ...state, loading: false, userInfo: action.payload };
        case USER_LOGIN_FAIL:
            return { ...state, loading: false, error: action.payload };
        case USER_LOGOUT:
            return { ...USER_INITIAL_STATE };
        default:
            return state;
    }
};

interface UserRegisterState {
    loading: boolean;
    error: string;
    userInfo: User | null;
}

const USER_REGISTER_INITIAL_STATE: UserRegisterState = {
    loading: false,
    error: '',
    userInfo: null,
};

export const userRegisterReducer = (
    state: UserRegisterState = USER_REGISTER_INITIAL_STATE,
    action: UserRegisterRequest | UserRegisterSuccess | UserRegisterFail,
) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { ...state, loading: true };
        case USER_REGISTER_SUCCESS:
            return { ...state, loading: false, userInfo: action.payload };
        case USER_REGISTER_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

interface UserDetailsState {
    loading: boolean;
    error: string;
    user: User | null;
}

const USER_DETAILS_INITIAL_STATE: UserDetailsState = {
    loading: false,
    error: '',
    user: null,
};

export const userDetailsReducer = (
    state: UserDetailsState = USER_DETAILS_INITIAL_STATE,
    action: UserDetailsRequest | UserDetailsSuccess | UserDetailsFail,
) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return { ...state, loading: true };
        case USER_DETAILS_SUCCESS:
            return { ...state, loading: false, user: action.payload };
        case USER_DETAILS_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

interface UserUpdateProfileState {
    loading: boolean;
    error: string;
    success: boolean;
    userInfo: User | null;
}

const USER_UPDATE_PROFILE_INITIAL_STATE: UserUpdateProfileState = {
    loading: false,
    error: '',
    success: false,
    userInfo: null,
};

export const userUpdateProfileReducer = (
    state: UserUpdateProfileState = USER_UPDATE_PROFILE_INITIAL_STATE,
    action: UserUpdateProfileRequest | UserUpdateProfileSuccess | UserUpdateProfileFail | UserUpdateProfileReset,
) => {
    switch (action.type) {
        case USER_UPDATE_PROFILE_REQUEST:
            return { ...state, loading: true };
        case USER_UPDATE_PROFILE_SUCCESS:
            return { ...state, loading: false, success: true, userInfo: action.payload };
        case USER_UPDATE_PROFILE_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
