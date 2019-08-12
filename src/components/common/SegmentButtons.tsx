import React from 'react';
import { View } from 'react-native';
import {
  Text,
  Segment,
  Button,
} from 'native-base';
import { SegmentButtonsStyles } from './styles';

interface Props {
  buttonsTitle: string[]
  activeIndex: number
  onSelect: (index: number) => void
};

const SegmentButtons = ({
  buttonsTitle,
  activeIndex,
  onSelect
}: Props) => {
  const getButtons = () => {
    const buttons: JSX.Element[] = [];

    buttonsTitle.forEach((title: string, index: number) => {
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
