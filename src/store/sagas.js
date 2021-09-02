import { all } from 'redux-saga/effects'

import SignUpSaga from './signUpStore/saga'
import AuthSaga from './authStore/saga'
import ForgotPwdSaga from './pwdResetStore/saga'
import homeSaga from './homeStore/saga'
import artworkSaga from './artworkStore/saga'
import searchSaga from './searchStore/saga'
import artistSaga from './artistStore/saga'
import eventsSaga from './eventStore/saga'

export default function* rootSaga(){
    yield all([
        SignUpSaga(),
        AuthSaga(),
        ForgotPwdSaga(),
        homeSaga(),
        artworkSaga(),
        searchSaga(),
        artistSaga(),
        eventsSaga(),
    ])
}