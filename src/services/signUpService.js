// Project Name: TGP Consumer Webapp
// -----------------------------
// Author: Priyanshu Chauhan
// Last Updated:   22/7/2021, 5:00:00 pm

import API from './interceptor';

export function createNewConsumer(payload){
    console.log(payload);
    return API({
      method: 'POST',
      url: '/api/users',
      data: payload
    })
}

export function setAccountPassword(payload){
    console.log(payload);
    let params = {"type": payload.type }
    return API({
      method: 'PUT',
      url: `/api/users/${payload.user_id}/change-password`,
      params: params,
      data: payload.data
    })
}

export function setTnCAcceptance(payload){
  console.log(payload);
  return API({
    method: 'POST',
    url: `/api/users/${payload.user_id}/accept-terms`
  })
}