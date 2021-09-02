import {
    LOGIN_SOCIAL_MEDIA,
    LOGIN_SOCIAL_MEDIA_SUCCESS,
    LOGIN_SOCIAL_MEDIA_FAILURE,
    LOGIN_SOCIAL_MEDIA_INIT,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGIN_USER_INIT,
    LOGOUT_USER,
    LOGOUT_USER_FAILURE,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_INIT,
    GET_USER_DETAILS,
    GET_USER_DETAILS_SUCCESS,
    GET_USER_DETAILS_FAILURE,
    GET_USER_DETAILS_INIT,
    STORE_INIT,
    REGISTER_CUSTOMER,
    REGISTER_CUSTOMER_SUCCESS,
    REGISTER_CUSTOMER_FAILURE,
    REGISTER_CUSTOMER_INIT
} from './actionTypes'

const initialState = {
    errorMessage: null,
    isPreloader: false,
    loginUserSuccess: false,
    loginUserFailure: false,
    logoutUserSuccess: false,
    logoutUserFailure: false,
    getUserDetailsSuccess: false,
    getUserDetailsFaiure: false,
    loginDetails: null,
    userDetails: null
}

const Auth = (state = initialState, action) => {
    switch (action.type) {
        case STORE_INIT:
            return{
                ...state,
                loginDetails: null,
                userDetails: null,
                loginUserSuccess: false,
                loginUserFailure: false,
                logoutUserSuccess: false,
                logoutUserFailure: false,
                getUserDetailsSuccess: false,
                getUserDetailsFaiure: false,
                isPreloader: false
            }

        // Logging in through native sign in
        case LOGIN_USER:
            return{
                ...state,
                loginUserSuccess: false,
                loginUserFailure: false,
                isPreloader: true
            }
        case LOGIN_USER_SUCCESS:
            return{
                ...state,
                loginUserSuccess: true,
                loginUserFailure: false,
                isPreloader: false,
                loginDetails: action.payload
            }
        case LOGIN_USER_FAILURE:
            return{
                ...state,
                loginUserSuccess: false,
                loginUserFailure: true,
                isPreloader: false,
                loginDetails: action.payload
            }
        case LOGIN_USER_INIT:
            return{
                ...state,
                loginUserSuccess: false,
                loginUserFailure: false,
                isPreloader: false
            }

        // Logging in through FB sign in
        case LOGIN_SOCIAL_MEDIA:
            return{
                ...state,
                loginUserSuccess: false,
                loginUserFailure: false,
                isPreloader: true
            }
        case LOGIN_SOCIAL_MEDIA_SUCCESS:
            return{
                ...state,
                loginUserSuccess: true,
                loginUserFailure: false,
                isPreloader: false,
                loginDetails: action.payload
            }
        case LOGIN_SOCIAL_MEDIA_FAILURE:
            return{
                ...state,
                loginUserSuccess: false,
                loginUserFailure: true,
                isPreloader: false,
                loginDetails: action.payload
            }



        // Logout
        case LOGOUT_USER:
            return{
                ...state,
                logoutUserSuccess: false,
                logoutUserFailure: false,
                isPreloader: true
            }
        case LOGOUT_USER_SUCCESS:
            return{
                ...state,
                logoutUserSuccess: true,
                logoutUserFailure: false,
                isPreloader: false
            }
        case LOGOUT_USER_FAILURE:
            return{
                ...state,
                logoutUserSuccess: false,
                logoutUserFailure: true,
                isPreloader: false
            }
        case GET_USER_DETAILS:
            return{
                ...state,
                getUserDetailsSuccess: false,
                getUserDetailsFaiure: false,
                isPreloader: true
            }
        case GET_USER_DETAILS_SUCCESS:
            return{
                ...state,
                getUserDetailsSuccess: true,
                getUserDetailsFaiure: false,
                isPreloader: false,
                userDetails: action.payload
            }
        case GET_USER_DETAILS_FAILURE:
            return{
                ...state,
                getUserDetailsSuccess: false,
                getUserDetailsFaiure: true,
                isPreloader: false,
                userDetails: action.payload
            }
        case GET_USER_DETAILS_INIT:
            return{
                ...state,
                getUserDetailsSuccess: false,
                getUserDetailsFaiure: false,
                isPreloader: false
            }


            case REGISTER_CUSTOMER:
                return{
                    ...state,
                    loginUserSuccess: false,
                    loginUserFailure: false,
                    isPreloader: true
                }
            case REGISTER_CUSTOMER_SUCCESS:
                return{
                    ...state,
                    loginUserSuccess: true,
                    loginUserFailure: false,
                    isPreloader: false,
                }
            case REGISTER_CUSTOMER_FAILURE:
                return{
                    ...state,
                    loginUserSuccess: false,
                    loginUserFailure: true,
                    isPreloader: false,
                }
            // case REGISTER_CUSTOMER_INIT:
            //     return{
            //         ...state,
            //         loginUserSuccess: false,
            //         loginUserFailure: false,
            //         isPreloader: false,
            //     }
        default:
            return state
    }
}

export default Auth