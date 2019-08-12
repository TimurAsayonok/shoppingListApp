import {
  CREATE_UPDATE_LIST,
  ARCHIVE_LIST,
  DELETE_LIST
} from './types';

export const createUpdateList = (list: {}) => ({
  type: CREATE_UPDATE_LIST,
  payload: list
});

export const archiveList = (listId: string) => ({
  type: ARCHIVE_LIST,
  payload: listId
});

export const deleteList = (listId: string) => ({
  type: DELETE_LIST,
  payload: listId
});