import { combineReducers } from 'redux';

import shoppingListsReducer from './shoppingLists';

const rootReducer = combineReducers({
  shoppingLists: shoppingListsReducer
});


export default rootReducer;
export type AppState = ReturnType<typeof rootReducer>;