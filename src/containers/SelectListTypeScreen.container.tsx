/**
 * 
 *
 */
import React, { PureComponent } from 'react';
import { Navigation, EventSubscription } from 'react-native-navigation';
import SelectListTypeScreenComponent from '../components/shoppingList/SelectListTypeScreen.component';
import {
  LIST_TYPES
} from '../constants/common';

class SelectListTypeScreen extends PureComponent {
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
        }
      }
    };
  }

  onSelectItem = (item: any) => {
    this.props.onSelect(item);
    Navigation.pop(this.props.componentId);
  }

  render() {
    return (
      <SelectListTypeScreenComponent
        selectedList={LIST_TYPES}
        onSelect={this.onSelectItem}
      />
    );
  }
}

export default SelectListTypeScreen;
