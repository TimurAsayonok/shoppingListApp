import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { TextStyle } from '../../constants/UIStyles';
import { ErrorMessageStyles } from './styles';

interface Props {
  message: string
};

const ErrorMessage = ({ message }: Props) => (
  <View
    style={ErrorMessageStyles.container}
  >
    <Text
      style={[TextStyle.callout, ErrorMessageStyles.text]}
    >{message}</Text>
  </View>
)

export default ErrorMessage;