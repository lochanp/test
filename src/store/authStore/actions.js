import {
    LOGIN_SOCIAL_MEDIA,
    LOGIN_SOCIAL_MEDIA_SUCCESS,
    LOGIN_SOCIAL_MEDIA_FAILURE,
    LOGIN_SOCIAL_MEDIA_INIT,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER,
    LOGOUT_USER_FAILURE,
    LOGOUT_USER_SUCCESS,
    GET_USER_DETAILS,
    GET_USER_DETAILS_SUCCESS,
    GET_USER_DETAILS_FAILURE,
    GET_USER_DETAILS_INIT,
    STORE_INIT,
    LOGIN_USER_INIT,
    REGISTER_CUSTOMER,
    REGISTER_CUSTOMER_SUCCESS,
    REGISTER_CUSTOMER_FAILURE,
    REGISTER_CUSTOMER_INIT
} from './actionTypes'

// Initialising Store
export const storeInit = () => {
    return {
        type: STORE_INIT
    }
}

export const loginUser = (data) => {
    console.log("data is", data)
    return{
        type: LOGIN_USER,
        payload: data
    }
}

export const loginUserSuccess = (data) => {
    return{
        type: LOGIN_USER_SUCCESS,
        payload: data
    }
}

export const loginUserFailure = (data) => {
    return{
        type: LOGIN_USER_FAILURE,
        payload: data
    }
}

export const loginUserInit = (data) => {
    return{
        type: LOGIN_USER_INIT,
        payload: data
    }
}




export const getUserDetails = (data) => {
    return{
        type: GET_USER_DETAILS,
        payload: data
    }
}

export const getUserDetailsSuccess = (data) => {
    return{
        type: GET_USER_DETAILS_SUCCESS,
        payload: data
    }
}

export const getUserDetailsFailure = (data) => {
    return{
        type: GET_USER_DETAILS_FAILURE,
        payload: data
    }
}

export const getUserDetailsInit = (data) => {
    return{
        type: GET_USER_DETAILS_INIT,
        payload: data
    }
}


export const loginUserSocialMedia = (data) => {
    return{
        type: LOGIN_SOCIAL_MEDIA,
        payload: data
    }
}
export const loginUserSocialMediaSuccess = (data) => {
    return{
        type: LOGIN_SOCIAL_MEDIA_SUCCESS,
        payload: data
    }
}
export const loginUserSocialMediaFailure = (data) => {
    return{
        type: LOGIN_SOCIAL_MEDIA_FAILURE,
        payload: data
    }
}

export const registerCustomer = (data) => {
    return{
        type: REGISTER_CUSTOMER,
        payload: data
    }
}
export const registerCustomerSuccess = (data) => {
    return{
        type: REGISTER_CUSTOMER_SUCCESS,
        payload: data
    }
}
export const registerCustomerFailure = (data) => {
    return{
        type: REGISTER_CUSTOMER_FAILURE,
        payload: data
    }
}
export const registerCustomerInit = (data) => {
    return{
        type: REGISTER_CUSTOMER_INIT,
        payload: data
    }
}