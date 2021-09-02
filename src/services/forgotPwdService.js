// Project Name: TGP Consumer Webapp
// -----------------------------
// Author: Priyanshu Chauhan
// Last Updated:   22/7/2021, 5:00:00 pm

import API from './interceptor';

export function emailForgotPassword(payload){
    console.log(payload);
    return API({
      method: 'POST',
      url: '/api/users/forgot-password',
      data: payload
    })
}

export function verifyResetIdentifier(payload){
    console.log(payload);
    return API({
      method: 'POST',
      url: '/api/users/check-reset-identifier',
      data: payload
    })
}
