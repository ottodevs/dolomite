import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import getCryptocurrencyPrices from './common/utils/cryptocurrency-price-tracker';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './redux-store/store';
import * as actionCreators from './redux-store/actions/action-creators/token-action-creators';

// This applies globally to all axios instances.
// See axios.js file in src/ folder to see how to apply to specific instances only.
const requestInterceptor = axios.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
  },
  (error) => {
    // since this is a request interceptor, this one will catch things like not
    // having an internet connection
    console.log(error);
    return Promise.reject(error); // handled again in catch
  }
);

console.log(requestInterceptor);
// axios.interceptors.request.eject(myInterceptor); TO REMOVE INTERCEPTOR

const dispatchUpdateTokenValues = (tokenValues) => {
  store.dispatch(actionCreators.updateTokenValues(tokenValues));
};

getCryptocurrencyPrices().then((res) => {
  dispatchUpdateTokenValues(res.data);
});

setInterval(() => {
  getCryptocurrencyPrices().then((res) => {
    dispatchUpdateTokenValues(res.data);
  });
}, 10000);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
