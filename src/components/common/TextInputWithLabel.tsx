import React from 'react';
import { Item, Label, Input  } from 'native-base';
import { TextStyle } from '../../constants/UIStyles';
import { ScreenLargeTitleStyles } from './styles';

const TextInputWithLabel = ({
  label,
  field,
  value,
  onCangeText,
  disable
}) => (
    <Item inlineLabel>
      <Label style={TextStyle.headLine}>{label}:</Label>
      <Input
        onChange={({ nativeEvent: { text }}) => (
          onCangeText(field,text)
        )}
        value={value}
        placeholder={"Type text"}
        editable={!disable}
      />
    </Item>
  );

export default TextInputWithLabel;