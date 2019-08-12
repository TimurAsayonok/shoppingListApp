import React from 'react';
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

interface Props {
  label: string
  field: string
  value: string | null
  onOpenSelectionScreen: (field: string) => void
  disable: boolean
};

const SelectListType = ({
  label,
  field,
  value,
  onOpenSelectionScreen,
  disable
}: Props) => (
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

const EmptyListItem = ({
  label
}: { label: string }) => (
  <Text style={TextStyle.headLine}>{label}:</Text>
);

const ListItemWithValue = ({
  value
}: { value: string }) => (
  <ListTypeInfo
    typeItem={{
      type: value,
      title: LIST_TYPES_TITLE[value]
    }}
  />
);

export default SelectListType;