/**
 * 
 *
 */
import React from 'react';
import {
  ScrollView,
  View,
  SafeAreaView
} from 'react-native';
import ShoppingListCard from './components/ShoppingListCard';
import {
  ScreenLargeTitle,
  SegmentButtons
} from '../common';
import {
  SCREENS
} from '../../constants/common';
import {
  ShoppingListsScreenStyles,
  ScreenStyles
} from './styles';

const ShoppingListsScreenComponent = ({
  shoppingLists,
  onSetActiveSegmentIndex,
  activeSegment,
  activeLists,
  onPushGRUDListScreen
}) => (
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
            activeLists.map(list => {
              const numOfProducts = list.products.length;
              const numOfcheckedProducts = list.products.filter((product: {}) => 
                product.is_checked).length;

              return (
                <ShoppingListCard
                  key={list.id}
                  shoppingListItem={list}
                  numOfProducts={numOfProducts}
                  numOfcheckedProducts={numOfcheckedProducts}
                  onSelect={onPushGRUDListScreen}
                />
              )
            })
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );

export default ShoppingListsScreenComponent;