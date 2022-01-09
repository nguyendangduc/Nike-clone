import { combineReducers } from 'redux'
import {configureStore} from '@reduxjs/toolkit'

import authReducer from './authReducer'

export default combineReducers({
    authReducer,
})