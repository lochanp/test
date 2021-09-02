import { takeEvery, fork, put, all, call, takeLatest } from 'redux-saga/effects';
import {GET_ARTIST_PROFILE,GET_ARTIST_PROFILE_SUCCESS,GET_ARTIST_PROFILE_FAILURE,GET_ARTIST_PROFILE_INIT,GET_ARTISTS_LIST,GET_ARTISTS_LIST_SUCCESS,GET_ARTISTS_LIST_FAILURE,GET_ARTISTS_LIST_INIT, GET_ARTIST_NAME_LIST, GET_FEATURED_ARTISTS} from './actionTypes'
import {getArtistProfile,getArtistProfileSuccess,getArtistProfileFailure,getArtistProfileInit,getArtistsListSuccess,getArtistsListFailure, getFeaturedArtistsSuccess, getFeaturedArtistsFailure, getArtistNameListSuccess, getArtistNameListFailure} from './actions'
import { fetchArtistDetails, fetchArtistNameList, fetchArtists, fetchFeaturedArtists } from '../../services/artistpageService';


function* fetchArtistData(action){
    try{
        const response = yield call (
            fetchArtistDetails,
            action.payload
        )
        console.log("After call",response);
        if(response.status === 200){
            yield put(getArtistProfileSuccess(response.data))
        }
        else{
            yield put(getArtistProfileFailure(response.data.message))
        }
    }
    catch(error){
        // yield console.log("Something went wrong!")
        yield put(getArtistProfileFailure("Something went wrong"))
    }
}

function* fetchArtistsList(action){
    try{
        const response = yield call (
            fetchArtists,
            action.payload
        )
        console.log("After call",response);
        if(response.status === 200){
            yield put(getArtistsListSuccess(response.data))
        }
        else{
            yield put(getArtistsListFailure(response.data.message))
        }
    }
    catch(error){
        // yield console.log("Something went wrong!")
        yield put(getArtistsListFailure("Something went wrong"))
    }
}

function* fetchArtistNames(action){
    try{
        const response = yield call (
            fetchArtistNameList,
            action.payload
        )
        console.log("After call",response);
        if(response.status === 200){
            yield put(getArtistNameListSuccess(response.data))
        }
        else{
            yield put(getArtistNameListFailure(response.data.message))
        }
    }
    catch(error){
        // yield console.log("Something went wrong!")
        yield put(getArtistNameListFailure("Something went wrong"))
    }
}

function* fetchFeaturedNames(action){
    try{
        const response = yield call (
            fetchFeaturedArtists,
            action.payload
        )
        console.log("After call",response);
        if(response.status === 200){
            yield put(getFeaturedArtistsSuccess(response.data))
        }
        else{
            yield put(getFeaturedArtistsFailure(response.data.message))
        }
    }
    catch(error){
        // yield console.log("Something went wrong!")
        yield put(getFeaturedArtistsFailure("Something went wrong"))
    }
}



export function* watchGetArtistDetails(){
    yield takeEvery(GET_ARTIST_PROFILE, fetchArtistData);
}

export function* watchGetArtistsList(){
    yield takeEvery(GET_ARTISTS_LIST, fetchArtistsList);
}

export function* watchGetArtistNamesList(){
    yield takeEvery(GET_ARTIST_NAME_LIST, fetchArtistNames);
}

export function* watchFeaturedArtistList(){
    yield takeEvery(GET_FEATURED_ARTISTS, fetchFeaturedNames);
}

function* artistSaga(){
    yield all([
        fork(watchGetArtistDetails),
        fork(watchGetArtistsList),
        fork(watchGetArtistNamesList),
        fork(watchFeaturedArtistList),
    ])
}

export default artistSaga