import React, { Fragment } from 'react';
import {
  ListItem,
  Left,
  Right,
  Icon,
  Text
} from 'native-base';
import ListTypeInfo from './ListTypeInfo';
import { LIST_TYPES_TITLE } from '../../../constants/common';
import { TextStyle } from '../../../constants/UIStyles';
import { SelectListTypeStyles } from './styles';

const SelectListType = ({ label, field, value, onOpenSelectionScreen, disable }: {}) => (
  <ListItem
    style={SelectListTypeStyles.emptyItemContainer}
    onPress={() => onOpenSelectionScreen(field)}
    disabled={disable}
  >
    <Left>
      {value
        ? (<ListItemWithValue
            value={value}
          />)
        : (<EmptyListItem
            label={label}
          />)
      }
    </Left>
    {!disable && (
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    )}
  </ListItem>
);

const EmptyListItem = ({ label }: { }) => (
  <Text style={TextStyle.headLine}>{label}:</Text>
);

const ListItemWithValue = ({ value }) => (
  <ListTypeInfo
    typeItem={{
      type: value,
      title: LIST_TYPES_TITLE[value]
    }}
  />
);

export default SelectListType;