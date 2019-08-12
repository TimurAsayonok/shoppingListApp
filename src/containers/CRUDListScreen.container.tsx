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
  updateProductById,
  clearListForm
} from '../actions/listFormActions';
import {
  createUpdateList,
  changeArchiveStatusList,
  deleteList
} from '../actions/listActions';
import {
  MAP_CRUD_TYPE_TO_SCREEEN_TITLE,
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

  componentWillUnmount() {
    this.props.onClearListForm();
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
    const { componentId, list, onChangeArchiveStatusList } = this.props;
    Alert.alert(
      'Delete List',
      'Would you like to archive current Shopping List?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            onChangeArchiveStatusList(list.id, !list.archived);
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
      'Would you like to delete current Shopping List?',
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

  _getButtonTitle = () => {
    const { list, crudType } = this.props;

    if (list.archived) {
      return BUTTONS_TITLE['restoring'];
    }

    return BUTTONS_TITLE[crudType];
  }

  _onSubmitCRUDForm = () => {
    const { list, onChangeArchiveStatusList, onCreateUpdateShoppingList, componentId } = this.props;

    if (list.archived) {
      onChangeArchiveStatusList(list.id, !list.archived);
    } else {
      onCreateUpdateShoppingList(list);
    }

    Navigation.pop(componentId);
  }

  render() {
    const { list, onChangeFormField, crudType, onAddProductToList, onUpdateProductById } = this.props;
    const screenTitle = MAP_CRUD_TYPE_TO_SCREEEN_TITLE[crudType];
    const buttonTitle = this._getButtonTitle();

    return (
      <CRUDListScreenComponent
        onSetListData={onChangeFormField}
        mainData={list}
        screenTitle={screenTitle}
        onPushSelectDataScreen={this.onPushSelectDataScreen}
        onAddProductToList={onAddProductToList}
        onUpdateProductById={onUpdateProductById}
        onSubmitForm={this._onSubmitCRUDForm}
        buttonTitle={buttonTitle}
        disibleFields={list.archived}
      />
    );
  }
}

const mapStateToProps = (state) => {
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
  const onChangeArchiveStatusList = (listId: string, status: boolean) => dispatch(changeArchiveStatusList(listId, status));
  const onDeleteList = (listId: string) => dispatch(deleteList(listId));
  const onClearListForm = () => dispatch(clearListForm());

  return {
    onInitListForm,
    onChangeFormField,
    onAddProductToList,
    onUpdateProductById,
    onCreateUpdateShoppingList,
    onChangeArchiveStatusList,
    onDeleteList,
    onClearListForm
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CRUDListScreenContainer);
