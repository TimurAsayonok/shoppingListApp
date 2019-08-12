/**
 * ShoppingListsScreenComponent is main component for
 * ShoppingListsScreen
 */
import React from 'react';
import {
  ScrollView,
  View,
  SafeAreaView
} from 'react-native';
import {
  ScreenLargeTitle,
  SegmentButtons
} from '../common';
import { SCREENS } from '../../constants/common';
import {
  List,
  Product,
} from '../../interfaces/modals';
import {
  ShoppingListsScreenStyles,
  ScreenStyles
} from './styles';
import ShoppingListCard from './components/ShoppingListCard';

interface Props {
  shoppingLists: List[][]
  onSetActiveSegmentIndex: (index: number) => any
  activeSegment: number
  activeLists: List[]
  onPushCRUDListScreen: () => any
};

const ShoppingListsScreenComponent = ({
  shoppingLists,
  onSetActiveSegmentIndex,
  activeSegment,
  activeLists,
  onPushCRUDListScreen
}: Props) => (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={ScreenStyles.contentContainerStyle}
        style={ScreenStyles.scrollView}
      >
        <ScreenLargeTitle
          title={SCREENS.shoppingListsScreen.title}
          subTitle={SCREENS.shoppingListsScreen.subTitle}
        />
        <SegmentButtons
          buttonsTitle={[
            `All (${shoppingLists[0].length})`,
            `Active (${shoppingLists[1].length})`,
            `Arhived (${shoppingLists[2].length})`
          ]}
          onSelect={onSetActiveSegmentIndex}
          activeIndex={activeSegment}
        />
        <View
          style={ShoppingListsScreenStyles.shoppingCardsContainer}
        >
          {activeLists.length != 0 && (
            activeLists.map((list: List) => {
              const numOfProducts: number = list.products.length;
              const numOfcheckedProducts: number = list.products.filter((product: Product) => 
                product.is_checked).length;

              return (
                <ShoppingListCard
                  key={list.id}
                  dateFinish={list.date_finish}
                  shoppingListItem={list}
                  numOfProducts={numOfProducts}
                  numOfcheckedProducts={numOfcheckedProducts}
                  onSelect={onPushCRUDListScreen}
                />
              )
            })
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );

export default ShoppingListsScreenComponent;