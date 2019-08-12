import { StyleSheet } from 'react-native';

const ShoppingListCardStyles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
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
    paddingVertical: 5,
  },
  iconContainer: {
    alignSelf: 'center',
  },
  icon: {
    fontSize: 20,
    color: '#060606',
  },
  isArchived: {
    opacity: 0.2,
  },
  dateText: {
    marginBottom: 5
  }
});

const CardIconStyles = StyleSheet.create({
  small: {
    height: 25,
    width: 25,
    borderRadius: 5,
  },
  large: {
    height: 55,
    width: 55,
    borderRadius: 10,
  },
});

const SelectListTypeStyles = StyleSheet.create({
  emptyItemContainer: {
    marginLeft: 0,
    marginTop: 15,
    paddingBottom: 7,
    paddingLeft: 2,
    paddingRight: 0,
  },
});

const ListTypeInfoStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
  },
});

const LisfOfProductsStyles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});

export {
  ShoppingListCardStyles,
  CardIconStyles,
  SelectListTypeStyles,
  ListTypeInfoStyles,
  LisfOfProductsStyles
};