import React from 'react';
import {
  ListItem,
  CheckBox, Input,
} from 'native-base';
import { TextInputWithCheckBoxStyles } from './styles';

interface Props {
  inputPlaceholder: string
  onCheckBoxChange: (status: boolean) => void
  onInputChange: (text: string) => void
  value: string
  color: string
  isChecked: boolean
  disable: boolean
};

const TextInputWithCheckBox = ({
  inputPlaceholder,
  onCheckBoxChange,
  onInputChange,
  value,
  color,
  isChecked,
  disable
}: Props) => (
    <ListItem style={TextInputWithCheckBoxStyles.container}>
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