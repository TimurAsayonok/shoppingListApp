import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import getStore from './store/configureStore';

const store = getStore();

export function registerScreens() {
  Navigation.registerComponentWithRedux('shoppingLists.ShoppingListsScreen', () =>
    require('./containers/ShoppingListsScreen.container').default, Provider, store);
  Navigation.registerComponentWithRedux('shoppingLists.CRUDListScreen', () =>
    require('./containers/CRUDListScreen.container').default, Provider, store);
  Navigation.registerComponent('shoppingLists.selectListTypeScreen', () =>
    require('./containers/SelectListTypeScreen.container').default);
};
