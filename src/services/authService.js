// Project Name: TGP Consumer Webapp
// -----------------------------
// Author: Priyanshu Chauhan
// Last Updated:   22/7/2021, 5:00:00 pm

import API from './interceptor';
require('dotenv').config()

export function loginAPI(payload) {
    var bodyFormData = new URLSearchParams();
    bodyFormData.append('username', `${payload.username}`);
    bodyFormData.append('password', `${payload.password}`);
    bodyFormData.append('grant_type', 'password');
    return API({
        method: 'POST',
        url: '/auth/token',
        headers: { 
          'Authorization': `Basic ${process.env.REACT_APP_SERVER_DATA}`, 
          'content-Type': 'application/x-www-form-urlencoded'
        },
        data : bodyFormData
      });
}

export function getUser(payload){
    console.log(payload);
    let params = {"userType": payload.user_type};
    return API({
      method: 'GET',
      url: `/api/users/${payload.user_id}`,
      params: params,
      data: payload
    })
}

export function makeCustomer(payload){
    console.log(payload);
    return API({
      method: 'POST',
      url: `/api/users/${payload.user_id}/create-customer`,
      data: payload
    })
}

export function getSocialToken(payload){
  console.log(payload);
  return API({
    method: 'POST',
    url: `/api/customers/${payload.type}`,
    data: payload.data
  })
}