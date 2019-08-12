/**
 * SelectListTypeScreenComponent is a component on wich you can
 * select type for list 
 */
import React from 'react';
import {
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {
  List,
  ListItem,
} from 'native-base'
import { Type } from '../../interfaces/modals';
import { ScreenLargeTitle } from '../common';
import {
  ScreenStyles,
  SelectListTypeScreenComponentStyles
} from './styles';
import ListTypeInfo from './components/ListTypeInfo';

interface Props {
  listForSelection: Type[],
  onSelect: (item: Type) => any
};

const SelectListTypeScreenComponent = ({
  listForSelection,
  onSelect
}: Props) => (
    <SafeAreaView style={ScreenStyles.safeAreaView}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={ScreenStyles.contentContainerStyle}
        style={ScreenStyles.scrollView}
      >
        <ScreenLargeTitle
          title={"Select"}
        />
        <List>
          {listForSelection && listForSelection.map((item: Type, index: number) => (
            <ListItem
              key={index}
              onPress={() => onSelect(item)}
              style={SelectListTypeScreenComponentStyles.listItemContainer}
            >
              <ListTypeInfo
                typeItem={item}
              />
            </ListItem>
          ))}  
        </List>
      </ScrollView>
    </SafeAreaView>
  );

export default SelectListTypeScreenComponent;