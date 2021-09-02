// Project Name: TGP Consumer Webapp
// -----------------------------
// Author: Priyanshu Chauhan
// Last Updated:   29/7/2021, 12:30:00 pm

import {GET_HOME_ARTWORK,GET_HOME_ARTWORK_SUCCESS,GET_HOME_ARTWORK_FAILURE,GET_HOME_ARTWORK_INIT} from './actionTypes'

export const getHomeArtwork = (data) => {
    return{
        type: GET_HOME_ARTWORK,
        payload: data
    }
}
export const getHomeArtworkSuccess = (data) => {
    return{
        type: GET_HOME_ARTWORK_SUCCESS,
        payload: data
    }
}
export const getHomeArtworkFailure = (data) => {
    return{
        type: GET_HOME_ARTWORK_FAILURE,
        payload: data
    }
}
export const getHomeArtworkInit = (data) => {
    return{
        type: GET_HOME_ARTWORK_INIT,
        payload: data
    }
}