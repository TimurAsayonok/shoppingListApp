import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import {
  Text,
  Icon
} from 'native-base';
import { ProgressLine } from '../common';
import CardIcon from './CardIcon';
import { LIST_TYPES } from '../../constants/common';
import { ShippingListCardStyles } from './styles';

const ShippingListCard = ({ shippingListItem }: {}) => {
  const { title, type } = shippingListItem;
  return (
    <TouchableOpacity
      style={ShippingListCardStyles.container}
    >
      <CardIcon
        backgroundColor={LIST_TYPES[type].iconBackgroundColor}
        borderColor={LIST_TYPES[type].iconBorderColor}
      />
      <View
        style={ShippingListCardStyles.cardInfoContainer}
      >
        <View
          style={ShippingListCardStyles.info}
        >
          <Text style={{
            fontSize: 20,
            color: '#060606',
          }}>
            {title}
          </Text>
          <ProgressLine
            containerStyles={{
              backgroundColor: LIST_TYPES[type].progressContainerColor,
              borderColor: LIST_TYPES[type].progressContainerBorderColor,
            }}
            progressStyles={{
              backgroundColor: LIST_TYPES[type].progressColor,
            }}
            progress={20 / 24 * 100}
          />
        </View>
        <View style={{
          alignSelf: 'center'
        }}>
          <Icon
            style={ShippingListCardStyles.icon}
            name="arrow-forward"
          />
        </View>
      </View>
    </TouchableOpacity>
  )
};

export default ShippingListCard;