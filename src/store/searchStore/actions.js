// Project Name: TGP Consumer Webapp
// -----------------------------
// Author: Priyanshu Chauhan
// Last Updated:   30/7/2021, 02:30:00 pm

import {GET_FILTERS,GET_FILTERS_SUCCESS,GET_FILTERS_FAILURE,GET_FILTERS_INIT,SEARCH_ARTWORK,SEARCH_ARTWORK_SUCCESS,SEARCH_ARTWORK_FAILURE,SEARCH_ARTWORK_INIT} from './actionTypes'

export const getFilters = (data) => {
    return{
        type: GET_FILTERS,
        payload: data
    }
}

export const getFiltersSuccess = (data) => {
    return{
        type: GET_FILTERS_SUCCESS,
        payload: data
    }
}

export const getFiltersFailure = (data) => {
    return{
        type: GET_FILTERS_FAILURE,
        payload: data
    }
}

export const getFiltersInit = (data) => {
    return{
        type: GET_FILTERS_INIT,
        payload: data
    }
}

export const searchArtwork = (data) => {
    return{
        type: SEARCH_ARTWORK,
        payload: data
    }
}

export const searchArtworkSuccess = (data) => {
    return{
        type: SEARCH_ARTWORK_SUCCESS,
        payload: data
    }
}

export const searchArtworkFailure = (data) => {
    return{
        type: SEARCH_ARTWORK_FAILURE,
        payload: data
    }
}

export const searchArtworkInit = (data) => {
    return{
        type: SEARCH_ARTWORK_INIT,
        payload: data
    }
}