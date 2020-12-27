import React from 'react';
import Router from './routes/router';
import store from '../src/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
