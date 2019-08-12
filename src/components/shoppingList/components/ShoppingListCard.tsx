/**
 * ShoppingListCard is component for
 * showing list informatin as a card.
 * This component will show Icon, Title, date of finishing
 * ans munber of products
 */
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
import { List } from '../../../interfaces/modals';
import { TextStyle } from '../../../constants/UIStyles';
import { ShoppingListCardStyles } from './styles';
import { parseData } from '../../../utilites/common';

interface Props {
  shoppingListItem: List,
  onSelect: (item: List) => any
  numOfcheckedProducts: number
  numOfProducts: number
  dateFinish: string | number
};

const ShoppingListCard = ({
  shoppingListItem,
  onSelect,
  numOfcheckedProducts,
  numOfProducts,
  dateFinish
}: Props) => {
  const { title, type, archived } = shoppingListItem;
  parseData
  const formattedDateFinish = parseData(new Date(dateFinish));

  return (
    <TouchableOpacity
      style={[
        ShoppingListCardStyles.container,
        archived && ShoppingListCardStyles.isArchived
      ]}
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
          <Text style={[TextStyle.callout, ShoppingListCardStyles.dateText]}>
            until: {formattedDateFinish}
          </Text>
          <Text style={TextStyle.callout}>
            checked: {numOfcheckedProducts} / {numOfProducts}
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