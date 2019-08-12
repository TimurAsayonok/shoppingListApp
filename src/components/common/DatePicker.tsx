import React from 'react';
import { DatePicker, Right, Text, Left, ListItem } from 'native-base';
import { parseData } from '../../utilites/common';
import { TextStyle, COLORS } from '../../constants/UIStyles';
import { DatePickerStyles } from './styles';

const DatePickerComponent = ({
  label,
  field,
  onSubmit,
  value,
  disable
}) => (
    <ListItem
      style={DatePickerStyles.container}
    >
      <Left>
        <Text style={TextStyle.headLine}>{label}:</Text>
      </Left>
      <Right style={{ flex: 1}}>
        {disable
          ? (<Text
              style={[TextStyle.body, { color: COLORS.darkOrange, padding: 10 }]}
            >
              {parseData(value)}
            </Text>
          )
          : (<DatePicker
              value={value}
              minimumDate = {new Date()}
              defaultDate={value || new Date()}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              style={{ paddingBottom: 0 }}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              textStyle={{ color: COLORS.darkOrange }}
              placeHolderTextStyle={[TextStyle.body, { color: COLORS.darkGrey }]}
              onDateChange={(date) => onSubmit(field, date)}
          />)
          }
      </Right>
    </ListItem>
  );

export default DatePickerComponent;