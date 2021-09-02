// Project Name: TGP Consumer Webapp
// -----------------------------
// Author: Priyanshu Chauhan
// Last Updated: 9/8/2021, 8:00:00 am

import {GET_FEATURED_EVENTS,GET_FEATURED_EVENTS_SUCCESS,GET_FEATURED_EVENTS_FAILURE,GET_FEATURED_EVENTS_INIT,GET_EVENT_DETAILS,GET_EVENT_DETAILS_SUCCESS,GET_EVENT_DETAILS_FAILURE,GET_EVENT_DETAILS_INIT,GET_SUGGESTED_EVENTS,GET_SUGGESTED_EVENTS_SUCCESS,GET_SUGGESTED_EVENTS_FAILURE,GET_SUGGESTED_EVENTS_INIT,GET_ACTIVE_EVENTS_LIST,GET_ACTIVE_EVENTS_LIST_SUCCESS,GET_ACTIVE_EVENTS_LIST_FAILURE,GET_ACTIVE_EVENTS_LIST_INIT} from './actionTypes'
import { STORE_INIT } from '../authStore/actionTypes'

const initialState = {
    eventDetails: null,
    featuredEventsList: null,
    activeEventsList: null,
    suggestedEventsList: null,
    getEventDetailsSuccess: false,
    getEventDetailsFailure: false,
    getFeaturedEventsListSuccess: false,
    getFeaturedEventsListFailure: false,
    getActiveEventsListSuccess: false,
    getActiveEventsListFailure: false,
    getSuggestedEventsListSuccess: false,
    getSuggestedEventsListFailure: false,
    isPreloader: false,
    errorMessage: ''
}

const getEvents = (state = initialState, action) => {
    switch (action.type) {
        case STORE_INIT:
            return{
                ...state,
                eventDetails: null,
                featuredEventsList: null,
                activeEventsList: null,
                suggestedEventsList: null,
                getEventDetailsSuccess: false,
                getEventDetailsFailure: false,
                getFeaturedEventsListSuccess: false,
                getFeaturedEventsListFailure: false,
                getActiveEventsListSuccess: false,
                getActiveEventsListFailure: false,
                getSuggestedEventsListSuccess: false,
                getSuggestedEventsListFailure: false,
                isPreloader: false,
                errorMessage: ''
            }
        // ------- Reducer cases for getting a particular event's details
        case GET_EVENT_DETAILS:
            return{
                ...state,
                getEventDetailsSuccess: false,
                getEventDetailsFailure: false,
                isPreloader: true
            }
        case GET_EVENT_DETAILS_SUCCESS:
            return{
                ...state,
                getEventDetailsSuccess: true,
                getEventDetailsFailure: false,
                eventDetails: action.payload
            }
        case GET_EVENT_DETAILS_FAILURE:
            return{
                ...state,
                getEventDetailsSuccess: false,
                getEventDetailsFailure: true,
            }
        case GET_EVENT_DETAILS_INIT:
            return{
                ...state,
                getEventDetailsSuccess: false,
                getEventDetailsFailure: false,
                isPreloader: false
            }

        // ------- Reducer cases for getting the list of featured events - To be used on Webapp's Homepage
        case GET_FEATURED_EVENTS:
            return{
                ...state,
                getFeaturedEventsListSuccess: false,
                getFeaturedEventsListFailure: false,
                isPreloader: true
            }
        case GET_FEATURED_EVENTS_SUCCESS:
            return{
                ...state,
                getFeaturedEventsListSuccess: true,
                getFeaturedEventsListFailure: false,
                featuredEventsList: action.payload
            }
        case GET_FEATURED_EVENTS_FAILURE:
            return{
                ...state,
                getFeaturedEventsListSuccess: false,
                getFeaturedEventsListFailure: true,
            }
        case GET_FEATURED_EVENTS_INIT:
            return{
                ...state,
                getFeaturedEventsListSuccess: false,
                getFeaturedEventsListFailure: false,
                isPreloader: false
            }

        // ------- Reducer cases for getting the list of Active Events - For Event Search Results and Events Homepage
        case GET_ACTIVE_EVENTS_LIST:
            return{
                ...state,
                getActiveEventsListSuccess: false,
                getActiveEventsListFailure: false,
                isPreloader: true
            }
        case GET_ACTIVE_EVENTS_LIST_SUCCESS:
            return{
                ...state,
                getActiveEventsListSuccess: true,
                getActiveEventsListFailure: false,
                activeEventsList: action.payload
            }
        case GET_ACTIVE_EVENTS_LIST_FAILURE:
            return{
                ...state,
                getActiveEventsListSuccess: false,
                getActiveEventsListFailure: true,
            }
        case GET_ACTIVE_EVENTS_LIST_INIT:
            return{
                ...state,
                getActiveEventsListSuccess: false,
                getActiveEventsListFailure: false,
                isPreloader: false
            }
        
        // ------- Reducer cases for getting list of suggested events - For suggested events below a event details page
        case GET_SUGGESTED_EVENTS:
            return{
                ...state,
                getSuggestedEventsListSuccess: false,
                getSuggestedEventsListFailure: false,
                isPreloader: true
            }
        case GET_SUGGESTED_EVENTS_SUCCESS:
            return{
                ...state,
                getSuggestedEventsListSuccess: true,
                getSuggestedEventsListFailure: false,
                suggestedEventsList: action.payload
            }
        case GET_SUGGESTED_EVENTS_FAILURE:
            return{
                ...state,
                getSuggestedEventsListSuccess: false,
                getSuggestedEventsListFailure: true,
            }
        case GET_SUGGESTED_EVENTS_INIT:
            return{
                ...state,
                getSuggestedEventsListSuccess: false,
                getSuggestedEventsListFailure: false,
                isPreloader: false
            }
    
        default:
            return state
        }
    }
    
export default getEvents