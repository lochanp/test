// Project Name: TGP Consumer Webapp
// -----------------------------
// Author: Priyanshu Chauhan
// Last Updated:   29/7/2021, 12:30:00 pm

import {GET_HOME_ARTWORK,GET_HOME_ARTWORK_SUCCESS,GET_HOME_ARTWORK_FAILURE,GET_HOME_ARTWORK_INIT} from './actionTypes'
import { STORE_INIT } from '../authStore/actionTypes'

const initialState = {
    artworkCollection: null,
    getArtworkCollectionSuccess: false,
    getArtworkCollectionFailure: false,
    isPreloader: false,
    errorMessage: ''
}

const homeMain = (state = initialState, action) => {
    switch (action.type) {
        case STORE_INIT:
            return{
                ...state,
                artworkCollection: null,
                getArtworkCollectionSuccess: false,
                getArtworkCollectionFailure: false,
                isPreloader: false,
                errorMessage: ''
            }
        case GET_HOME_ARTWORK:
            return{
                ...state,
                getArtworkCollectionSuccess: false,
                getArtworkCollectionFailure: false,
                isPreloader: true
            }
        case GET_HOME_ARTWORK_SUCCESS:
            return{
                ...state,
                getArtworkCollectionSuccess: true,
                getArtworkCollectionFailure: false,
                artworkCollection: action.payload
            }
        case GET_HOME_ARTWORK_FAILURE:
            return{
                ...state,
                getArtworkCollectionSuccess: false,
                getArtworkCollectionFailure: true
            }
        case GET_HOME_ARTWORK_INIT:
            return{
                ...state,
                getArtworkCollectionSuccess: false,
                getArtworkCollectionFailure: false,
                isPreloader: false
            }
    
        default:
            return state
    }
}

export default homeMain