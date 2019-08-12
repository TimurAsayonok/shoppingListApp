import { StyleSheet } from 'react-native';

const ScreenStyles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
});

const ShoppingListsScreenStyles = StyleSheet.create({
  shoppingCardsContainer: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'column',
  },
});

const CRUDListScreenComponentStyles = StyleSheet.create({
  componentBody: {
    marginTop: 20,
  },
});

const SelectListTypeScreenComponentStyles = StyleSheet.create({
  listItemContainer: {
    marginLeft: 0,
  }
});

export {
  ScreenStyles,
  ShoppingListsScreenStyles,
  CRUDListScreenComponentStyles,
  SelectListTypeScreenComponentStyles
};