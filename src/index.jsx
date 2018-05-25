import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import FormContainer from './react/components/container/FormContainer';
import reducer from './redux/reducer';

const loggerMiddleware = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  ),
);

render(
  <Provider store={store}>
    <FormContainer />
  </Provider>,
  document.getElementById('create-article-form'), // eslint-disable-line no-undef
);
