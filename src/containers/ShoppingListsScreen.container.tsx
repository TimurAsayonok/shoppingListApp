/**
 * 
 *
 */
import React, { PureComponent } from 'react';
import { SafeAreaView, } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { segmentActions } from '../actions';
import { ShoppingListsScreenComponent } from '../components/shoppingList';

class ShoppingListsScreen extends PureComponent {
  navigationEventListener: EventSubscription = Navigation.events().bindComponent(this);

  static get options() {
    return {
      topBar: {
        rightButtons: [
          {
            id: 'addList',
            text: 'Add',
            color: 'black'
          }
        ]
      }
    };
  }

  navigationButtonPressed({ buttonId }) {
    if (buttonId === 'addList') {
      this.pushGRUDListScreen();
    }
  }

  pushGRUDListScreen = (list: object | null = null) => {
    console.log(list)
    const crudType = list
      ? list.archived 
        ? 'read'
        : 'update'
      : 'create';

    Navigation.push(this.props.componentId, {
      component: {
        name: 'shoppingLists.CRUDListScreen',
        passProps: {
          listForUpdating: list,
          crudType
        }
      }
    });
  }

  render() {
    const {
      shoppingLists,
      activeSegment,
      onSetActiveSegmentIndex,
    } = this.props;
    const activeLists = shoppingLists[activeSegment];

    return (
      <ShoppingListsScreenComponent
        shoppingLists={shoppingLists}
        activeSegment={activeSegment}
        onSetActiveSegmentIndex={onSetActiveSegmentIndex}
        activeLists={activeLists}
        onPushGRUDListScreen={this.pushGRUDListScreen}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const allLists = state.shoppingLists.lists;
  const activeLists = allLists.filter(list => !list.archived);
  const archivedLists = allLists.filter(list => list.archived);

  return {
    activeSegment: state.segmentButtons.activeSegment,
    shoppingLists: [
      allLists,
      activeLists,
      archivedLists
    ],
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const onSetActiveSegmentIndex = (index: number) => dispatch(segmentActions.setActiveSegmentIndex(index));

  return {
    onSetActiveSegmentIndex
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingListsScreen);
