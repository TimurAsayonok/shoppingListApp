import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import asyncMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';

const loggerMiddleware = createLogger({ predicate: () => __DEV__ });

const createStoreWithMiddleware = applyMiddleware(
  asyncMiddleware,
  loggerMiddleware,
)(createStore);

const getStore = () => {
  const store = createStoreWithMiddleware(rootReducer);

  return store;
};

export default getStore;