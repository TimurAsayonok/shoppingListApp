import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import { TextStyle } from '../../constants/UIStyles';
import { ScreenLargeTitleStyles } from './styles';

const ScreenLargeTitle = ({ title, subTitle }) => (
  <View
    style={ScreenLargeTitleStyles.container}
  >
    <Text
      style={TextStyle.largeTitle}
    >
      {title}
    </Text>
    <Text
      style={TextStyle.title1}
    >
      {subTitle}
    </Text>
  </View>
);

export default ScreenLargeTitle;