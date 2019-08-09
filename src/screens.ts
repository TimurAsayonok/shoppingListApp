import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import getStore from './store/configureStore';

const store = getStore();

export function registerScreens() {
  Navigation.registerComponentWithRedux('shippingLists.ShippingListsScreen', () => require('./containers/ShippingListsScreen.container').default, Provider, store);
  // Navigation.registerComponent('shippingLists.ArhivedLists', () => require('./Root').default);
};
