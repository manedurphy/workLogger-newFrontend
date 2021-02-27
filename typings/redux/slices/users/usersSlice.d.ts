import { IGlobalState } from '../../types';
import { IUser, IUserState, LoginFormData, RegisterFormData, ThunkActionType } from './types';
export declare const setUser: import("@reduxjs/toolkit").ActionCreatorWithPayload<IUser, string>, setLoadingUser: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>, clearUser: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>;
export declare const getUserState: (state: IGlobalState) => IUserState;
export declare const handleLogin: (data: LoginFormData) => ThunkActionType;
export declare const handleRegister: (data: RegisterFormData) => ThunkActionType;
export declare const verifyUser: () => ThunkActionType;
export declare const refreshUser: () => ThunkActionType;
declare const _default: import("redux").Reducer<IUserState, import("redux").AnyAction>;
export default _default;
