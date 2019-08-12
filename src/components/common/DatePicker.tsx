import React from 'react';
import {
  DatePicker,
  Right,
  Text, 
  Left,
  ListItem,
} from 'native-base';
import { parseData } from '../../utilites/common';
import { TextStyle } from '../../constants/UIStyles';
import { DatePickerStyles } from './styles';

interface Props {
  label: string
  field: string
  onSubmit: (field: string, date: string | object) => void
  value: Date,
  disable: boolean
};

const DatePickerComponent = ({
  label,
  field,
  onSubmit,
  value,
  disable
}: Props) => (
    <ListItem
      style={DatePickerStyles.container}
    >
      <Left>
        <Text style={TextStyle.headLine}>{label}:</Text>
      </Left>
      <Right style={DatePickerStyles.right}>
        {disable
          ? (<Text
              style={[TextStyle.body, DatePickerStyles.text]}
            >
              {parseData(value)}
            </Text>
          )
          : (<DatePicker
              minimumDate = {new Date()}
              defaultDate={value || new Date()}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              textStyle={DatePickerStyles.datePickerText}
              placeHolderTextStyle={[TextStyle.body, DatePickerStyles.placeHolderTextStyle]}
              onDateChange={(date) => onSubmit(field, date)}
          />)
          }
      </Right>
    </ListItem>
  );

export default DatePickerComponent;