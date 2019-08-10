import {
  orderBy,
  uniqBy,
} from 'lodash';
import {
  HOME_TYPE,
  WORK_TYPE,
  HOLIDAY_TYPE,
  ANOTHER_TYPE
} from '../constants/common';


const initialState = {
  lists: [
    {
      id: 1,
      title: 'List for home',
      type: HOME_TYPE,
      products: [],
      archived: false,
      data: new Date()
    },
    {
      id: 2,
      title: 'List for Work',
      type: WORK_TYPE,
      products: [],
      archived: false,
      data: new Date()
    },
    {
      id: 3,
      title: 'My Birthday',
      type: HOLIDAY_TYPE,
      products: [],
      archived: false,
      data: new Date()
    },
    {
      id: 4,
      title: 'For something else',
      type: ANOTHER_TYPE,
      products: [],
      archived: false,
      data: new Date()
    }
  ],
};

export default function (
  state = initialState,
  action
) {
  const { type, payload } = action;

  switch (type) {
    case "LISTS": {
      return {
        ...state
      }
    }

    default:
      return state;
  }
}