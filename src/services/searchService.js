import API from './interceptor';

export function searchFilters(payload){
    // console.log(payload);
    return API({
      method: 'GET',
      url: '/api/customers/filters'
    })
}

export function findArtworks(payload){
    // console.log(payload);
    let params = {"limit": payload.limit, "offset": payload.offset }
    return API({
      method: 'POST',
      url: `/api/customers/search-artwork`,
      params: params,
      data: payload.data
    })
}