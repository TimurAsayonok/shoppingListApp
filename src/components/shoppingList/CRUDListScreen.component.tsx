/**
 * 
 *
 */
import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import {
  Content, Text, Button,
} from 'native-base';
import {
  ScreenLargeTitle,
  TextInputWithLabel,
  DatePickerComponent
} from '../common';
import {
  LIST_TYPES_STYLES,
  COLORS
} from '../../constants/UIStyles';
import SelectListType from './components/SelectListType'
import LisfOfProducts from './components/LisfOfProducts';
import {
  GRUDListScreenStyles,
  ScreenStyles,
} from './styles';

const CRUDListScreenComponent = ({
  onSetListData,
  mainData,
  screenTitle,
  onPushSelectDataScreen,
  onAddProductToList,
  onUpdateProductById,
  onSubmitForm,
  buttonTitle,
  disibleFields
}) => {
  const listTypeColor = mainData.type
    ? LIST_TYPES_STYLES[mainData.type].iconBackgroundColor
    : COLORS.darkGrey;
  const safeAreaColorStyle = {
    backgroundColor: listTypeColor
  };
  const buttonColorStyle = {
    backgroundColor: listTypeColor
  };

  return (
    <SafeAreaView style={[ScreenStyles.safeAreaView, safeAreaColorStyle]}>
      <View style={{ flex: 1 }}>
        <Content
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={ScreenStyles.contentContainerStyle}
          style={ScreenStyles.scrollView}
        >
          <ScreenLargeTitle
            title={screenTitle.title}
            subTitle={screenTitle.subTitle}
          />
          <View style={{ marginTop: 20 }}>
            <TextInputWithLabel
              field="title"
              label="Name"
              onCangeText={onSetListData}
              value={mainData.title}
              disable={disibleFields}
            />
            <SelectListType
              label="Type"
              field="type"
              value={mainData.type}
              onOpenSelectionScreen={onPushSelectDataScreen}
              disable={disibleFields}
            />
            <DatePickerComponent
              field="date_finish"
              label="Data of Finish"
              onSubmit={onSetListData}
              value={mainData.date_finish}
              disable={disibleFields}
            />
            <LisfOfProducts
              products={mainData.products}
              onAddNewProduct={onAddProductToList}
              onUpdateProduct={onUpdateProductById}
              listTypeColor={listTypeColor}
              disable={disibleFields}
            />
          </View>
        </Content>
        <Button
          onPress={() => onSubmitForm()}
          full
          style={buttonColorStyle}
        >
          <Text>{buttonTitle}</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}

export default CRUDListScreenComponent;