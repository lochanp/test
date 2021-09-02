// Project Name: TGP Consumer Webapp
// -----------------------------
// Author: Priyanshu Chauhan
// Last Updated: 9/8/2021, 8:00:00 am

import { takeEvery, fork, put, all, call, takeLatest } from 'redux-saga/effects';
import { fetchActiveEvents, fetchEvent, fetchFeaturedEvents, fetchSuggestedEvents } from '../../services/eventspageService';
import { getActiveEventsFailure, getActiveEventsSuccess, getEventDetailsFailure, getEventDetailsSuccess, getFeaturedEventsFailure, getFeaturedEventsSuccess, getSuggestedEventsFailure, getSuggestedEventsSuccess } from './actions';

import {GET_FEATURED_EVENTS,GET_FEATURED_EVENTS_SUCCESS,GET_FEATURED_EVENTS_FAILURE,GET_FEATURED_EVENTS_INIT,GET_EVENT_DETAILS,GET_EVENT_DETAILS_SUCCESS,GET_EVENT_DETAILS_FAILURE,GET_EVENT_DETAILS_INIT,GET_SUGGESTED_EVENTS,GET_SUGGESTED_EVENTS_SUCCESS,GET_SUGGESTED_EVENTS_FAILURE,GET_SUGGESTED_EVENTS_INIT,GET_ACTIVE_EVENTS_LIST,GET_ACTIVE_EVENTS_LIST_SUCCESS,GET_ACTIVE_EVENTS_LIST_FAILURE,GET_ACTIVE_EVENTS_LIST_INIT} from './actionTypes'

function* fetchEventDetails(action){
    try{
        const response = yield call (
            fetchEvent,
            action.payload
        )
        console.log("After call",response);
        if(response.status === 200){
            yield put(getEventDetailsSuccess(response.data))
        }
        else{
            yield put(getEventDetailsFailure(response.data.message))
        }
    }
    catch(error){
        // yield console.log("Something went wrong!")
        yield put(getEventDetailsFailure("Something went wrong"))
    }
}

function* fetchFeaturedEventsList(action){
    try{
        const response = yield call (
            fetchFeaturedEvents,
            action.payload
        )
        console.log("After call",response);
        if(response.status === 200){
            yield put(getFeaturedEventsSuccess(response.data))
        }
        else{
            yield put(getFeaturedEventsFailure(response.data.message))
        }
    }
    catch(error){
        // yield console.log("Something went wrong!")
        yield put(getFeaturedEventsFailure("Something went wrong"))
    }
}

// Saga function for getting list of all active events for Events Homepage and Events Search Results
function* fetchActiveEventsList(action){
    try{
        const response = yield call (
            fetchActiveEvents,
            action.payload
        )
        console.log("After call",response);
        if(response.status === 200){
            yield put(getActiveEventsSuccess(response.data))
        }
        else{
            yield put(getActiveEventsFailure(response.data.message))
        }
    }
    catch(error){
        // yield console.log("Something went wrong!")
        yield put(getActiveEventsFailure("Something went wrong"))
    }
}

function* fetchSuggestedEventsList(action){
    try{
        const response = yield call (
            fetchSuggestedEvents,
            action.payload
        )
        console.log("After call",response);
        if(response.status === 200){
            yield put(getSuggestedEventsSuccess(response.data))
        }
        else{
            yield put(getSuggestedEventsFailure(response.data.message))
        }
    }
    catch(error){
        // yield console.log("Something went wrong!")
        yield put(getSuggestedEventsFailure("Something went wrong"))
    }
}


export function* watchGetEventDetails(){
    yield takeEvery(GET_EVENT_DETAILS, fetchEventDetails)
}

export function* watchGetFeaturedEvents(){
    yield takeEvery(GET_FEATURED_EVENTS, fetchFeaturedEventsList)
}

export function* watchGetSuggestedEventsList(){
    yield takeEvery(GET_SUGGESTED_EVENTS, fetchSuggestedEventsList)
}

export function* watchGetActiveEventsList(){
    yield takeEvery(GET_ACTIVE_EVENTS_LIST, fetchActiveEventsList)
}


function* eventsSaga(){
    yield all([
        fork(watchGetEventDetails),
        fork(watchGetFeaturedEvents),
        fork(watchGetActiveEventsList),
        fork(watchGetSuggestedEventsList),
    ])
}

export default eventsSaga;