export interface List {
  id: string,
  title: string | null,
  products: [],
  type: string | null,
  archived: boolean,
  date_finish: string | object
};

export interface Product {
  id: string
  title: string | null
  is_checked: boolean
};

export interface Type {
  type: string
  title: string
};
