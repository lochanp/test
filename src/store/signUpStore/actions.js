import {
    CREATE_CONSUMER,
    CREATE_CONSUMER_SUCCESS,
    CREATE_CONSUMER_FAILURE,
    CREATE_CONSUMER_INIT,
    SET_PASSWORD,
    SET_PASSWORD_SUCCESS,
    SET_PASSWORD_FAILURE,
    SET_PASSWORD_INIT,
    SET_TNC_ACCEPTANCE,
    SET_TNC_ACCEPTANCE_SUCCESS,
    SET_TNC_ACCEPTANCE_FAILURE,
    SET_TNC_ACCEPTANCE_INIT
} from './actionTypes'

// Actions to create consumer account
export const createConsumer = (data) => {
    return{
        type: CREATE_CONSUMER,
        payload: data
    }
}

export const createConsumerSuccess = (data) => {
    return{
        type: CREATE_CONSUMER_SUCCESS,
        payload: data
    }
}

export const createConsumerFailure = (data) => {
    return{
        type: CREATE_CONSUMER_FAILURE,
        payload: data
    }
}

export const createConsumerInit = (data) => {
    return{
        type: CREATE_CONSUMER_INIT,
        payload: data
    }
}


export const setPassword = (data) => {
    return{
        type: SET_PASSWORD,
        payload: data
    }
}

export const setPasswordSuccess = (data) => {
    return{
        type: SET_PASSWORD_SUCCESS,
        payload: data
    }
}

export const setPasswordFailure = (data) => {
    return{
        type: SET_PASSWORD_FAILURE,
        payload: data
    }
}

export const setPasswordInit = (data) => {
    return{
        type: SET_PASSWORD_INIT,
        payload: data
    }
}

// Terms & Conditions Actions

export const setTnCAcceptance = (data) => {
    return{
        type: SET_TNC_ACCEPTANCE,
        payload: data
    }
}

export const setTnCAcceptanceSuccess = (data) => {
    return{
        type: SET_TNC_ACCEPTANCE_SUCCESS,
        payload: data
    }
}

export const setTnCAcceptanceFailure = (data) => {
    return{
        type: SET_TNC_ACCEPTANCE_FAILURE,
        payload: data
    }
}

export const setTnCAcceptanceInit = (data) => {
    return{
        type: SET_TNC_ACCEPTANCE_INIT,
        payload: data
    }
}