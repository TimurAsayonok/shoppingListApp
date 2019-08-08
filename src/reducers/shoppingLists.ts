import {
  orderBy,
  uniqBy,
} from 'lodash';
// import {
//   SEARCH_RECIPES_START,
//   SEARCH_RECIPES_FULFILLED,
// } from '../../actions/recipe/constants';
// import { RecipesState } from '../types';
// import { PayloadAction } from '../../types/actions';


const initialState = {

};

export default function (
  state = initialState,
  action
) {
  const { type, payload } = action;

  switch (type) {
    case "LISTS": {
      return {
        ...state
      }
    }

    default:
      return state;
  }
}