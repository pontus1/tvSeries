import axios, {AxiosPromise} from 'axios';
import {TvShow, TvShowSearch} from './types/tvShows';

const baseURL = 'https://api.tvmaze.com';
const responseType = 'json';
const headers = {
  'Content-Type': 'application/json',
};

const instance = axios.create({
  baseURL,
  responseType,
  headers,
});

instance.interceptors.response.use((response) => {
  console.log('RESPONSE: ', response);
  return response;
});

instance.interceptors.request.use((request) => {
  console.log('REQUEST: ', request);
  return request;
});

export const getAllShows = (): AxiosPromise<any> => {
  return instance.get('/shows');
};

export const getShowsBySearchTerm = ({
  searchTerm,
}: {
  searchTerm: string;
}): AxiosPromise<TvShowSearch[]> => {
  return instance.get('search/shows', {params: {q: searchTerm}});
};

export const getShowInfo = ({
  showId,
}: {
  showId: number;
}): AxiosPromise<TvShow> => {
  return instance.get(`/shows/${showId}`);
};

export default instance;
