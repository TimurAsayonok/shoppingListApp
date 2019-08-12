import {
  CREATE_UPDATE_LIST,
  CHANGE_ARCHIVE_STATUS_LIST,
  DELETE_LIST
} from './types';

export const createUpdateList = (list: {}) => ({
  type: CREATE_UPDATE_LIST,
  payload: list
});

export const changeArchiveStatusList = (listId: string, status: boolean) => ({
  type: CHANGE_ARCHIVE_STATUS_LIST,
  payload: {
    listId,
    status
  }
});

export const deleteList = (listId: string) => ({
  type: DELETE_LIST,
  payload: listId
});