/**
 * import main component from src/index
 */
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'shippingLists.ShippingListsScreen',
              options: {
                topBar: {
                  noBorder: true,
                  visible: true,
                  background: {
                    color: 'white'
                  },
                },
              }
            }
          },
        ]
      },
    },
  });
});
