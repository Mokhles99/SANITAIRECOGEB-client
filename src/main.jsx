
import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import store, { persistor } from './store.js';
import App from './App.jsx'
import './index.css'
import { PersistGate } from 'redux-persist/integration/react';
import './components/i18n/i18n.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);