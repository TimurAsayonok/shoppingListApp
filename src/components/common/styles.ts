import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/UIStyles';

const ProgressLineStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 5,
    borderRadius: 2,
    borderWidth: 1,
  },
  body: {
    height: '100%',
  },
});

const ScreenLargeTitleStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});

const SegmentButtonsStyles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  segment: {
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: COLORS.grey,
    borderColor: 'transparent',
  },
  activeButton: {
    backgroundColor: COLORS.orange,
    borderColor: 'transparent',
  },
  buttonTitle: {
    color: COLORS.black,
  },
});

const DatePickerStyles = StyleSheet.create({
  container: {
    marginLeft: 0,
    marginTop: 15,
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 2,
    paddingRight: 0,
  },
  right: {
    flex: 1,
  },
  text: {
    color: COLORS.darkOrange,
    padding: 10,
  },
  datePickerText: {
    color: COLORS.darkOrange,
  },
  placeHolderTextStyle: { 
    color: COLORS.darkGrey,
  },
});

const TextInputWithCheckBoxStyles = StyleSheet.create({
  container: {
    paddingBottom: 0,
    marginLeft: 0, 
  },
});

export {
  ProgressLineStyles,
  ScreenLargeTitleStyles,
  SegmentButtonsStyles,
  DatePickerStyles,
  TextInputWithCheckBoxStyles
};
