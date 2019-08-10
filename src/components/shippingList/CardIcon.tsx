import React from 'react';
import { View } from 'react-native';
import { CardIconStyles } from './styles';

const CardIcon = ({ backgroundColor, borderColor }: {}) => (
  <View
    style={[
      CardIconStyles.container,
      {
        backgroundColor,
        borderColor
      }
    ]}
  />
);

export default CardIcon;