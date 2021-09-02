import { takeEvery, fork, put, all, call, takeLatest } from 'redux-saga/effects';
import {
    CREATE_CONSUMER,
    CREATE_CONSUMER_SUCCESS,
    CREATE_CONSUMER_FAILURE,
    CREATE_CONSUMER_INIT,
    SET_PASSWORD,
    SET_PASSWORD_SUCCESS,
    SET_PASSWORD_FAILURE,
    SET_PASSWORD_INIT,
    SET_TNC_ACCEPTANCE
} from './actionTypes'

import {createConsumer,createConsumerFailure,createConsumerSuccess,createConsumerInit,setPassword,setPasswordFailure,setPasswordSuccess,setPasswordInit, setTnCAcceptanceSuccess, setTnCAcceptanceFailure} from './actions'

import {createNewConsumer,setAccountPassword, setTnCAcceptance} from '../../services/signUpService'


function* addConsumer(action){
    try{
        const response = yield call (
            createNewConsumer,
            action.payload
        )
        console.log("After call",response);
        if(response.status === 200){
            yield put(createConsumerSuccess(response.data))
        }
        else{
            yield put(createConsumerFailure(response.data.message))
        }
    }
    catch(error){
        // yield console.log("Something went wrong!")
        yield put(createConsumerFailure("Something went wrong"))
    }
}
function* addPassword(action){
    try{
        const response = yield call (
            setAccountPassword,
            action.payload
        )
        console.log("After call",response);
        if(response.status === 200){
            yield put(setPasswordSuccess(response.data))
        }
        else{
            yield put(setPasswordFailure(response.data.message))
        }
    }
    catch(error){
        // yield console.log("Something went wrong!")
        yield put(setPasswordFailure("Something went wrong"))
    }
}

function* setTnC(action){
    try{
        const response = yield call (
            setTnCAcceptance,
            action.payload
        )
        console.log("After call",response);
        if(response.status === 200){
            yield put(setTnCAcceptanceSuccess(response.data))
        }
        else{
            yield put(setTnCAcceptanceFailure(response.data.message))
        }
    }
    catch(error){
        // yield console.log("Something went wrong!")
        yield put(setTnCAcceptanceFailure("Something went wrong"))
    }
}


export function* watchCreateConsumer(){
    yield takeEvery(CREATE_CONSUMER, addConsumer)
}

export function* watchSetPassword(){
    yield takeEvery(SET_PASSWORD, addPassword)
}

export function* watchSetTnCAcceptance(){
    yield takeEvery(SET_TNC_ACCEPTANCE, setTnC)
}

function* SignUpSaga(){
    yield all([
        fork(watchCreateConsumer),
        fork(watchSetPassword),
        fork(watchSetTnCAcceptance)
    ])
}

export default SignUpSaga;