// Project Name: TGP Consumer Webapp
// -----------------------------
// Author: Priyanshu Chauhan
// Last Updated:   22/7/2021, 5:00:00 pm

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {persistor, store} from './store';
import { PersistGate } from 'redux-persist/integration/react'
import { ContextProvider } from './utils/DataContext';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

