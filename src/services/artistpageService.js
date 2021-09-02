import API from './interceptor';

export function fetchArtistDetails(payload){
    let params = {"userHandle": payload};
    return API({
      method: 'GET',
      url: `/api/artists/artist-profile`,
      params: params,
    })
}

export function fetchArtists(payload){
  // console.log(payload);
  let params = {"limit": payload.limit, "offset": payload.offset, "searchTerm": payload.searchTerm};
  return API({
    method: 'GET',
    url: `/api/artists/active-artists`,
    params: params,
  })
}

export function fetchArtistNameList(payload){
  let params = {"selectedAlphabet": payload.selectedAlphabet, "limit": payload.limit, "offset": payload.offset};
  return API({
    method: 'GET',
    url: `/api/artists/name-list`,
    params: params,
  })
}

export function fetchFeaturedArtists(payload){
  let params = {"limit": payload.limit, "offset": payload.offset};
  return API({
    method: 'GET',
    url: `/api/artists/featured`,
    params: params,
  })
}