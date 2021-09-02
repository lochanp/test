// Project Name: TGP Consumer Webapp
// -----------------------------
// Author: Priyanshu Chauhan
// Last Updated:   29/7/2021, 12:30:00 pm

import { takeEvery, fork, put, all, call, takeLatest } from 'redux-saga/effects';
import {GET_HOME_ARTWORK,GET_HOME_ARTWORK_SUCCESS,GET_HOME_ARTWORK_FAILURE,GET_HOME_ARTWORK_INIT} from './actionTypes'
import {getHomeArtwork, getHomeArtworkSuccess, getHomeArtworkFailure, getHomeArtworkInit} from './actions'
import { getDashboard } from '../../services/homepageService';


function* fetchHomeArtwork(action){
    try{
        const response = yield call (
            getDashboard,
            action.payload
        )
        console.log("After call",response);
        if(response.status === 200){
            yield put(getHomeArtworkSuccess(response.data))
        }
        else{
            yield put(getHomeArtworkFailure(response.data.message))
        }
    }
    catch(error){
        // yield console.log("Something went wrong!")
        yield put(getHomeArtworkFailure("Something went wrong"))
    }
}


export function* watchGetHomeArtwork(){
    yield takeEvery(GET_HOME_ARTWORK, fetchHomeArtwork)
}

function* homeSaga(){
    yield all([
        fork(watchGetHomeArtwork),
    ])
}

export default homeSaga