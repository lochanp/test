import {GET_ARTIST_PROFILE,GET_ARTIST_PROFILE_SUCCESS,GET_ARTIST_PROFILE_FAILURE,GET_ARTIST_PROFILE_INIT,GET_ARTISTS_LIST,GET_ARTISTS_LIST_SUCCESS,GET_ARTISTS_LIST_FAILURE,GET_ARTISTS_LIST_INIT, GET_ARTIST_NAME_LIST, GET_ARTIST_NAME_LIST_SUCCESS, GET_ARTIST_NAME_LIST_FAILURE, GET_ARTIST_NAME_LIST_INIT, GET_FEATURED_ARTISTS, GET_FEATURED_ARTISTS_SUCCESS, GET_FEATURED_ARTISTS_FAILURE, GET_FEATURED_ARTISTS_INIT} from './actionTypes'

// Actions for Artist Profile details
export const getArtistProfile = (data) => {
    return{
        type: GET_ARTIST_PROFILE,
        payload: data
    }
}
export const getArtistProfileSuccess = (data) => {
    return{
        type: GET_ARTIST_PROFILE_SUCCESS,
        payload: data
    }
}
export const getArtistProfileFailure = (data) => {
    return{
        type: GET_ARTIST_PROFILE_FAILURE,
        payload: data
    }
}
export const getArtistProfileInit = (data) => {
    return{
        type: GET_ARTIST_PROFILE_INIT,
        payload: data
    }
}

// Actions for Artist List - For Search Artist results
export const getArtistsList = (data) => {
    return{
        type: GET_ARTISTS_LIST,
        payload: data
    }
}
export const getArtistsListSuccess = (data) => {
    return{
        type: GET_ARTISTS_LIST_SUCCESS,
        payload: data
    }
}
export const getArtistsListFailure = (data) => {
    return{
        type: GET_ARTISTS_LIST_FAILURE,
        payload: data
    }
}
export const getArtistsListInit = (data) => {
    return{
        type: GET_ARTISTS_LIST_INIT,
        payload: data
    }
}


// Actions for Artist Name List - List in the artist search with names
export const getArtistNameList = (data) => {
    return{
        type: GET_ARTIST_NAME_LIST,
        payload: data
    }
}
export const getArtistNameListSuccess = (data) => {
    return{
        type: GET_ARTIST_NAME_LIST_SUCCESS,
        payload: data
    }
}
export const getArtistNameListFailure = (data) => {
    return{
        type: GET_ARTIST_NAME_LIST_FAILURE,
        payload: data
    }
}
export const getArtistNameListInit = (data) => {
    return{
        type: GET_ARTIST_NAME_LIST_INIT,
        payload: data
    }
}

// Actions for Featured Artists list
export const getFeaturedArtists = (data) => {
    return{
        type: GET_FEATURED_ARTISTS,
        payload: data
    }
}
export const getFeaturedArtistsSuccess = (data) => {
    return{
        type: GET_FEATURED_ARTISTS_SUCCESS,
        payload: data
    }
}
export const getFeaturedArtistsFailure = (data) => {
    return{
        type: GET_FEATURED_ARTISTS_FAILURE,
        payload: data
    }
}
export const getFeaturedArtistsInit = (data) => {
    return{
        type: GET_FEATURED_ARTISTS_INIT,
        payload: data
    }
}