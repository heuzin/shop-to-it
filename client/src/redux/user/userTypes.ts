import { Action } from 'redux';
import { User } from '../../modals/User';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
export const USER_LOGOUT = 'USER_LOGOUT';

export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL';

export const USER_DETAILS_REQUEST = 'USER_DETAILS_REQUEST';
export const USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS';
export const USER_DETAILS_FAIL = 'USER_DETAILS_FAIL';

export const USER_UPDATE_PROFILE_REQUEST = 'USER_UPDATE_PROFILE_REQUEST';
export const USER_UPDATE_PROFILE_SUCCESS = 'USER_UPDATE_PROFILE_SUCCESS';
export const USER_UPDATE_PROFILE_FAIL = 'USER_UPDATE_PROFILE_FAIL';
export const USER_UPDATE_PROFILE_RESET = 'USER_UPDATE_PROFILE_RESET';

export interface UserLoginRequest extends Action<typeof USER_LOGIN_REQUEST> {}
export interface UserLoginSuccess extends Action<typeof USER_LOGIN_SUCCESS> {
    payload: User;
}
export interface UserLoginFail extends Action<typeof USER_LOGIN_FAIL> {
    payload: string;
}
export interface UserLogout extends Action<typeof USER_LOGOUT> {}

export interface UserRegisterRequest extends Action<typeof USER_REGISTER_REQUEST> {}
export interface UserRegisterSuccess extends Action<typeof USER_REGISTER_SUCCESS> {
    payload: User;
}
export interface UserRegisterFail extends Action<typeof USER_REGISTER_FAIL> {
    payload: string;
}

export interface UserDetailsRequest extends Action<typeof USER_DETAILS_REQUEST> {}
export interface UserDetailsSuccess extends Action<typeof USER_DETAILS_SUCCESS> {
    payload: User;
}
export interface UserDetailsFail extends Action<typeof USER_DETAILS_FAIL> {
    payload: string;
}

export interface UserUpdateProfileRequest extends Action<typeof USER_UPDATE_PROFILE_REQUEST> {}
export interface UserUpdateProfileSuccess extends Action<typeof USER_UPDATE_PROFILE_SUCCESS> {
    payload: User;
}
export interface UserUpdateProfileFail extends Action<typeof USER_UPDATE_PROFILE_FAIL> {
    payload: string;
}
export interface UserUpdateProfileReset extends Action<typeof USER_UPDATE_PROFILE_RESET> {}
