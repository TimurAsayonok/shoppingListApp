/**
 * 
 *
 */
import React, { PureComponent } from 'react';
import { Alert } from 'react-native';
import { Navigation, EventSubscription } from 'react-native-navigation';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { CRUDListScreenComponent } from '../components/shoppingList'
import {
  initListForm,
  сhangeFormField,
  addProductToList,
  updateProductById
} from '../actions/listFormActions';
import {
  createUpdateList,
  archiveList,
  deleteList
} from '../actions/listActions';
import {
  SCREENS,
  BUTTONS_TITLE
} from '../constants/common';

class CRUDListScreenContainer extends PureComponent {
  navigationEventListener: EventSubscription = Navigation.events().bindComponent(this);

  static get options() {
    return {
      topBar: {
        noBorder: true,
        visible: true,
        background: {
          color: 'white'
        },
        backButton: {
          color: 'black'
        },
      }
    };
  }
  
  static defaultProps = {
    crudType: 'create'
  }

  componentDidMount() {
    const { onInitListForm, crudType, listForUpdating, componentId } = this.props;

    if (crudType === 'read') {
      Navigation.mergeOptions(componentId, {
        topBar: {
          rightButtons: [
            {
              id: 'deleteList',
              text: 'Delete',
              color: 'black'
            }
          ]
        }
      });

      onInitListForm(listForUpdating);
    }

    if (crudType === 'update') {
      Navigation.mergeOptions(componentId, {
        topBar: {
          rightButtons: [
            {
              id: 'deleteList',
              text: 'Delete',
              color: 'black'
            },
            {
              id: 'archiveList',
              text: 'Archive',
              color: 'black'
            }
          ]
        }
      });

      onInitListForm(listForUpdating);
    }

    if (crudType === 'create') {
      onInitListForm();
    }
  }

  navigationButtonPressed = ({ buttonId }) => {
    if (buttonId === 'addPost') {
      console.log('add');
    }
    if (buttonId === 'deleteList') {
      this.onDeleteList();
    }
    if (buttonId === 'archiveList' ){
      this.onArchiveList();
    }
  }

  onPushSelectDataScreen = (field: string) => {
    const { componentId, onChangeFormField } = this.props;
    
    Navigation.push(componentId, {
      component: {
        name: 'shoppingLists.selectListTypeScreen',
        passProps: {
          onSelect: (item: {type: string, title: string}) => onChangeFormField(field, item.type)
        }
      }
    });
  }

  onArchiveList = () => {
    const { componentId, list, onArchiveList } = this.props;
    Alert.alert(
      'Delete List',
      'Would you like to delete curren Shopping List',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            onArchiveList(list.id);
            Navigation.pop(componentId);
          }
        },
      ],
      { cancelable: true },
    );
  }

  onDeleteList = () => {
    const { componentId, list, onDeleteList } = this.props;
    Alert.alert(
      'Delete List',
      'Would you like to delete curren Shopping List',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            onDeleteList(list.id);
            Navigation.pop(componentId);
          }
        },
      ],
      { cancelable: true },
    );
  }

  onCreateUpdateShoppingList = (list: {}) => {
    const { onCreateUpdateShoppingList, componentId } = this.props;
    
    onCreateUpdateShoppingList(list);
    Navigation.pop(componentId);
  }
  


  render() {
    console.log(this.props);
    const { list, onChangeFormField, crudType, onAddProductToList, onUpdateProductById, onCreateUpdateShoppingList } = this.props;
    const screenTitle = (crudType === 'update')
      ? SCREENS.updateListScreen
      : SCREENS.createListScreen;

    return (
      <CRUDListScreenComponent
        onSetListData={onChangeFormField}
        mainData={list}
        screenTitle={screenTitle}
        onPushSelectDataScreen={this.onPushSelectDataScreen}
        onAddProductToList={onAddProductToList}
        onUpdateProductById={onUpdateProductById}
        onCreateUpdateShoppingList={this.onCreateUpdateShoppingList}
        buttonTitle={BUTTONS_TITLE[crudType]}
        disibleFields={list.archived}
      />
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  const list = state.listForm.list;
  return {
    list
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const onInitListForm = (list) => dispatch(initListForm(list));
  const onChangeFormField = (field, value) => dispatch(сhangeFormField(field, value));
  const onAddProductToList = () => dispatch(addProductToList());
  const onUpdateProductById = (id: string, value: {}): any => dispatch(updateProductById(id, value));
  const onCreateUpdateShoppingList = (list: {}) => dispatch(createUpdateList(list));
  const onArchiveList = (listId: string) => dispatch(archiveList(listId));
  const onDeleteList = (listId: string) => dispatch(deleteList(listId));


  return {
    onInitListForm,
    onChangeFormField,
    onAddProductToList,
    onUpdateProductById,
    onCreateUpdateShoppingList,
    onArchiveList,
    onDeleteList
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CRUDListScreenContainer);
