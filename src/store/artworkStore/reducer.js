// Project Name: TGP Consumer Webapp
// -----------------------------
// Authors: Priyanshu Chauhan, Prince Maurya
// Last Updated:   29/7/2021, 12:30:00 pm
import {GET_ONE_ARTWORK,GET_ONE_ARTWORK_SUCCESS,GET_ONE_ARTWORK_FAILURE,GET_ONE_ARTWORK_INIT, GET_SIMILAR_ARTWORK, GET_SIMILAR_ARTWORK_SUCCESS, GET_SIMILAR_ARTWORK_FAILURE, GET_SIMILAR_ARTWORK_INIT, GET_DEDICATED_ARTWORK, GET_DEDICATED_ARTWORK_SUCCESS, GET_DEDICATED_ARTWORK_FAILURE, GET_DEDICATED_ARTWORK_INIT, GET_SERIES_ARTWORK, GET_SERIES_ARTWORK_SUCCESS, GET_SERIES_ARTWORK_FAILURE, GET_SERIES_ARTWORK_INIT, REPORT_ARTWORK, REPORT_ARTWORK_SUCCESS, REPORT_ARTWORK_FAILURE, REPORT_ARTWORK_INIT, GET_REPORT_OPTIONS, GET_REPORT_OPTIONS_SUCCESS, GET_REPORT_OPTIONS_FAILURE, GET_REPORT_OPTIONS_INIT} from './actionTypes'
import { STORE_INIT } from '../authStore/actionTypes'

const initialState = {
    artworkDetails: null,
    similarArtworkCollection: null,
    dedicatedArtworkCollection: null,
    seriesArtworkCollection: null,
    reportReasons: null,
    getArtworkSuccess: false,
    getArtworkFailure: false,
    getSimilarArtworkSuccess: false,
    getSimilarArtworkFailure: false,
    getDedicatedArtworkSuccess: false,
    getDedicatedArtworkFailure: false,
    getSeriesArtworkSuccess: false,
    getSeriesArtworkFailure: false,
    reportArtworkSuccess: false,
    reportArtworkFailure: false,
    getReportOptionsSuccess: false,
    getReportOptionsFailure: false,
    isPreloader: false,
    errorMessage: ''
}

const getArtwork = (state = initialState, action) => {
    switch (action.type) {
        case STORE_INIT:
            return{
                ...state,
                artworkDetails: null,
                similarArtworkCollection: null,
                dedicatedArtworkCollection: null,
                seriesArtworkCollection: null,
                reportReasons: null,
                getArtworkSuccess: false,
                getArtworkFailure: false,
                getSimilarArtworkSuccess: false,
                getSimilarArtworkFailure: false,
                getDedicatedArtworkSuccess: false,
                getDedicatedArtworkFailure: false,
                getSeriesArtworkSuccess: false,
                getSeriesArtworkFailure: false,
                reportArtworkSuccess: false,
                reportArtworkFailure: false,
                getReportOptionsSuccess: false,
                getReportOptionsFailure: false,
                isPreloader: false,
                errorMessage: ''
            }
        case GET_ONE_ARTWORK:
            return{
                ...state,
                getArtworkSuccess: false,
                getArtworkFailure: false,
                isPreloader: true
            }
        case GET_ONE_ARTWORK_SUCCESS:
            return{
                ...state,
                getArtworkSuccess: true,
                getArtworkFailure: false,
                artworkDetails: action.payload
            }
        case GET_ONE_ARTWORK_FAILURE:
            return{
                ...state,
                getArtworkSuccess: false,
                getArtworkFailure: true,
            }
        case GET_ONE_ARTWORK_INIT:
            return{
                ...state,
                getArtworkSuccess: false,
                getArtworkFailure: false,
                isPreloader: false
            }

        // For Similar Artworks
        case GET_SIMILAR_ARTWORK:
            return{
                ...state,
                getSimilarArtworkSuccess: false,
                getSimilarArtworkFailure: false,
                isPreloader: true
            }
        case GET_SIMILAR_ARTWORK_SUCCESS:
            return{
                ...state,
                getSimilarArtworkSuccess: true,
                getSimilarArtworkFailure: false,
                similarArtworkCollection: action.payload
            }
        case GET_SIMILAR_ARTWORK_FAILURE:
            return{
                ...state,
                getSimilarArtworkSuccess: false,
                getSimilarArtworkFailure: true
            }
        case GET_SIMILAR_ARTWORK_INIT:
            return{
                ...state,
                getSimilarArtworkSuccess: false,
                getSimilarArtworkFailure: false,
                isPreloader: false
            }

        // For Dedicated Artworks
        case GET_DEDICATED_ARTWORK:
            return{
                ...state,
                getDedicatedArtworkSuccess: false,
                getDedicatedArtworkFailure: false,
                isPreloader: true
            }
        case GET_DEDICATED_ARTWORK_SUCCESS:
            return{
                ...state,
                getDedicatedArtworkSuccess: true,
                getDedicatedArtworkFailure: false,
                dedicatedArtworkCollection: action.payload
            }
        case GET_DEDICATED_ARTWORK_FAILURE:
            return{
                ...state,
                getDedicatedArtworkSuccess: false,
                getDedicatedArtworkFailure: true,
            }
        case GET_DEDICATED_ARTWORK_INIT:
            return{
                ...state,
                getDedicatedArtworkSuccess: false,
                getDedicatedArtworkFailure: false,
                isPreloader: false
            }

        // For Series Artworks
        case GET_SERIES_ARTWORK:
            return{
                ...state,
                getSeriesArtworkSuccess: false,
                getSeriesArtworkFailure: false,
                isPreloader: true
            }
        case GET_SERIES_ARTWORK_SUCCESS:
            return{
                ...state,
                getSeriesArtworkSuccess: true,
                getSeriesArtworkFailure: false,
                seriesArtworkCollection: action.payload
            }
        case GET_SERIES_ARTWORK_FAILURE:
            return{
                ...state,
                getSeriesArtworkSuccess: false,
                getSeriesArtworkFailure: true,
            }
        case GET_SERIES_ARTWORK_INIT:
            return{
                ...state,
                getSeriesArtworkSuccess: false,
                getSeriesArtworkFailure: false,
                isPreloader: false
            }
            //For Report Options
        case GET_REPORT_OPTIONS:
            return {
            ...state,
            getReportOptionsSuccess: false,
            getReportOptionsFailure: false,
            isPreloader: true,
            };
        case GET_REPORT_OPTIONS_SUCCESS:
            return {
            ...state,
            getReportOptionsSuccess: true,
            getReportOptionsFailure: false,
            reportReasons: action.payload
            };
        case GET_REPORT_OPTIONS_FAILURE:
            return {
            ...state,
            getReportOptionsSuccess: false,
            getReportOptionsFailure: true,
            };
        case GET_REPORT_OPTIONS_INIT:
            return {
            ...state,
            getReportOptionsSuccess: false,
            getReportOptionsFailure: false,
            isPreloader: false,
            };
        //For Report Artwork
        case REPORT_ARTWORK:
            return {
            ...state,
            reportArtworkSuccess: false,
            reportArtworkFailure: false,
            isPreloader: true,
            };
        case REPORT_ARTWORK_SUCCESS:
            return {
            ...state,
            reportArtworkSuccess: true,
            reportArtworkFailure: false,
            };
        case REPORT_ARTWORK_FAILURE:
            return {
            ...state,
            reportArtworkSuccess: false,
            reportArtworkFailure: true,
            };
        case REPORT_ARTWORK_INIT:
            return {
            ...state,
            reportArtworkSuccess: false,
            reportArtworkFailure: false,
            isPreloader: false,
            };
        default:
            return state
    }
}

export default getArtwork