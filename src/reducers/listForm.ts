import {
  INIT_LIST_FORM,
  CHANGE_FORM_FIELD,
  ADD_PRODUCT_TO_LIST,
  CHANGE_PRODUCT_BY_ID,
  CLEAR_LIST_FORM,
} from '../actions/types';
import {
  initDefaulList,
  initDefaultProduct
} from '../utilites/listHelper';

const initialState = {
  list: {}
};

export default function (
  state = initialState,
  action
) {
  const { type, payload } = action;

  switch (type) {
    case INIT_LIST_FORM: {
      if(payload) {
        return {
          list: payload
        }
      }

      return {
        list: initDefaulList()
      };
    }

    case CHANGE_FORM_FIELD: {
      const dataList = state.list;
      const fieldForChanging = payload.field;
      const newValue = payload.value;

      dataList[fieldForChanging] = newValue;
      
      return {
        list: {
          ...dataList
        },
      };
    }

    case ADD_PRODUCT_TO_LIST: {
      const dataList = state.list;
      const newProduct = initDefaultProduct();

      dataList.products.unshift(newProduct);

      return {
        list: {
          ...dataList
        },
      };
    };

    case CHANGE_PRODUCT_BY_ID: {
      const dataList = state.list;
      const dataListProducts = dataList.products;
      const newProducts = dataListProducts.map((product: {}) => {
        if (product.id === payload.id) {
          const newProduct = product;
          newProduct[payload.value.field] = payload.value.data;

          return {
            ...newProduct
          };
        }

        return product;
      });

      return {
        list: {
          ...dataList,
          products: newProducts
        },
      };
    };

    case CLEAR_LIST_FORM: {
      return {
        list: {},
      }
    }

    default:
      return state;
  }
};
