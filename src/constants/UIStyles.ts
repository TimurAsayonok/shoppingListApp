import { StyleSheet } from 'react-native';

export const COLORS = {
  violet: '#9A91CA',
  violetLight: '#CCC4FB',
  darkViolet: '#7B72AD',
  orange: '#FBD388',
  lightOrang: '#FFE9BF',
  darkOrange: '#C49F4F',
  red: '#EB5542',
  lightRed: '#FFA99D',
  darkRed: '#BA5639',
  blue: '#6E72ED',
  lightBlue: '#B4B6FF',
  darkBlue: '#6D69C1',
  grey: '#F6F6F6',
  darkGrey: '#AEAEAE',
  black: '#060606',
};

export const TextStyle = StyleSheet.create({
  largeTitle: {
    fontSize: 34,
    color: COLORS.black,
    fontWeight: '500'
  },
  title1: {
    fontSize: 28,
    color: COLORS.black
  },
  title2: {
    fontSize: 22,
    color: COLORS.black
  },
  title3: {
    fontSize: 20,
    color: COLORS.black
  },
  body: {
    fontSize: 17,
    color: COLORS.black
  },
  headLine: {
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.black
  },
  callout: {
    fontSize: 16,
    color: COLORS.darkGrey
  },
});

export const LIST_TYPES_STYLES = {
  HOME: {
    iconBackgroundColor: COLORS.violetLight,
    iconBorderColor: COLORS.violet,
    progressContainerColor: COLORS.violetLight,
    progressContainerBorderColor: COLORS.darkViolet,
    progressColor: COLORS.darkViolet,
  },
  WORK: {
    iconBackgroundColor: COLORS.orange,
    iconBorderColor: COLORS.darkOrange,
    progressContainerColor: COLORS.lightOrang,
    progressContainerBorderColor: COLORS.darkOrange,
    progressColor: COLORS.darkOrange,
  },
  HOLIDAY: {
    iconBackgroundColor: COLORS.red,
    iconBorderColor: COLORS.darkRed,
    progressContainerColor: COLORS.lightRed,
    progressContainerBorderColor: COLORS.darkRed,
    progressColor: COLORS.darkRed,
  },
  ANOTHER: {
    iconBackgroundColor: COLORS.blue,
    iconBorderColor: COLORS.darkBlue,
    progressContainerColor: COLORS.lightBlue,
    progressContainerBorderColor: COLORS.darkBlue,
    progressColor: COLORS.darkBlue,
  },
};