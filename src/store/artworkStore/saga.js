// Project Name: TGP Consumer Webapp
// -----------------------------
// Authors: Priyanshu Chauhan, Prince Maurya
// Last Updated:   29/7/2021, 12:30:00 pm

import { takeEvery, fork, put, all, call, takeLatest } from 'redux-saga/effects';

import {GET_ONE_ARTWORK,GET_ONE_ARTWORK_SUCCESS,GET_ONE_ARTWORK_FAILURE,GET_ONE_ARTWORK_INIT, GET_SIMILAR_ARTWORK, GET_DEDICATED_ARTWORK, GET_SERIES_ARTWORK, REPORT_ARTWORK, GET_REPORT_OPTIONS} from './actionTypes'

import {getOneArtwork,getOneArtworkSuccess,getOneArtworkFailure,getOneArtworkInit, getSimilarArtworkSuccess, getSimilarArtworkFailure, getDedicatedArtworkSuccess, getDedicatedArtworkFailure, getSeriesArtworkSuccess, getSeriesArtworkFailure, reportArtworkSuccess, reportArtworkFailure, reportOptionSuccess, reportOptionFailure} from './actions'

import { fetchArtwork, fetchArtworkOfSeries, fetchDedicatedArtworks, getReportOptions, getSimilarArtworks, reportArtwork } from '../../services/artworkpageService';

function* fetchOneArtwork(action){
    try{
        const response = yield call (
            fetchArtwork,
            action.payload
        )
        console.log("After call",response);
        if(response.status === 200){
            yield put(getOneArtworkSuccess(response.data))
        }
        else{
            yield put(getOneArtworkFailure(response.data.message))
        }
    }
    catch(error){
        // yield console.log("Something went wrong!")
        yield put(getOneArtworkFailure("Something went wrong"))
    }
}


function* fetchSimilarArtwork(action){
    try{
        const response = yield call (
            getSimilarArtworks,
            action.payload
        )
        console.log("After call",response);
        if(response.status === 200){
            yield put(getSimilarArtworkSuccess(response.data))
        }
        else{
            yield put(getSimilarArtworkFailure(response.data.message))
        }
    }
    catch(error){
        // yield console.log("Something went wrong!")
        yield put(getSimilarArtworkFailure("Something went wrong"))
    }
}


function* fetchDedicatedArtwork(action){
    try{
        const response = yield call (
            fetchDedicatedArtworks,
            action.payload
        )
        console.log("After call",response);
        if(response.status === 200){
            yield put(getDedicatedArtworkSuccess(response.data))
        }
        else{
            yield put(getDedicatedArtworkFailure(response.data.message))
        }
    }
    catch(error){
        // yield console.log("Something went wrong!")
        yield put(getDedicatedArtworkFailure("Something went wrong"))
    }
}

function* fetchSeriesArtwork(action){
    try{
        const response = yield call (
            fetchArtworkOfSeries,
            action.payload
        )
        console.log("After call",response);
        if(response.status === 200){
            yield put(getSeriesArtworkSuccess(response.data))
        }
        else{
            yield put(getSeriesArtworkFailure(response.data.message))
        }
    }
    catch(error){
        // yield console.log("Something went wrong!")
        yield put(getSeriesArtworkFailure("Something went wrong"))
    }
}

function* fetchReportArtwork(action) {
    try {
      const response = yield call(
        reportArtwork,
        action.payload
      );
      console.log('after call', response);
      if (response.status === 200) {
        yield put(reportArtworkSuccess(response.data));
      } else {
        yield put(reportArtworkFailure(response.data));
      }
    } catch (error) {
      yield put(reportArtworkFailure('Something went wrong'));
    }
  }
  
  function* fetchReportOptions(action) {
    try {
      const response = yield call(
        getReportOptions,
        action.payload
      );
      console.log('after call', response);
      if (response.status === 200) {
        yield put(reportOptionSuccess(response.data));
      } else {
        yield put(reportOptionFailure(response.data));
      }
    } catch (error) {
      yield put(reportOptionFailure('Something went wrong'));
    }
  }

export function* watchGetOneArtwork(){
    yield takeEvery(GET_ONE_ARTWORK, fetchOneArtwork)
}

export function* watchGetSimilarArtwork(){
    yield takeEvery(GET_SIMILAR_ARTWORK, fetchSimilarArtwork)
}

export function* watchGetDedicatedArtwork(){
    yield takeEvery(GET_DEDICATED_ARTWORK, fetchDedicatedArtwork)
}

export function* watchGetSeriesArtwork(){
    yield takeEvery(GET_SERIES_ARTWORK, fetchSeriesArtwork)
}

export function* watchReportArtwork() {
    yield takeEvery(REPORT_ARTWORK, fetchReportArtwork);
}
export function* watchGetReportOptions() {
    yield takeEvery(GET_REPORT_OPTIONS, fetchReportOptions);
}

function* artworkSaga(){
    yield all([
        fork(watchGetOneArtwork),
        fork(watchGetSimilarArtwork),
        fork(watchGetDedicatedArtwork),
        fork(watchGetSeriesArtwork),
        fork(watchReportArtwork),
        fork(watchGetReportOptions)
    ])
}

export default artworkSaga;