import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import {
  Text,
  Icon
} from 'native-base';
import CardIcon from './CardIcon';
import { ProgressLine } from '../../common';
import { LIST_TYPES_STYLES } from '../../../constants/UIStyles';
import { TextStyle } from '../../../constants/UIStyles';
import { ShoppingListCardStyles } from './styles';

const ShoppingListCard = ({ shoppingListItem, onSelect, numOfcheckedProducts, numOfProducts }: {}) => {
  const { title, type } = shoppingListItem;
  return (
    <TouchableOpacity
      style={ShoppingListCardStyles.container}
      onPress={() => onSelect(shoppingListItem)}
    >
      <CardIcon
        backgroundColor={LIST_TYPES_STYLES[type].iconBackgroundColor}
        borderColor={LIST_TYPES_STYLES[type].iconBorderColor}
      />
      <View
        style={ShoppingListCardStyles.cardInfoContainer}
      >
        <View
          style={ShoppingListCardStyles.info}
        >
          <Text
            style={TextStyle.title3}
          >
            {title}
          </Text>
          <ProgressLine
            containerStyles={{
              backgroundColor: LIST_TYPES_STYLES[type].progressContainerColor,
              borderColor: LIST_TYPES_STYLES[type].progressContainerBorderColor,
            }}
            progressStyles={{
              backgroundColor: LIST_TYPES_STYLES[type].progressColor,
            }}
            progress={(numOfcheckedProducts / numOfProducts) * 100}
          />
        </View>
        <View
          style={ShoppingListCardStyles.iconContainer}
        >
          <Icon
            style={ShoppingListCardStyles.icon}
            name="arrow-forward"
          />
        </View>
      </View>
    </TouchableOpacity>
  )
};

export default ShoppingListCard;