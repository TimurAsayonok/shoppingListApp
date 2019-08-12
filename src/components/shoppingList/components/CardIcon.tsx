import React from 'react';
import { View } from 'react-native';
import { CardIconStyles } from './styles';

interface Props {
  backgroundColor: string
  borderColor: string
  isSmall?: boolean
};

const CardIcon = ({
  backgroundColor,
  borderColor,
  isSmall
}: Props) => (
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