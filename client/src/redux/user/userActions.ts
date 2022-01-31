import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { User } from '../../modals/User';
import { RootState } from '../store';
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

export const logout = (): ThunkAction<void, RootState, undefined, UserLogout> => (dispatch) => {
    localStorage.removeItem('userInfo');

    dispatch({ type: USER_LOGOUT });
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
        UserUpdateProfileRequest | UserUpdateProfileSuccess | UserUpdateProfileFail
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
        } catch (error: any) {
            dispatch({
                type: USER_UPDATE_PROFILE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
        }
    };
