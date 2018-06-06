/*
This file allows us to set up unique axios instances that have
their own defaults. Example: The exchangeApi requester has a
default base url so when we import it, we only need to
request from the route rather than the baseURL + route.
axios will prepend the baseURL to all requests using exchangeApiRequester.
 */
import axios from 'axios';

const exchangeApiRequester = axios.create({
  baseURL: 'dolomite.exchangeapi.com'
});

// TODO: change to actual auth token if needed
exchangeApiRequester.defaults.headers.common.Authorization = 'AUTH TOKEN';

const responseInterceptor = exchangeApiRequester.interceptors.response.use(
  response => {
    console.log(response);
    return response;
  },
  error => {
    console.log(error); // TODO: Here's where we'd send the log to the server
    return Promise.reject(error);
  }
);
console.log(responseInterceptor);

export default exchangeApiRequester;
