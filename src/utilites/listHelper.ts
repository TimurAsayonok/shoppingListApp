import { uniqueId, sortByDate } from './common';
import { List } from '../interfaces/modals';

// return default list object
export const initDefaulList = () => {
  const id = uniqueId();
  const title = null;
  const type = null;
  const products = [];
  const archived = false;
  const dateFinish = new Date();

  return {
    id,
    title,
    type,
    products,
    archived,
    date_finish: dateFinish,
  }
};

// return default product object
export const initDefaultProduct = () => {
  const id = uniqueId();
  const title = null;
  const isChecked = false;

  return {
    id,
    title,
    is_checked: isChecked,
  }
};

// sort shopping list by date
export const sortShoppingList = (firstList: List, secondList: List) => {
  return sortByDate(firstList.date_finish, secondList.date_finish);
};
