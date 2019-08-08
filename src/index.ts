import { Navigation } from "react-native-navigation";
import App from './Root';

// AppRegistry.registerComponent('shoppingListApp', () => App);

Navigation.registerComponent('shoppingListApp', () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
     component: {
        name: "shoppingListApp"
      }
   }
  });
});