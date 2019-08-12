import React from 'react';
import { View } from 'react-native';
import { CardIconStyles } from './styles';

const CardIcon = ({ backgroundColor, borderColor, isSmall }: {}) => (
  <View
    style={[
      isSmall ? CardIconStyles.small : CardIconStyles.large,
      {
        backgroundColor,
        borderColor
      }
    ]}
  />
);

export default CardIcon;