import API from './interceptor';

export function fetchFeaturedEvents(payload){
    return API({
        method: 'GET',
        url: `/api/events/featured`
    })
}

export function fetchEvent(payload){
    return API({
        method: 'GET',
        url: `/api/events/${payload}`
    })
}

export function fetchSuggestedEvents(payload){
    // console.log(payload);
    let params = {"limit": payload.limit, "offset": payload.offset};
    return API({
      method: 'GET',
      url: `/api/events/${payload.event_id}/suggested`,
      params: params,
    })
}

export function fetchActiveEvents(payload){
    // console.log(payload);
    let params = {"limit": payload.limit, "offset": payload.offset};
    return API({
      method: 'POST',
      url: `/api/events/active`,
      params: params,
      data: payload.data
    })
}