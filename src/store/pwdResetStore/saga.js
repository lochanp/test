import { takeEvery, fork, put, all, call, takeLatest } from 'redux-saga/effects';
import {
    FORGOT_PASSWORD_EMAIL,
    FORGOT_PASSWORD_EMAIL_SUCCESS,
    FORGOT_PASSWORD_EMAIL_FAILURE,
    FORGOT_PASSWORD_EMAIL_INIT,
    CHECK_RESET_IDENTIFIER,
    CHECK_RESET_IDENTIFIER_SUCCESS,
    CHECK_RESET_IDENTIFIER_FAILURE,
    CHECK_RESET_IDENTIFIER_INIT
} from './actionTypes'

import { 
    forgotPasswordEmail,
    forgotPasswordEmailSuccess,
    forgotPasswordEmailFailure,
    forgotPasswordEmailInit,
    checkResetIdentifier,
    checkResetIdentifierSuccess,
    checkResetIdentifierFailure,
    checkResetIdentifierInit 
} from './actions'

import { emailForgotPassword, verifyResetIdentifier } from '../../services/forgotPwdService'


function* forgotPwdEmail(action){
    try{
        const response = yield call (
            emailForgotPassword,
            action.payload
        )
        console.log("After call",response);
        if(response.status === 200){
            yield put(forgotPasswordEmailSuccess(response.data))
        }
        else{
            yield put(forgotPasswordEmailFailure(response.data.message))
        }
    }
    catch(error){
        // yield console.log("Something went wrong!")
        yield put(forgotPasswordEmailFailure("Something went wrong"))
    }
}

function* confirmResetPasswordIdentifier(action){
    try{
        const response = yield call (
            verifyResetIdentifier,
            action.payload
        )
        console.log("After call",response);
        if(response.status === 200){
            yield put(checkResetIdentifierSuccess(response.data))
        }
        else{
            yield put(checkResetIdentifierFailure(response.data.message))
        }
    }
    catch(error){
        // yield console.log("Something went wrong!")
        yield put(checkResetIdentifierFailure("Something went wrong"))
    }
}


export function* watchForgotPasswordEmail(){
    yield takeEvery(FORGOT_PASSWORD_EMAIL, forgotPwdEmail)
}

export function* watchCheckResetIdentifier(){
    yield takeEvery(CHECK_RESET_IDENTIFIER, confirmResetPasswordIdentifier)
}

function* ForgotPwdSaga(){
    yield all([
        fork(watchForgotPasswordEmail),
        fork(watchCheckResetIdentifier)
    ])
}

export default ForgotPwdSaga;