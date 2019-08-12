import React from 'react';
import { Item, Label, Input  } from 'native-base';
import { TextStyle } from '../../constants/UIStyles';

interface Props {
  label: string
  field: string
  value?: string
  onCangeText: (field: string, text: string) => void
  disable: boolean
};

const TextInputWithLabel = ({
  label,
  field,
  value,
  onCangeText,
  disable
}: Props) => (
    <Item inlineLabel>
      <Label style={TextStyle.headLine}>{label}:</Label>
      <Input
        onChange={({ nativeEvent: { text }}) => (
          onCangeText(field, text)
        )}
        value={value}
        placeholder={"Type text"}
        editable={!disable}
      />
    </Item>
  );

export default TextInputWithLabel;