import {
  INIT_LIST_FORM,
  CHANGE_FORM_FIELD,
  ADD_PRODUCT_TO_LIST,
  CHANGE_PRODUCT_BY_ID,
  CLEAR_LIST_FORM,
} from './types';
import {
  DefaultAction,
  PayloadAction,
} from '../interfaces/dispatchActions';
import { List } from '../interfaces/modals';

export const initListForm = (list?: List): PayloadAction => ({
  type: INIT_LIST_FORM,
  payload: list,
});

export const сhangeFormField = (field: string, value: any): PayloadAction => ({
  type: CHANGE_FORM_FIELD,
  payload: {
    field,
    value,
  },
});

export const clearListForm = (): DefaultAction => ({
  type: CLEAR_LIST_FORM,
});

export const addProductToList = (): DefaultAction => ({
  type: ADD_PRODUCT_TO_LIST,
});

export const updateProductById = (id: string, value: any): PayloadAction => ({
  type: CHANGE_PRODUCT_BY_ID,
  payload: {
    id,
    value,
  },
});
