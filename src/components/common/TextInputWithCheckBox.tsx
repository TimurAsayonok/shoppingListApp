import React from 'react';
import { ListItem, CheckBox, Input } from 'native-base';
import { TextStyle } from '../../constants/UIStyles';
import { ScreenLargeTitleStyles } from './styles';

const TextInputWithCheckBox = ({
  field,
  inputPlaceholder,
  onCheckBoxChange,
  onInputChange,
  value,
  color,
  isChecked,
  disable
}) => (
    <ListItem style={{ paddingBottom: 0, marginLeft: 0, }}>
      <CheckBox
        onPress={() =>
          onCheckBoxChange(!isChecked)
        } 
        checked={isChecked}
        color={color}
        disabled={disable}
      />
      <Input
        onChange={({ nativeEvent: { text } }) => (
          onInputChange(text)
        )}
        placeholder={inputPlaceholder}
        value={value}
        editable={!disable}
      />
    </ListItem>
  );

export default TextInputWithCheckBox;