import { STORE_INIT } from '../authStore/actionTypes'
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

const initialState = {
    userDetails: null,
    createConsumerSuccess: false,
    createConsumerFailure: false,
    setPasswordSuccess: false,
    setPasswordFailure: false,
    setTnCSuccess: false,
    setTnCFailure: false,
    isPreloader: false,
    errorMessage: ''
}

const SignUp = (state = initialState, action) => {
    switch (action.type) {
        case STORE_INIT:
            return{
                ...state,
                userDetails: null,
                createConsumerSuccess: false,
                createConsumerFailure: false,
                setPasswordSuccess: false,
                setPasswordFailure: false,
                setTnCSuccess: false,
                setTnCFailure: false,
                isPreloader: false,
                errorMessage: ''
            }
        case CREATE_CONSUMER:
            return{
                ...state,
                createConsumerSuccess: false,
                createConsumerFailure: false,
                isPreloader: true
            }
        case CREATE_CONSUMER_SUCCESS:
            return{
                ...state,
                createConsumerSuccess: true,
                createConsumerFailure: false,
                userDetails: action.payload
            }
        case CREATE_CONSUMER_FAILURE:
            return{
                ...state,
                createConsumerSuccess: false,
                createConsumerFailure: true,
                // userDetails: action.payload
            }
        case CREATE_CONSUMER_INIT:
            return{
                ...state,
                createConsumerSuccess: false,
                createConsumerFailure: false,
                isPreloader: false
            }
        
        case SET_PASSWORD:
            return{
                ...state,
                setPasswordSuccess: false,
                setPasswordFailure: false,
                isPreloader: true
            }
        case SET_PASSWORD_SUCCESS:
            return{
                ...state,
                setPasswordSuccess: true,
                setPasswordFailure: false,
            }
        case SET_PASSWORD_FAILURE:
            return{
                ...state,
                setPasswordSuccess: false,
                setPasswordFailure: true,
            }
        case SET_PASSWORD_INIT:
            return{
                ...state,
                setPasswordSuccess: false,
                setPasswordFailure: false,
                isPreloader: false
            }

        // Terms and Conditions Reducer
        case SET_TNC_ACCEPTANCE:
            return{
                ...state,
                setTnCSuccess: false,
                setTnCFailure: false,
                isPreloader: true
            }
        case SET_TNC_ACCEPTANCE_SUCCESS:
            return{
                ...state,
                setTnCSuccess: true,
                setTnCFailure: false,
            }
        case SET_TNC_ACCEPTANCE_FAILURE:
            return{
                ...state,
                setTnCSuccess: false,
                setTnCFailure: true,
            }
        case SET_TNC_ACCEPTANCE_INIT:
            return{
                ...state,
                setTnCSuccess: false,
                setTnCFailure: false,
                isPreloader: false
            }
        default:
            return state
    }
}

export default SignUp
