import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { User } from '../../modals/User';
import { OrderListMyReset, ORDER_LIST_MY_RESET } from '../orders/orderTypes';
import { RootState } from '../store';
import {
    UserDeleteFail,
    UserDeleteRequest,
    UserDeleteSuccess,
    UserDetailsFail,
    UserDetailsRequest,
    UserDetailsReset,
    UserDetailsSuccess,
    UserListFail,
    UserListRequest,
    UserListReset,
    UserListSuccess,
    UserLoginFail,
    UserLoginRequest,
    UserLoginSuccess,
    UserLogout,
    UserRegisterFail,
    UserRegisterRequest,
    UserRegisterSuccess,
    UserUpdateFail,
    UserUpdateProfileFail,
    UserUpdateProfileRequest,
    UserUpdateProfileSuccess,
    UserUpdateRequest,
    UserUpdateSuccess,
    USER_DELETE_FAIL,
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_RESET,
    USER_DETAILS_SUCCESS,
    USER_LIST_FAIL,
    USER_LIST_REQUEST,
    USER_LIST_RESET,
    USER_LIST_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_UPDATE_FAIL,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
} from './userTypes';

export const login =
    (
        email: string,
        password: string,
    ): ThunkAction<void, RootState, undefined, UserLoginRequest | UserLoginSuccess | UserLoginFail> =>
    async (dispatch) => {
        try {
            dispatch({ type: USER_LOGIN_REQUEST });

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const { data } = await axios.post<User>('/api/users/login', { email, password }, config);

            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data,
            });

            localStorage.setItem('userInfo', JSON.stringify(data));
        } catch (error: any) {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
        }
    };

export const logout =
    (): ThunkAction<void, RootState, undefined, UserLogout | UserDetailsReset | OrderListMyReset | UserListReset> =>
    (dispatch) => {
        localStorage.removeItem('userInfo');

        dispatch({ type: USER_LOGOUT });
        dispatch({ type: USER_DETAILS_RESET });
        dispatch({ type: ORDER_LIST_MY_RESET });
        dispatch({ type: USER_LIST_RESET });
    };

export const register =
    (
        name: string,
        email: string,
        password: string,
    ): ThunkAction<
        void,
        RootState,
        undefined,
        UserRegisterRequest | UserRegisterSuccess | UserRegisterFail | UserLoginSuccess
    > =>
    async (dispatch) => {
        try {
            dispatch({ type: USER_REGISTER_REQUEST });

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const { data } = await axios.post<User>('/api/users', { name, email, password }, config);

            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: data,
            });

            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data,
            });

            localStorage.setItem('userInfo', JSON.stringify(data));
        } catch (error: any) {
            dispatch({
                type: USER_REGISTER_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
        }
    };

export const getUserDetails =
    (id: string): ThunkAction<void, RootState, undefined, UserDetailsRequest | UserDetailsSuccess | UserDetailsFail> =>
    async (dispatch, getState) => {
        try {
            dispatch({ type: USER_DETAILS_REQUEST });

            const {
                user: { userInfo },
            } = getState();

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo?.token}`,
                },
            };

            const { data } = await axios.get<User>(`/api/users/${id}`, config);

            dispatch({
                type: USER_DETAILS_SUCCESS,
                payload: data,
            });
        } catch (error: any) {
            dispatch({
                type: USER_DETAILS_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
        }
    };

export const updateUserProfile =
    (user: {
        id: string;
        name: string;
        email: string;
        password: string;
    }): ThunkAction<
        void,
        RootState,
        undefined,
        UserUpdateProfileRequest | UserUpdateProfileSuccess | UserUpdateProfileFail | UserLoginSuccess
    > =>
    async (dispatch, getState) => {
        try {
            dispatch({ type: USER_UPDATE_PROFILE_REQUEST });

            const {
                user: { userInfo },
            } = getState();

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo?.token}`,
                },
            };

            const { data } = await axios.put<User>(`/api/users/profile`, user, config);

            dispatch({
                type: USER_UPDATE_PROFILE_SUCCESS,
                payload: data,
            });

            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data,
            });

            localStorage.setItem('userInfo', JSON.stringify(data));
        } catch (error: any) {
            dispatch({
                type: USER_UPDATE_PROFILE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
        }
    };

export const listUsers =
    (): ThunkAction<void, RootState, undefined, UserListRequest | UserListSuccess | UserListFail> =>
    async (dispatch, getState) => {
        try {
            dispatch({ type: USER_LIST_REQUEST });

            const {
                user: { userInfo },
            } = getState();

            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo?.token}`,
                },
            };

            const { data } = await axios.get<User[]>(`/api/users/`, config);

            dispatch({
                type: USER_LIST_SUCCESS,
                payload: data,
            });
        } catch (error: any) {
            dispatch({
                type: USER_LIST_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
        }
    };

export const deleteUser =
    (id: string): ThunkAction<void, RootState, undefined, UserDeleteRequest | UserDeleteSuccess | UserDeleteFail> =>
    async (dispatch, getState) => {
        try {
            dispatch({ type: USER_DELETE_REQUEST });

            const {
                user: { userInfo },
            } = getState();

            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo?.token}`,
                },
            };

            await axios.delete(`/api/users/${id}`, config);

            dispatch({
                type: USER_DELETE_SUCCESS,
            });
        } catch (error: any) {
            dispatch({
                type: USER_DELETE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
        }
    };

export const updateUser =
    (
        user: Partial<User>,
    ): ThunkAction<
        void,
        RootState,
        undefined,
        UserUpdateRequest | UserUpdateSuccess | UserDetailsSuccess | UserUpdateFail
    > =>
    async (dispatch, getState) => {
        try {
            dispatch({ type: USER_UPDATE_REQUEST });

            const {
                user: { userInfo },
            } = getState();

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo?.token}`,
                },
            };

            const { data } = await axios.put(`/api/users/${user._id}`, user, config);

            dispatch({
                type: USER_UPDATE_SUCCESS,
            });

            dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
        } catch (error: any) {
            dispatch({
                type: USER_UPDATE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
        }
    };
