import {
  StyleSheet,
} from 'react-native';

const ShippingListCardStyles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
  },
  cardInfoContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  info: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  icon: {
    fontSize: 20,
    color: '#060606',
  }
});

const CardIconStyles = StyleSheet.create({
  container: {
    height: 55,
    width: 55,
    borderRadius: 10
  },
});

export {
  ShippingListCardStyles,
  CardIconStyles
};