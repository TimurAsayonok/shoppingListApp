import {
  INIT_LIST_FORM,
  CHANGE_FORM_FIELD,
  ADD_PRODUCT_TO_LIST,
  CHANGE_PRODUCT_BY_ID,
  CLEAR_LIST_FORM
} from './types';

export const initListForm = (list: object) => ({
  type: INIT_LIST_FORM,
  payload: list,
});

export const сhangeFormField = (field: string, value: string | Date ) => ({
  type: CHANGE_FORM_FIELD,
  payload: {
    field,
    value
  },
});

export const clearListForm = () => ({
  type: CLEAR_LIST_FORM
});

export const addProductToList = () => ({
  type: ADD_PRODUCT_TO_LIST
});

export const updateProductById = (id:string, value: {}) => ({
  type: CHANGE_PRODUCT_BY_ID,
  payload: {
    id,
    value
  }
});