// Project Name: TGP Consumer Webapp
// -----------------------------
// Author: Priyanshu Chauhan
// Last Updated:   29/7/2021, 12:30:00 pm

import API from './interceptor';

export function getDashboard(payload){
    // console.log(payload);
    let params = {"limit": payload.limit, "offset": payload.offset};
    return API({
      method: 'GET',
      url: `/api/customers/guest-dashboard`,
      params: params,
      // data: payload.data
    })
}