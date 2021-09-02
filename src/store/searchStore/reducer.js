// Project Name: TGP Consumer Webapp
// -----------------------------
// Author: Priyanshu Chauhan
// Last Updated:   30/7/2021, 02:30:00 pm

import {GET_FILTERS,GET_FILTERS_SUCCESS,GET_FILTERS_FAILURE,GET_FILTERS_INIT,SEARCH_ARTWORK,SEARCH_ARTWORK_SUCCESS,SEARCH_ARTWORK_FAILURE,SEARCH_ARTWORK_INIT} from './actionTypes'
import { STORE_INIT } from '../authStore/actionTypes'

const initialState = {
    filters: null,
    searchResultsCollection: null,
    getFiltersSuccess: false,
    getFiltersFailure: false,
    getSearchResultsSuccess: false,
    getSearchResultsFailure: false,
    isPreloader: false,
    isSearchingArtwork: false,
    errorMessage: ''
}

const searchResults = (state = initialState, action) => {
    switch (action.type) {
        case STORE_INIT:
            return{
                ...state,
                filters: null,
                searchResultsCollection: null,
                getFiltersSuccess: false,
                getFiltersFailure: false,
                getSearchResultsSuccess: false,
                getSearchResultsFailure: false,
                isSearchingArtwork: false,
                isPreloader: false,
                errorMessage: ''
            }
        case GET_FILTERS:
            return{
                ...state,
                getFiltersSuccess: false,
                getFiltersFailure: false,
                // isPreloader: true
            }    
        case GET_FILTERS_SUCCESS:
            return{
                ...state,
                getFiltersSuccess: true,
                getFiltersFailure: false,
                filters: action.payload
            }    
        case GET_FILTERS_FAILURE:
            return{
                ...state,
                getFiltersSuccess: false,
                getFiltersFailure: true,
            }    
        case GET_FILTERS_INIT:
            return{
                ...state,
                getFiltersSuccess: false,
                getFiltersFailure: false,
                // isPreloader: false
            }    


        case SEARCH_ARTWORK:
            return{
                ...state,
                getSearchResultsSuccess: false,
                getSearchResultsFailure: false,
                isSearchingArtwork: true,
                isPreloader: true
            }    
        case SEARCH_ARTWORK_SUCCESS:
            return{
                ...state,
                getSearchResultsSuccess: true,
                getSearchResultsFailure: false,
                searchResultsCollection: action.payload
            }    
        case SEARCH_ARTWORK_FAILURE:
            return{
                ...state,
                getSearchResultsSuccess: false,
                getSearchResultsFailure: true,
            }    
        case SEARCH_ARTWORK_INIT:
            return{
                ...state,
                getSearchResultsSuccess: false,
                getSearchResultsFailure: false,
                isSearchingArtwork: false,
                isPreloader: false
            }    


        default:
            return state
    }
}

export default searchResults
