import {User} from '../../models/models'

export interface IAction {
  type: string
  payload?:any
}

export const USER_FETCH_SUCCESS = "USER_FETCH_SUCCESS"
export interface IUserFetchSuccess extends IAction {
  payload: User
}

export const USER_FETCH_ERROR = "USER_FETCH_ERROR"
export interface IUserFetchError extends IAction {
  payload: any
}

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
export interface ILogoutSuccess extends IAction {
}








