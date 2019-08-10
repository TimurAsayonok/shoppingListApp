import { Colors } from './UIStyles';

export const HOME_TYPE = 'HOME';
export const WORK_TYPE = 'WORK';
export const HOLIDAY_TYPE = 'HOLIDAY';
export const ANOTHER_TYPE = 'ANOTHER';

export const LIST_TYPES = {
  HOME: {
    title: 'Home',
    iconBackgroundColor: Colors.violetLight,
    iconBorderColor: Colors.violet,
    progressContainerColor: Colors.violetLight,
    progressContainerBorderColor: Colors.darkViolet,
    progressColor: Colors.darkViolet
  },
  WORK: {
    title: 'Work',
    iconBackgroundColor: Colors.orange,
    iconBorderColor: Colors.darkOrange,
    progressContainerColor: Colors.lightOrang,
    progressContainerBorderColor: Colors.darkOrange,
    progressColor: Colors.darkOrange
  },
  HOLIDAY: {
    title: 'Holiday',
    iconBackgroundColor: Colors.red,
    iconBorderColor: Colors.darkRed,
    progressContainerColor: Colors.lightRed,
    progressContainerBorderColor: Colors.darkRed,
    progressColor: Colors.darkRed
  },
  ANOTHER: {
    title: 'Another',
    iconBackgroundColor: Colors.blue,
    iconBorderColor: Colors.darkBlue,
    progressContainerColor: Colors.lightBlue,
    progressContainerBorderColor: Colors.darkBlue,
    progressColor: Colors.darkBlue
  },
};