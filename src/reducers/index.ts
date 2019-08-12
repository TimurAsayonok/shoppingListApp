import { combineReducers } from 'redux';

import shoppingListsReducer from './shoppingLists';
import segmentButtonsReducer from './segmentButtons';
import listFormReducer from './listForm';

const rootReducer = combineReducers({
  shoppingLists: shoppingListsReducer,
  segmentButtons: segmentButtonsReducer,
  listForm: listFormReducer,
});


export default rootReducer;
export type AppState = ReturnType<typeof rootReducer>;