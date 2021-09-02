// Project Name: TGP Consumer Webapp
// -----------------------------
// Author: Priyanshu Chauhan
// Last Updated: 9/8/2021, 8:00:00 am

import {GET_FEATURED_EVENTS,GET_FEATURED_EVENTS_SUCCESS,GET_FEATURED_EVENTS_FAILURE,GET_FEATURED_EVENTS_INIT,GET_EVENT_DETAILS,GET_EVENT_DETAILS_SUCCESS,GET_EVENT_DETAILS_FAILURE,GET_EVENT_DETAILS_INIT,GET_SUGGESTED_EVENTS,GET_SUGGESTED_EVENTS_SUCCESS,GET_SUGGESTED_EVENTS_FAILURE,GET_SUGGESTED_EVENTS_INIT,GET_ACTIVE_EVENTS_LIST,GET_ACTIVE_EVENTS_LIST_SUCCESS,GET_ACTIVE_EVENTS_LIST_FAILURE,GET_ACTIVE_EVENTS_LIST_INIT} from './actionTypes'


// actions for the getFeaturedEvents(GET)
export const getFeaturedEvents = (data) => {
    return{
        type: GET_FEATURED_EVENTS,
        payload: data
    }
}
export const getFeaturedEventsSuccess = (data) => {
    return{
        type: GET_FEATURED_EVENTS_SUCCESS,
        payload: data
    }
}
export const getFeaturedEventsFailure = (data) => {
    return{
        type: GET_FEATURED_EVENTS_FAILURE,
        payload: data
    }
}
export const getFeaturedEventsInit = (data) => {
    return{
        type: GET_FEATURED_EVENTS_INIT,
        payload: data
    }
}

// actions for the getEventDetails(GET)
export const getEventDetails = (data) => {
    return{
        type: GET_EVENT_DETAILS,
        payload: data
    }
}
export const getEventDetailsSuccess = (data) => {
    return{
        type: GET_EVENT_DETAILS_SUCCESS,
        payload: data
    }
}
export const getEventDetailsFailure = (data) => {
    return{
        type: GET_EVENT_DETAILS_FAILURE,
        payload: data
    }
}
export const getEventDetailsInit = (data) => {
    return{
        type: GET_EVENT_DETAILS_INIT,
        payload: data
    }
}

// actions for the getSuggestedEvents(GET)
export const getSuggestedEvents = (data) => {
    return{
        type: GET_SUGGESTED_EVENTS,
        payload: data
    }
}
export const getSuggestedEventsSuccess = (data) => {
    return{
        type: GET_SUGGESTED_EVENTS_SUCCESS,
        payload: data
    }
}
export const getSuggestedEventsFailure = (data) => {
    return{
        type: GET_SUGGESTED_EVENTS_FAILURE,
        payload: data
    }
}
export const getSuggestedEventsInit = (data) => {
    return{
        type: GET_SUGGESTED_EVENTS_INIT,
        payload: data
    }
}

// actions for the getActiveEvents(GET)
export const getActiveEvents = (data) => {
    return{
        type: GET_ACTIVE_EVENTS_LIST,
        payload: data
    }
}
export const getActiveEventsSuccess = (data) => {
    return{
        type: GET_ACTIVE_EVENTS_LIST_SUCCESS,
        payload: data
    }
}
export const getActiveEventsFailure = (data) => {
    return{
        type: GET_ACTIVE_EVENTS_LIST_FAILURE,
        payload: data
    }
}
export const getActiveEventsInit = (data) => {
    return{
        type: GET_ACTIVE_EVENTS_LIST_INIT,
        payload: data
    }
}