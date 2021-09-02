import API from './interceptor';

export function fetchArtwork(payload){
    return API({
        method: 'GET',
        url: `/api/artworks/${payload}/active`
    })
}

export function getSimilarArtworks(payload){
    return API({
      method: 'GET',
      url: `/api/artworks/${payload}/similar-artwork`,
    })
}

export function fetchDedicatedArtworks(payload){
    // console.log(payload);
    let params = {"limit": payload.limit, "offset": payload.offset};
    return API({
      method: 'POST',
      url: `/api/artists/${payload.artistID}/artworks/dedicated-artwork`,
      params: params,
      data: payload.data
    })
}

export function fetchArtworkOfSeries(payload){
    // console.log(payload);
    let params = {"limit": payload.limit, "offset": payload.offset};
    return API({
      method: 'GET',
      url: `/api/artworks/${payload.artworkId}/series-artwork-list`,
      params: params,
    })
}

export function getReportOptions() {
  return API({
    method: 'GET',
    url: '/api/reports/reasons',
  });
}
export function reportArtwork(payload) {
  return API({
    method: 'POST',
    url: `/api/customers/${payload.customer_id}/artworks/${payload.artwork_id}/reports`,
    data: payload.data
  });
}

