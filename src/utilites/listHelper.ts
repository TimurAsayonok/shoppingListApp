import { uniqueId } from './common';

/** return object */
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
    date_finish: dateFinish
  }
};

/** */
export const initDefaultProduct = () => {
  const id = uniqueId();
  const title = null;
  const isChecked = false;

  return {
    id,
    title,
    is_checked: isChecked
  }
};