import React from 'react';
import { Provider } from 'react-redux';

// Redux Store
import store from './store';

// Components
import CounterFC from './components/Counter';

export default () => {
  return (
    <Provider store={store}>
      <CounterFC />
    </Provider>
  )
}