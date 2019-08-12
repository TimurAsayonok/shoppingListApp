import React, { PureComponent } from 'react';
import { View } from 'react-native';
import {
  Text,
  Segment,
  Button,
} from 'native-base';
import { SegmentButtonsStyles } from './styles';

const SegmentButtons = ({ buttonsTitle, activeIndex, onSelect }) => {
  const getButtons = () => {
    const buttons = [];

    buttonsTitle.forEach((title, index) => {
      const button = (
        <Button
          key={index}
          style={
            index === activeIndex
            ? SegmentButtonsStyles.activeButton
            : SegmentButtonsStyles.button
          }
          first={index === 0}
          last={index === (buttonsTitle.length - 1)}
          onPress={() => onSelect(index)}
        >
          <Text
            style={SegmentButtonsStyles.buttonTitle}
          >
            {title}
          </Text>
        </Button>
      )

      buttons.push(button);
    });

    return buttons;
  }
  
  const buttons = getButtons();

  return (
    <View
      style={SegmentButtonsStyles.container}
    >
      <Segment
        style={SegmentButtonsStyles.segment}
      >
        {buttons.map(button => button)}
      </Segment>
    </View>
  );
};

export default SegmentButtons;
