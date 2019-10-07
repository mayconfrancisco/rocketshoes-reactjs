import React from 'react';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './config/reactotronConfig';

import history from './services/history';
import store from './store';
import Routes from './routes';
import GlobalStyles from './styles/globals';

import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
