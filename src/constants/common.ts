import { COLORS } from './UIStyles';

export const HOME_TYPE = 'HOME';
export const WORK_TYPE = 'WORK';
export const HOLIDAY_TYPE = 'HOLIDAY';
export const ANOTHER_TYPE = 'ANOTHER';

export const LIST_TYPES_TITLE = {
  HOME: 'Home List',
  WORK: 'Work List',
  HOLIDAY: 'Holiday List',
  ANOTHER: 'Another List'
};

export const LIST_TYPES = [
  {
    type: HOME_TYPE,
    title: LIST_TYPES_TITLE[HOME_TYPE],
  },
  {
    type: WORK_TYPE,
    title: LIST_TYPES_TITLE[WORK_TYPE],
  },
  {
    type: HOLIDAY_TYPE,
    title: LIST_TYPES_TITLE[HOLIDAY_TYPE],
  },
  {
    type: ANOTHER_TYPE,
    title: LIST_TYPES_TITLE[ANOTHER_TYPE],
  },
];

export const SCREENS = {
  shoppingListsScreen: {
    title: 'Shopping',
    subTitle: 'Lists',
    fullTitle: 'Shopping Lists',
  },
  createListScreen: {
    title: 'Create',
    subTitle: 'New List',
    fullTitle: 'Create New List',
  },
  updateListScreen: {
    title: 'Update',
    subTitle: 'List',
    fullTitle: 'Update List',
  },
};

export const BUTTONS_TITLE = {
  create: 'CREATE',
  update: 'UPDATE'
};