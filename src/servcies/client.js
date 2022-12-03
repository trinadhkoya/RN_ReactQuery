import axios from 'axios';

const HEADERS = {
  'Content-Type': 'application/json',
};
const HTTPClient = axios.create({
  baseURL: 'https://dummyjson.com/',
  headers: HEADERS,
});

HTTPClient.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error),
);

export {HTTPClient};
