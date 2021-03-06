import { Action, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { RootStateOrAny } from 'react-redux';

export interface LoginFormData {
    email: string;
    password: string;
}

export interface LoginResponse {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    jwt: string;
    refreshToken: string;
}

export interface RegisterFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    password2: string;
}

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

export interface IUserState extends IUser {
    loading: boolean;
}

export type SetUserAction = {
    payload: IUser;
};

export type SetLoadingUserAction = {
    payload: boolean;
};

export type ThunkActionType = ThunkAction<void, RootStateOrAny, unknown, Action<string>>;
export type ThunkDispatchType = ThunkDispatch<void, RootStateOrAny, Action<string>>;
