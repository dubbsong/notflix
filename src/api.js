import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'b1aff257ceb0cbcdd236cef217694a61',
    language: 'en-US'
  }
});

export const movieApi = {
  trending: () => api.get('trending/movie/week'),
  nowPlaying: () => api.get('movie/now_playing'),
  topRated: () => api.get('movie/top_rated'),
  upcoming: () => api.get('movie/upcoming'),
  search: word =>
    api.get('search/movie', {
      params: {
        query: encodeURIComponent(word)
      }
    }),
  movieDetail: id => api.get(`movie/${id}`)
};

export const tvApi = {
  trending: () => api.get('trending/tv/week'),
  onTheAir: () => api.get('tv/on_the_air'),
  popular: () => api.get('tv/popular'),
  topRated: () => api.get('tv/top_rated'),
  search: word =>
    api.get('search/tv', {
      params: {
        query: encodeURIComponent(word)
      }
    }),
  tvDetail: id => api.get(`tv/${id}`)
};
