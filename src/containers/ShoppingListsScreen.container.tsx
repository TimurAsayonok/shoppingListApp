/**
 * ShoppingListsScreen is a main screen for
 * showing all list with you have
 */
import React, { PureComponent } from 'react';
import {
  Navigation,
  EventSubscription,
  ComponentEvent,
} from 'react-native-navigation';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { segmentActions } from '../actions';
import { ShoppingListsScreenComponent } from '../components/shoppingList';
import { AppState } from '../reducers';
import { List } from '../interfaces/modals';
import { DispatchAction } from '../interfaces/dispatchActions';

interface Props extends ComponentEvent {
  activeSegment: number
  shoppingLists: List[][]
  onSetActiveSegmentIndex: (index: number) => DispatchAction
};

interface State {};

class ShoppingListsScreen extends PureComponent<Props, State> {
  navigationEventListener: EventSubscription = Navigation.events().bindComponent(this);
  
  // get options property for navigation
  static get options() {
    return {
      topBar: {
        rightButtons: [
          {
            id: 'addList',
            text: 'Add',
            color: 'black',
          },
        ],
      },
    };
  }

  // method for handling navigation button touches
  navigationButtonPressed({ buttonId }: { buttonId: string}) {
    if (buttonId === 'addList') {
      this.pushCRUDListScreen();
    }
  }

  // open a create/read/update/delete list screen
  pushCRUDListScreen = (list: List | null = null): void => {
    const crudType: string = list
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
        onPushCRUDListScreen={this.pushCRUDListScreen}
      />
    );
  }
}

const mapStateToProps = (state: AppState) => {
  const allLists: List[] = state.shoppingLists.lists;
  const activeLists: List[] = allLists.filter((list: List) => !list.archived);
  const archivedLists: List[] = allLists.filter((list: List) => list.archived);

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
