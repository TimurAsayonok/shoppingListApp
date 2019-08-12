import {
  CREATE_UPDATE_LIST,
  ARCHIVE_LIST,
  DELETE_LIST
} from '../actions/types';


const initialState = {
  lists: [],
};

export default function (
  state = initialState,
  action
) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_UPDATE_LIST: {
      let newLists = [];
      const currentLists = state.lists;
      const isListInited = currentLists.findIndex((list) =>
        list.id === payload.id
      );
      console.log(isListInited)
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

      return {
        lists: newLists,
      }
    }

    case ARCHIVE_LIST: {
      const currentLists = state.lists;
      const newLists = currentLists.map((list: {}) => {
        if (list.id === payload) {
          return {
            ...list,
            archived: true
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