import { takeEvery, fork, put, all, call, takeLatest } from 'redux-saga/effects';
import {
    LOGIN_SOCIAL_MEDIA,
    LOGIN_SOCIAL_MEDIA_SUCCESS,
    LOGIN_SOCIAL_MEDIA_FAILURE,
    LOGIN_SOCIAL_MEDIA_INIT,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER,
    LOGOUT_USER_FAILURE,
    LOGOUT_USER_SUCCESS,
    GET_USER_DETAILS,
    REGISTER_CUSTOMER
} from './actionTypes'

import {loginUser, loginUserSuccess, loginUserFailure, getUserDetailsSuccess, getUserDetailsFailure, loginUserSocialMediaFailure, loginUserSocialMediaSuccess, registerCustomerFailure, registerCustomerSuccess} from './actions'

import {loginAPI, getUser, getSocialToken, makeCustomer} from '../../services/authService'

function* loginCustomer(action){
    console.log("In saga")
    try{
        const response = yield call (
            loginAPI,
            action.payload
        )
        console.log("After call",response);
        if(response.status === 200){
            yield put(loginUserSuccess(response.data))
        }
        else{
            yield put(loginUserFailure(response.data.message))
        }
    }
    catch(error){
        // yield console.log("Something went wrong!")
        yield put(loginUserFailure("Something went wrong"))
    }
}

function* loginSocial(action){
    console.log("In saga")
    try{
        const response = yield call (
            getSocialToken,
            action.payload
        )
        console.log("After call",response);
        if(response.status === 200){
            yield put(loginUserSocialMediaSuccess(response.data))
        }
        else{
            yield put(loginUserSocialMediaFailure(response.data.message))
        }
    }
    catch(error){
        // yield console.log("Something went wrong!")
        yield put(loginUserSocialMediaFailure("Something went wrong"))
    }
}

function* saveUserDetails(action){
    try{
        const response = yield call (
            getUser,
            action.payload
        )
        console.log("After call",response);
        if(response.status === 200){
            yield put(getUserDetailsSuccess(response.data))
        }
        else{
            yield put(getUserDetailsFailure(response.data.message))
        }
    }
    catch(error){
        // yield console.log("Something went wrong!")
        yield put(getUserDetailsFailure("Something went wrong"))
    }
}

function* makeCustomerDetails(action){
    try{
        const response = yield call (
            makeCustomer,
            action.payload
        )
        console.log("After call",response);
        if(response.status === 200){
            yield put(registerCustomerSuccess(response.data))
        }
        else{
            yield put(registerCustomerFailure(response.data.message))
        }
    }
    catch(error){
        // yield console.log("Something went wrong!")
        yield put(registerCustomerFailure("Something went wrong"))
    }
}

export function* watchLoginUser(){
    yield takeEvery(LOGIN_USER, loginCustomer)
}

export function* watchLoginFb(){
    yield takeEvery(LOGIN_SOCIAL_MEDIA, loginSocial)
}

export function* watchSaveUser(){
    yield takeEvery(GET_USER_DETAILS, saveUserDetails)
}

export function* watchRegisterCustomer(){
    yield takeEvery(REGISTER_CUSTOMER, makeCustomerDetails)
}





function* AuthSaga(){
    yield all([
        fork(watchLoginUser),
        fork(watchSaveUser),
        fork(watchLoginFb),
        fork(watchRegisterCustomer)
    ])
}

export default AuthSaga;