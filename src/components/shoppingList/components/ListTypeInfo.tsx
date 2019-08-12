import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import { TextStyle, LIST_TYPES_STYLES } from '../../../constants/UIStyles';
import { Type } from '../../../interfaces/modals';
import { ListTypeInfoStyles } from './styles';
import CardIcon from './CardIcon';

interface Props {
  typeItem: Type
};

const ListTypeInfo = ({ typeItem }: Props) => {
  return (
    <View style={ListTypeInfoStyles.container}>
      <CardIcon
        backgroundColor={LIST_TYPES_STYLES[typeItem.type].iconBackgroundColor}
        borderColor={LIST_TYPES_STYLES[typeItem.type].iconBorderColor}
        isSmall
      />
      <Text style={[TextStyle.body, ListTypeInfoStyles.text]}>
        {typeItem.title}
      </Text>
    </View>
  )
};

export default ListTypeInfo;