import {
    FORGOT_PASSWORD_EMAIL,
    FORGOT_PASSWORD_EMAIL_SUCCESS,
    FORGOT_PASSWORD_EMAIL_FAILURE,
    FORGOT_PASSWORD_EMAIL_INIT,
    CHECK_RESET_IDENTIFIER,
    CHECK_RESET_IDENTIFIER_SUCCESS,
    CHECK_RESET_IDENTIFIER_FAILURE,
    CHECK_RESET_IDENTIFIER_INIT
} from './actionTypes'

export const forgotPasswordEmail = (data) => {
    return{
        type: FORGOT_PASSWORD_EMAIL,
        payload: data
    }
}

export const forgotPasswordEmailSuccess = (data) => {
    return{
        type: FORGOT_PASSWORD_EMAIL_SUCCESS,
        payload: data
    }
}

export const forgotPasswordEmailFailure = (data) => {
    return{
        type: FORGOT_PASSWORD_EMAIL_FAILURE,
        payload: data
    }
}

export const forgotPasswordEmailInit = (data) => {
    return{
        type: FORGOT_PASSWORD_EMAIL_INIT,
        payload: data
    }
}


export const checkResetIdentifier = (data) => {
    return{
        type: CHECK_RESET_IDENTIFIER,
        payload: data
    }
}

export const checkResetIdentifierSuccess = (data) => {
    return{
        type: CHECK_RESET_IDENTIFIER_SUCCESS,
        payload: data
    }
}

export const checkResetIdentifierFailure = (data) => {
    return{
        type: CHECK_RESET_IDENTIFIER_FAILURE,
        payload: data
    }
}

export const checkResetIdentifierInit = (data) => {
    return{
        type: CHECK_RESET_IDENTIFIER_INIT,
        payload: data
    }
}