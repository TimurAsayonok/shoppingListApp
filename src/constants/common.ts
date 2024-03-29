import { Type } from '../interfaces/modals';

export const HOME_TYPE = 'HOME';
export const WORK_TYPE = 'WORK';
export const HOLIDAY_TYPE = 'HOLIDAY';
export const ANOTHER_TYPE = 'ANOTHER';

export const LIST_TYPES_TITLE = {
  HOME: 'Home List',
  WORK: 'Work List',
  HOLIDAY: 'Holiday List',
  ANOTHER: 'Another List',
};

export const LIST_TYPES: Type[] = [
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
  readListScreen: {
    title: 'Read',
    subTitle: 'List',
    fullTitle: 'Read List',
  },
};

export const MAP_CRUD_TYPE_TO_SCREEEN_TITLE = {
  create: SCREENS.createListScreen,
  update: SCREENS.updateListScreen,
  read: SCREENS.readListScreen,
};

export const BUTTONS_TITLE = {
  create: 'CREATE',
  update: 'UPDATE',
  restoring: 'RESTORING',
};

export const CRUD_CREATE_TYPE = 'create';
export const CRUD_UPDATE_TYPE = 'update';
export const CRUD_READ_TYPE = 'read';
export const CRUD_DELETE_TYPE = 'delete';

export const ALERTS_CONSTANTS = {
  delete: {
    title: 'Delete List',
    message: 'Would you like to delete current Shopping List?',
  },
  archive: {
    title: 'Archive List',
    message: 'Would you like to archive current Shopping List?',
  },
};
