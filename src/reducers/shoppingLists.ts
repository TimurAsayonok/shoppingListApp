import {
  CREATE_UPDATE_LIST,
  CHANGE_ARCHIVE_STATUS_LIST,
  DELETE_LIST
} from '../actions/types';
import { ShoppingListsState } from '../interfaces/reducers';
import { sortShoppingList } from '../utilites/listHelper';


const initialState: ShoppingListsState = {
  lists: [],
};

export default function (
  state = initialState,
  action: any
) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_UPDATE_LIST: {
      let newLists = [];
      const currentLists = state.lists;
      const isListInited = currentLists.findIndex((list) =>
        list.id === payload.id
      );

      if (isListInited >= 0) {
        newLists = currentLists.map((list: {}) => {
          if (list.id === payload.id) {
            return {
              ...payload
            }
          }

          return list;
        })
      } else {
        newLists = currentLists;
        newLists.push(payload);
      }

      // sort list by date and reverse for getting 'ASCending' data.
      const sortedList = newLists.sort(sortShoppingList).reverse();

      return {
        lists: sortedList,
      }
    }

    case CHANGE_ARCHIVE_STATUS_LIST: {
      const currentLists = state.lists;
      const newLists = currentLists.map((list: {}) => {
        if (list.id === payload.listId) {
          return {
            ...list,
            archived: payload.status
          }
        }

        return list
      });

      return {
        lists: newLists,
      }
    }

    case DELETE_LIST: {
      const currentLists = state.lists;
      const newLists = currentLists.filter((list: {}) => list.id !== payload);

      return {
        lists: newLists
      }
    }

    default:
      return state;
  }
}