import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import asyncMiddleware from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist'
import rootReducer from '../reducers/index';
import rootPersistConfig from './persistConfig';

const loggerMiddleware = createLogger({ predicate: () => __DEV__ });

const createStoreWithMiddleware = applyMiddleware(
  asyncMiddleware,
  loggerMiddleware,
)(createStore);

const getStore = () => {
  const store = createStoreWithMiddleware(persistReducer(rootPersistConfig, rootReducer));
  persistStore(store);

  return store;
};

export default getStore;