import { combineReducers } from 'redux';

import shoppingLists from './shoppingLists';

const rootReducer = combineReducers({
  shoppingLists
});


export default rootReducer;
export type AppState = ReturnType<typeof rootReducer>;