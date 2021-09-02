import {GET_ARTIST_PROFILE,GET_ARTIST_PROFILE_SUCCESS,GET_ARTIST_PROFILE_FAILURE,GET_ARTIST_PROFILE_INIT,GET_ARTISTS_LIST,GET_ARTISTS_LIST_SUCCESS,GET_ARTISTS_LIST_FAILURE,GET_ARTISTS_LIST_INIT, GET_ARTIST_NAME_LIST, GET_ARTIST_NAME_LIST_SUCCESS, GET_ARTIST_NAME_LIST_FAILURE, GET_ARTIST_NAME_LIST_INIT, GET_FEATURED_ARTISTS, GET_FEATURED_ARTISTS_SUCCESS, GET_FEATURED_ARTISTS_FAILURE, GET_FEATURED_ARTISTS_INIT} from './actionTypes'
import { STORE_INIT } from '../authStore/actionTypes'

const initialState = {
    artistDetails: null,
    artistsList: null,
    artistNameList: null,
    featuredArtistsList: null,
    getArtistSuccess: false,
    getArtistFailure: false,
    getArtistsListSuccess: false,
    getArtistsListFailure: false,
    getArtistNamesListSuccess: false,
    getArtistNamesListFailure: false,
    getFeaturedArtistsSuccess: false,
    getFeaturedArtistsFailure: false,
    isPreloader: false,
    errorMessage: ''
}

const getArtist = (state = initialState, action) => {
    switch (action.type) {
        case STORE_INIT:
            return{
                ...state,
                artistDetails: null,
                artistsList: null,
                artistNameList: null,
                featuredArtistsList: null,
                getArtistSuccess: false,
                getArtistFailure: false,
                getArtistsListSuccess: false,
                getArtistsListFailure: false,
                getArtistNamesListSuccess: false,
                getArtistNamesListFailure: false,
                getFeaturedArtistsSuccess: false,
                getFeaturedArtistsFailure: false,
                isPreloader: false,
                errorMessage: ''
            }
        case GET_ARTIST_PROFILE:
            return{
                ...state,
                getArtistSuccess: false,
                getArtistFailure: false,
                isPreloader: true,
            }
        case GET_ARTIST_PROFILE_SUCCESS:
            return{
                ...state,
                getArtistSuccess: true,
                getArtistFailure: false,
                artistDetails: action.payload
            }
        case GET_ARTIST_PROFILE_FAILURE:
            return{
                ...state,
                getArtistSuccess: false,
                getArtistFailure: true,
            }
        case GET_ARTIST_PROFILE_INIT:
            return{
                ...state,
                getArtistSuccess: false,
                getArtistFailure: false,
                isPreloader: false,
            }

        // Reducer cases for Artist List - Search Results on Artist Search
        case GET_ARTISTS_LIST:
            return{
                ...state,
                getArtistsListSuccess: false,
                getArtistsListFailure: false,
                isPreloader: true,
            }
        case GET_ARTISTS_LIST_SUCCESS:
            return{
                ...state,
                getArtistsListSuccess: true,
                getArtistsListFailure: false,
                artistsList: action.payload
            }
        case GET_ARTISTS_LIST_FAILURE:
            return{
                ...state,
                getArtistsListSuccess: false,
                getArtistsListFailure: true,
            }
        case GET_ARTISTS_LIST_INIT:
            return{
                ...state,
                getArtistsListSuccess: false,
                getArtistsListFailure: false,
                isPreloader: false,
            }

        // Reducer cases for Artist Name List - Letter List
        case GET_ARTIST_NAME_LIST:
            return{
                ...state,
                getArtistNamesListSuccess: false,
                getArtistNamesListFailure: false,
                isPreloader: true,
            }
        case GET_ARTIST_NAME_LIST_SUCCESS:
            return{
                ...state,
                getArtistNamesListSuccess: true,
                getArtistNamesListFailure: false,
                artistNameList: action.payload
            }
        case GET_ARTIST_NAME_LIST_FAILURE:
            return{
                ...state,
                getArtistNamesListSuccess: false,
                getArtistNamesListFailure: true,
            }
        case GET_ARTIST_NAME_LIST_INIT:
            return{
                ...state,
                getArtistNamesListSuccess: false,
                getArtistNamesListFailure: false,
                isPreloader: false,
            }

        // Reducer cases for Featured Artists List
        case GET_FEATURED_ARTISTS:
            return{
                ...state,
                getFeaturedArtistsSuccess: false,
                getFeaturedArtistsFailure: false,
                isPreloader: true,
            }
        case GET_FEATURED_ARTISTS_SUCCESS:
            return{
                ...state,
                getFeaturedArtistsSuccess: true,
                getFeaturedArtistsFailure: false,
                featuredArtistsList: action.payload
            }
        case GET_FEATURED_ARTISTS_FAILURE:
            return{
                ...state,
                getFeaturedArtistsSuccess: false,
                getFeaturedArtistsFailure: true,
            }
        case GET_FEATURED_ARTISTS_INIT:
            return{
                ...state,
                getFeaturedArtistsSuccess: false,
                getFeaturedArtistsFailure: false,
                isPreloader: false,
            }
        default:
            return state;
    }
}

export default getArtist