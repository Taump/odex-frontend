import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import App from './app';
import { GA_ID } from './config/environment';
import { Provider } from 'react-redux';
import ReactGA from "react-ga";
import history from "./store/history";

ReactGA.initialize(GA_ID);

const pathname = history.location.pathname.split("/");

ReactGA.pageview(pathname[1]);

const { store } = configureStore();
// registerServiceWorker();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
