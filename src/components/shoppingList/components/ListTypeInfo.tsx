import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import { Text } from 'native-base';
import { TextStyle, LIST_TYPES_STYLES } from '../../../constants/UIStyles';
import CardIcon from './CardIcon';
import { ShoppingListCardStyles } from './styles';

const ListTypeInfo = ({ typeItem }: {}) => {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    }}>
      <CardIcon
        backgroundColor={LIST_TYPES_STYLES[typeItem.type].iconBackgroundColor}
        borderColor={LIST_TYPES_STYLES[typeItem.type].iconBorderColor}
        isSmall
      />
      <Text style={[TextStyle.body, { marginLeft: 10 }]}>
        {typeItem.title}
      </Text>
    </View>
  )
};

export default ListTypeInfo;