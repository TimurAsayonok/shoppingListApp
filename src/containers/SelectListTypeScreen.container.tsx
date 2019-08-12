/**
 * SelectListTypeScreen is a screen for selecting
 * type for list when you would like to create a new one or update
 */
import React, { PureComponent } from 'react';
import {
  Navigation,
  EventSubscription,
  ComponentEvent,
} from 'react-native-navigation';
import { LIST_TYPES } from '../constants/common';
import { Type } from '../interfaces/modals';
import {
  SelectListTypeScreenComponent,
} from '../components/shoppingList/SelectListTypeScreen.component';

interface Props extends ComponentEvent {
  onSelect: (item: Type) => any
};

interface State {}
class SelectListTypeScreen extends PureComponent<Props, State> {
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

  /**
   * method which take item (type) and call onSelect from props
   * and pop back to previous screen
   */
  onSelectItem = (item: Type) => {
    this.props.onSelect(item);
    Navigation.pop(this.props.componentId);
  }

  render() {
    return (
      <SelectListTypeScreenComponent
        listForSelection={LIST_TYPES}
        onSelect={this.onSelectItem}
      />
    );
  }
}

export default SelectListTypeScreen;
