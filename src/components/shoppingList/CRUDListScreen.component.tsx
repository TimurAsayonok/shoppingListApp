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
  Content,
  Text,
  Button,
} from 'native-base';
import {
  ScreenLargeTitle,
  TextInputWithLabel,
  DatePickerComponent,
} from '../common';
import {
  LIST_TYPES_STYLES,
  COLORS,
} from '../../constants/UIStyles';
import { List } from '../../interfaces/modals'
import {
  CRUDListScreenComponentStyles,
  ScreenStyles,
} from './styles';
import SelectListType from './components/SelectListType'
import LisfOfProducts from './components/LisfOfProducts';

interface Props {
  mainData: List
  screenTitle: {
    title: string,
    subTitle: string
  }
  onSetListData: (field: string, value: any) => void
  onPushSelectDataScreen: (field: string) => void
  onAddProductToList: () => void
  onUpdateProductById: (id: string, value: any) => void
  onSubmitForm: () => void
  buttonTitle: string
  disableFields: boolean
  disableSubmitButton: boolean
};

const CRUDListScreenComponent = ({
  onSetListData,
  mainData,
  screenTitle,
  onPushSelectDataScreen,
  onAddProductToList,
  onUpdateProductById,
  onSubmitForm,
  buttonTitle,
  disableFields,
  disableSubmitButton
}: Props) => {
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
          <View style={CRUDListScreenComponentStyles.componentBody}>
            <TextInputWithLabel
              field="title"
              label="Name"
              onCangeText={onSetListData}
              value={mainData.title}
              disable={disableFields}
            />
            <SelectListType
              label="Type"
              field="type"
              value={mainData.type}
              onOpenSelectionScreen={onPushSelectDataScreen}
              disable={disableFields}
            />
            <DatePickerComponent
              field="date_finish"
              label="Data of Finish"
              onSubmit={onSetListData}
              value={mainData.date_finish}
              disable={disableFields}
            />
            <LisfOfProducts
              products={mainData.products}
              onAddNewProduct={onAddProductToList}
              onUpdateProduct={onUpdateProductById}
              listTypeColor={listTypeColor}
              disable={disableFields}
            />
          </View>
        </Content>
        <Button
          onPress={() => onSubmitForm()}
          style={buttonColorStyle}
          disabled={disableSubmitButton}
          full
        >
          <Text>{buttonTitle}</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}

export default CRUDListScreenComponent;