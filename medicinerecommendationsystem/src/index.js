import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// import liberary for pop window in react
import 'bootstrap/dist/css/bootstrap.css';


// import for api callings allows
import { Provider } from 'react-redux'
import { store } from './app/store'


import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>
);

reportWebVitals();
