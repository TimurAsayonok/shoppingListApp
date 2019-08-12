/**
 * CRUDListScreenContainer is a main screen when you can
 * create new list, read list, update list and delete list
 */
import React, { PureComponent } from 'react';
import {
  Navigation,
  EventSubscription,
  ComponentEvent,
} from 'react-native-navigation';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { CRUDListScreenComponent } from '../components/shoppingList'
import {
  initListForm,
  сhangeFormField,
  addProductToList,
  updateProductById,
  clearListForm,
} from '../actions/listFormActions';
import {
  createUpdateList,
  changeArchiveStatusList,
  deleteList,
} from '../actions/listActions';
import {
  MAP_CRUD_TYPE_TO_SCREEEN_TITLE,
  BUTTONS_TITLE,
  CRUD_CREATE_TYPE,
  CRUD_UPDATE_TYPE,
  CRUD_READ_TYPE,
  ALERTS_CONSTANTS,
} from '../constants/common';
import { ComponentsHelper } from '../utilites/componentsHelper';
import {
  List,
  Type,
} from '../interfaces/modals'
import { DispatchAction } from '../interfaces/dispatchActions';
import { AppState } from '../reducers';
interface Props extends ComponentEvent {
  list: List
  listForUpdating: List
  crudType: string
  onInitListForm: (list?: List) => DispatchAction
  onChangeFormField: (field: string, value: any) => DispatchAction
  onAddProductToList: () => DispatchAction
  onUpdateProductById: (id: string, value: any) => DispatchAction
  onCreateUpdateShoppingList: (list: List) => DispatchAction
  onChangeArchiveStatusList: (listId: string, status: boolean) => DispatchAction
  onDeleteList: (listId: string) => DispatchAction
  onClearListForm: () => DispatchAction
};

interface State {};

class CRUDListScreenContainer extends PureComponent<Props, State> {
  // default props
  static defaultProps: {
    crudType: string,
  } = {
    crudType: CRUD_CREATE_TYPE,
  }
  navigationEventListener: EventSubscription = Navigation.events().bindComponent(this);

  // get options property from navigation
  static get options() {
    return {
      topBar: {
        noBorder: true,
        visible: true,
        background: {
          color: 'white',
        },
        backButton: {
          color: 'black',
        },
      },
    };
  }

  // when component will unmount -> clear list form
  componentWillUnmount() {
    this.props.onClearListForm();
  }

  /**
   * init list form and navigation buttons
   * when component did mount
   */
  componentDidMount() {
    this._onInitListForm()
  }

  navigationButtonPressed = ({ buttonId }: { buttonId: string}) => {
    if (buttonId === 'deleteList') {
      // call delete list method when clicking on delete icon
      this._onDeleteList();
    }
    if (buttonId === 'archiveList') {
      // call archive list method when clicking on acrhive icon
      this._onArchiveList();
    }
  }

  _onInitListForm = () => {
    const {
      onInitListForm,
      crudType,
      listForUpdating,
      componentId,
    } = this.props;
    let screenTopButtons;
    let initialList;

    if (crudType === CRUD_READ_TYPE) {
      screenTopButtons = [
        {
          id: 'deleteList',
          text: 'Delete',
          color: 'black',
        },
      ];
      initialList = listForUpdating;
    }

    if (crudType === CRUD_UPDATE_TYPE) {
      screenTopButtons = [
        {
          id: 'deleteList',
          text: 'Delete',
          color: 'black',
        },
        {
          id: 'archiveList',
          text: 'Archive',
          color: 'black',
        },
      ];
      initialList = listForUpdating;
    }

    // set options with buttons for navigation
    Navigation.mergeOptions(componentId, {
      topBar: {
        rightButtons: screenTopButtons,
      },
    });
    // init list from
    onInitListForm(initialList);
  }

  // on open select type for list screen
  _onPushSelectDataScreen = (field: string) => {
    const {
      componentId,
      onChangeFormField,
    } = this.props;
    Navigation.push(componentId, {
      component: {
        name: 'shoppingLists.selectListTypeScreen',
        passProps: {
          onSelect: (item: Type) => onChangeFormField(field, item.type),
        },
      },
    });
  }

  /**
   * archive list method. Calling this method will trigger Alert and
   * if user confirm alert, list will be archived
   */
  _onArchiveList = () => {
    const {
      componentId,
      list,
      onChangeArchiveStatusList,
    } = this.props;

    ComponentsHelper.onShowActionAlert({
      title: ALERTS_CONSTANTS.archive.title,
      message: ALERTS_CONSTANTS.archive.message,
      buttons: [
        {
          text: 'Yes',
          onPress: () => {
            onChangeArchiveStatusList(list.id, !list.archived);
            Navigation.pop(componentId);
          },
        },
      ],
    });
  }

  /**
   * delete list method. Calling this method will trigger Alert and
   * if user confirm alert, list will be deleted
   */
  _onDeleteList = () => {
    const {
      componentId,
      list,
      onDeleteList,
    } = this.props;

    ComponentsHelper.onShowActionAlert({
      title: ALERTS_CONSTANTS.delete.title,
      message: ALERTS_CONSTANTS.delete.message,
      buttons: [
        {
          text: 'Yes',
          onPress: () => {
            onDeleteList(list.id);
            Navigation.pop(componentId);
          },
        },
      ],
    });
  }

  // get button title by crudType or if list was archived
  _getButtonTitle = () => {
    const { list, crudType } = this.props;

    if (list.archived) {
      return BUTTONS_TITLE.restoring;
    }

    return BUTTONS_TITLE[crudType];
  }

  /**
   * submin list form method. This method will create, update or
   * the method will call onChangeArchiveStatusList method if you would like to restor list
   * from archive
   */
  _onSubmitCRUDForm = () => {
    const { list, onChangeArchiveStatusList, onCreateUpdateShoppingList, componentId } = this.props;

    if (list.archived) {
      onChangeArchiveStatusList(list.id, !list.archived);
    } else {
      onCreateUpdateShoppingList(list);
    }

    Navigation.pop(componentId);
  }

  // the method will check validation for submit button
  _onCheckDisableSubmitButton = () => {
    const { list } = this.props;
    const isDisable = !list.title || !list.type || !list.date_finish;

    return isDisable;
  }

  render() {
    const {
      list,
      onChangeFormField,
      crudType,
      onAddProductToList,
      onUpdateProductById,
    } = this.props;
    const screenTitle = MAP_CRUD_TYPE_TO_SCREEEN_TITLE[crudType];
    const buttonTitle = this._getButtonTitle();
    const isDisableSubmitButton = this._onCheckDisableSubmitButton();

    return (
      <CRUDListScreenComponent
        onSetListData={onChangeFormField}
        mainData={list}
        screenTitle={screenTitle}
        onPushSelectDataScreen={this._onPushSelectDataScreen}
        onAddProductToList={onAddProductToList}
        onUpdateProductById={onUpdateProductById}
        onSubmitForm={this._onSubmitCRUDForm}
        buttonTitle={buttonTitle}
        disableFields={list.archived}
        disableSubmitButton={isDisableSubmitButton}
      />
    );
  }
}

const mapStateToProps = (state: AppState) => {
  const list = state.listForm.list;
  return {
    list,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const onInitListForm = (list?: List) => dispatch(initListForm(list));
  const onChangeFormField = (field: string, value: any) => dispatch(сhangeFormField(field, value));
  const onAddProductToList = () => dispatch(addProductToList());
  const onUpdateProductById = (id: string, value: any) => dispatch(updateProductById(id, value));
  const onCreateUpdateShoppingList = (list: List) => dispatch(createUpdateList(list));
  const onChangeArchiveStatusList = (listId: string, status: boolean) =>
    dispatch(changeArchiveStatusList(listId, status));
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
    onClearListForm,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CRUDListScreenContainer);
