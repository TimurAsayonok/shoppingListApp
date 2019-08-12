# Shopping App for Netguru

### Installation
!Application should work only on iOS.

1. Install dependencies using `yarn install`.
2. Go to `./ios` and run `pod install`.
3. Use `yarn dev` to run the Metro bundler.
4. Use `yarn start:ios` or `yarn start:android` to run the app in the development mode.

### Requirements
1) App should consist of three views:**
 - list of current shopping lists,
 - list of archived shopping lists,
 - shopping list details where you can add/delete items etc. Please notice that those operations  should be only possible when list isn’t archived.
2) Use any type of storage to store apps’ data - data should be persisted.
3) Lists should be sorted by date.
4) Please use https://github.com/react-native-training/react-native-elements or https://github.com/GeekyAnts/NativeBase for styling the elements.
5) App should work at least for one platform.

### Tsimur Asayonak comments
**Added Main Libs**
- `lodash` - lib for working with arrays, strings and ect.
- `react-native-navigation` - lib for creating simple navigation in app
- `native-base` - lib for styling the elements
- `react-redux`, `redux`, `redux-logger`, `redux-thunk` - libs for Redux
- `redux-persist` - lib for persisting storage

**Checklist from Task**

- ✅ list of current shopping lists
- ✅ list of archived shopping lists (same as 1.)
- ✅ shopping list details where you can add/delete items etc. Please notice that those operations  should be only possible when list isn’t archived.
- ✅ Use any type of storage to store apps’ data - data should be persisted.
- ✅ Lists should be sorted by date.
- ✅ `native-base` - lib for styling the elements
- ✅ App is working on iOS