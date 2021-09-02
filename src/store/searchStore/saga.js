// Project Name: TGP Consumer Webapp
// -----------------------------
// Author: Priyanshu Chauhan
// Last Updated:   30/7/2021, 02:30:00 pm

import { takeEvery, fork, put, all, call, takeLatest } from 'redux-saga/effects';
import {GET_FILTERS,GET_FILTERS_SUCCESS,GET_FILTERS_FAILURE,GET_FILTERS_INIT,SEARCH_ARTWORK,SEARCH_ARTWORK_SUCCESS,SEARCH_ARTWORK_FAILURE,SEARCH_ARTWORK_INIT} from './actionTypes'
import {getFilters,getFiltersSuccess,getFiltersFailure,getFiltersInit,searchArtwork,searchArtworkSuccess,searchArtworkFailure,searchArtworkInit} from './actions'
import { findArtworks, searchFilters } from '../../services/searchService';


function* fetchFilters(action){
    try{
        const response = yield call (
            searchFilters,
            action.payload
        )
        console.log("After call",response);
        if(response.status === 200){
            yield put(getFiltersSuccess(response.data))
        }
        else{
            yield put(getFiltersFailure(response.data.message))
        }
    }
    catch(error){
        // yield console.log("Something went wrong!")
        yield put(getFiltersFailure("Something went wrong"))
    }
}


function* fetchSearchResults(action){
    try{
        const response = yield call (
            findArtworks,
            action.payload
        )
        console.log("After call",response);
        if(response.status === 200){
            yield put(searchArtworkSuccess(response.data))
        }
        else{
            yield put(searchArtworkFailure(response.data.message))
        }
    }
    catch(error){
        // yield console.log("Something went wrong!")
        yield put(searchArtworkFailure("Something went wrong"))
    }
}


export function* watchGetFilters(){
    yield takeEvery(GET_FILTERS, fetchFilters)
}

export function* watchSearchArtwork(){
    yield takeEvery(SEARCH_ARTWORK, fetchSearchResults)
}

function* searchSaga(){
    yield all([
        fork(watchGetFilters),
        fork(watchSearchArtwork),
    ])
}

export default searchSaga