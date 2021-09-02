import { STORE_INIT } from '../authStore/actionTypes'
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

const initialState = {
    userDetails: null,
    forgotPasswordEmailSuccess: false,
    forgotPasswordEmailFailure: false,
    checkResetIdentifierSuccess: false,
    checkResetIdentifierFailure: false,
    isPreloader: false,
    errorMessage: ''
}

const ForgotPwd = (state = initialState, action) => {
    switch (action.type) {
        case STORE_INIT:
            return{
                ...state,
                userDetails: null,
                forgotPasswordEmailSuccess: false,
                forgotPasswordEmailFailure: false,
                checkResetIdentifierSuccess: false,
                checkResetIdentifierFailure: false,
                isPreloader: false,
                errorMessage: ''
            }
        case FORGOT_PASSWORD_EMAIL:
            return{
                ...state,
                forgotPasswordEmailSuccess: false,
                forgotPasswordEmailFailure: false,
                isPreloader: true,
                userDetails: {...state.userDetails, "email": action.payload.email}
            }
        case FORGOT_PASSWORD_EMAIL_SUCCESS:
            return{
                ...state,
                forgotPasswordEmailSuccess: true,
                forgotPasswordEmailFailure: false,
                userDetails: {...state.userDetails, "name": action.payload.name, "emailSent": action.payload.emailSent}
            }
        case FORGOT_PASSWORD_EMAIL_FAILURE:
            return{
                ...state,
                forgotPasswordEmailSuccess: false,
                forgotPasswordEmailFailure: true,
            }
        case FORGOT_PASSWORD_EMAIL_INIT:
            return{
                ...state,
                forgotPasswordEmailSuccess: false,
                forgotPasswordEmailFailure: false,
                isPreloader: false
            }

        case CHECK_RESET_IDENTIFIER:
            return{
                ...state,
                checkResetIdentifierSuccess: false,
                checkResetIdentifierFailure: false,
                isPreloader: true,
                // userDetails: {...state.userDetails, "email": action.payload.email}
            }
        case CHECK_RESET_IDENTIFIER_SUCCESS:
            return{
                ...state,
                checkResetIdentifierSuccess: true,
                checkResetIdentifierFailure: false,
                userDetails: {...state.userDetails, "name": action.payload.name, "userId": action.payload.userId, "urlValid": action.payload.urlValid}
            }
        case CHECK_RESET_IDENTIFIER_FAILURE:
            return{
                ...state,
                checkResetIdentifierSuccess: false,
                checkResetIdentifierFailure: true,
            }
        case CHECK_RESET_IDENTIFIER_INIT:
            return{
                ...state,
                checkResetIdentifierSuccess: false,
                checkResetIdentifierFailure: false,
                isPreloader: false
            }
        default:
            return state
    }
}

export default ForgotPwd