import { combineReducers } from "redux"

import SignUp from './signUpStore/reducer'
import Auth from './authStore/reducer'
import ForgotPwd from './pwdResetStore/reducer'
import homeMain from './homeStore/reducer'
import getArtwork from './artworkStore/reducer'
import searchResults from './searchStore/reducer'
import getArtist from './artistStore/reducer'
import getEvents from './eventStore/reducer'

const rootReducer = combineReducers({
    SignUp,
    Auth,
    ForgotPwd,
    homeMain,
    getArtwork,
    searchResults,
    getArtist,
    getEvents
})

export default rootReducer