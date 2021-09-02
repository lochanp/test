// Project Name: TGP Consumer Webapp
// -----------------------------
// Authors: Priyanshu Chauhan, Prince Maurya
// Last Updated:   29/7/2021, 12:30:00 pm

import {GET_ONE_ARTWORK,GET_ONE_ARTWORK_SUCCESS,GET_ONE_ARTWORK_FAILURE,GET_ONE_ARTWORK_INIT, GET_SIMILAR_ARTWORK, GET_SIMILAR_ARTWORK_SUCCESS, GET_SIMILAR_ARTWORK_FAILURE, GET_SIMILAR_ARTWORK_INIT, GET_DEDICATED_ARTWORK, GET_DEDICATED_ARTWORK_SUCCESS, GET_DEDICATED_ARTWORK_FAILURE, GET_DEDICATED_ARTWORK_INIT, GET_SERIES_ARTWORK, GET_SERIES_ARTWORK_SUCCESS, GET_SERIES_ARTWORK_FAILURE, GET_SERIES_ARTWORK_INIT, REPORT_ARTWORK, REPORT_ARTWORK_SUCCESS, REPORT_ARTWORK_FAILURE, REPORT_ARTWORK_INIT, GET_REPORT_OPTIONS, GET_REPORT_OPTIONS_SUCCESS, GET_REPORT_OPTIONS_FAILURE, GET_REPORT_OPTIONS_INIT} from './actionTypes'

export const getOneArtwork = (data) => {
    return{
        type: GET_ONE_ARTWORK,
        payload: data
    }
}
export const getOneArtworkSuccess = (data) => {
    return{
        type: GET_ONE_ARTWORK_SUCCESS,
        payload: data
    }
}
export const getOneArtworkFailure = (data) => {
    return{
        type: GET_ONE_ARTWORK_FAILURE,
        payload: data
    }
}
export const getOneArtworkInit = (data) => {
    return{
        type: GET_ONE_ARTWORK_INIT,
        payload: data
    }
}


// actions for the getSimilarArtwork(GET)
export const getSimilarArtwork = (data) => {
    return{
        type: GET_SIMILAR_ARTWORK,
        payload: data
    }
}
export const getSimilarArtworkSuccess = (data) => {
    return{
        type: GET_SIMILAR_ARTWORK_SUCCESS,
        payload: data
    }
}
export const getSimilarArtworkFailure = (data) => {
    return{
        type: GET_SIMILAR_ARTWORK_FAILURE,
        payload: data
    }
}
export const getSimilarArtworkInit = (data) => {
    return{
        type: GET_SIMILAR_ARTWORK_INIT,
        payload: data
    }
}

// actions for the getDedicatedArtwork(POST)
export const getDedicatedArtwork = (data) => {
    return{
        type: GET_DEDICATED_ARTWORK,
        payload: data
    }
}
export const getDedicatedArtworkSuccess = (data) => {
    return{
        type: GET_DEDICATED_ARTWORK_SUCCESS,
        payload: data
    }
}
export const getDedicatedArtworkFailure = (data) => {
    return{
        type: GET_DEDICATED_ARTWORK_FAILURE,
        payload: data
    }
}
export const getDedicatedArtworkInit = (data) => {
    return{
        type: GET_DEDICATED_ARTWORK_INIT,
        payload: data
    }
}

// actions for the getSeriesArtwork(GET)
export const getSeriesArtwork = (data) => {
    return{
        type: GET_SERIES_ARTWORK,
        payload: data
    }
}
export const getSeriesArtworkSuccess = (data) => {
    return{
        type: GET_SERIES_ARTWORK_SUCCESS,
        payload: data
    }
}
export const getSeriesArtworkFailure = (data) => {
    return{
        type: GET_SERIES_ARTWORK_FAILURE,
        payload: data
    }
}
export const getSeriesArtworkInit = (data) => {
    return{
        type: GET_SERIES_ARTWORK_INIT,
        payload: data
    }
}

// actions for the reportArtwork
export const reportArtwork = (data) => {
    return {
      type: REPORT_ARTWORK,
      payload: data,
    };
  };
  export const reportArtworkSuccess = (data) => {
    return {
      type: REPORT_ARTWORK_SUCCESS,
      payload: data,
    };
  };
  export const reportArtworkFailure = (data) => {
    return {
      type: REPORT_ARTWORK_FAILURE,
      payload: data,
    };
  };
  export const reportArtworkInit = (data) => {
    return {
      type: REPORT_ARTWORK_INIT,
      payload: data,
    };
  };
  // actions for reportOptions
  export const reportOption = (data) => {
    return {
      type: GET_REPORT_OPTIONS,
      payload: data,
    };
  };
  export const reportOptionSuccess = (data) => {
    return {
      type: GET_REPORT_OPTIONS_SUCCESS,
      payload: data,
    };
  };
  export const reportOptionFailure = (data) => {
    return {
      type: GET_REPORT_OPTIONS_FAILURE,
      payload: data,
    };
  };
  export const reportOptionInit = (data) => {
    return {
      type: GET_REPORT_OPTIONS_INIT,
      payload: data,
    };
  };
  