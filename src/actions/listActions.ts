import {
  CREATE_UPDATE_LIST,
  CHANGE_ARCHIVE_STATUS_LIST,
  DELETE_LIST,
} from './types';
import { PayloadAction } from '../interfaces/dispatchActions';
import { List } from '../interfaces/modals';

export const createUpdateList = (list: List): PayloadAction => ({
  type: CREATE_UPDATE_LIST,
  payload: list,
});

export const changeArchiveStatusList = (listId: string, status: boolean): PayloadAction => ({
  type: CHANGE_ARCHIVE_STATUS_LIST,
  payload: {
    listId,
    status,
  },
});

export const deleteList = (listId: string): PayloadAction => ({
  type: DELETE_LIST,
  payload: listId,
});
