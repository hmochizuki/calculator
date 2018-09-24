import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './containers/App';

const store = createStore(reducer)

render(
  <dev>
    <Provider store={store}>
      <App />
    </Provider>
  </dev>,
  document.getElementById('root')
)
