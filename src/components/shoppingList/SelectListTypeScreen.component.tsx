/**
 * 
 *
 */
import React from 'react';
import {
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {
  List, ListItem, Text,
} from 'native-base'
import {
  ScreenLargeTitle,
} from '../common';
import ListTypeInfo from './components/ListTypeInfo';
import {
  SCREENS,
} from '../../constants/common';
import {
  SelectListTypeScreenComponentStyles,
  ScreenStyles,
} from './styles';

const SelectListTypeScreenComponent = ({
  selectedList,
  onSelect
}) => (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={ScreenStyles.contentContainerStyle}
        style={ScreenStyles.scrollView}
      >
        <ScreenLargeTitle
          title={"Select"}
        />
        <List>
          {selectedList && selectedList.map((item, index) => (
            <ListItem
              key={index}
              onPress={() => onSelect(item)}
              style={{
                marginLeft: 0
              }}
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