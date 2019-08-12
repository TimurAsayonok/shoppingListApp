import React from 'react';
import { View } from 'react-native';
import {
  Text,
  Icon,
  Button,
  List,
} from 'native-base';
import { TextInputWithCheckBox } from '../../common';
import { Product } from '../../../interfaces/modals';
import { TextStyle } from '../../../constants/UIStyles';
import { LisfOfProductsStyles } from './styles';

interface Props {
  onAddNewProduct: () => void
  products: Product[]
  onUpdateProduct: (id: string, value: any) => void
  listTypeColor: string
  disable: boolean
};

const LisfOfProducts = ({
  onAddNewProduct,
  products,
  onUpdateProduct,
  listTypeColor,
  disable
}: Props) => (
    <View style={LisfOfProductsStyles.container}>
      <Text style={TextStyle.title3}>Products:</Text>
      {!disable && (
        <Button
          onPress={() => onAddNewProduct()}
          full
          transparent
        >
          <Icon style={{ color: listTypeColor }} name="ios-add-circle" />
        </Button>
      )}
      {products && (
        <View>
          {products.length > 0 && (
            <List>
              {products.map(product => (
                <TextInputWithCheckBox
                  key={product.id}
                  color={listTypeColor}
                  isChecked={product.is_checked}
                  inputPlaceholder="Product Name"
                  value={product.title}
                  disable={disable}
                  onCheckBoxChange={(isChecked: boolean) => (
                    onUpdateProduct(
                      product.id,
                      {
                        field: 'is_checked',
                        data: isChecked
                      }
                    )
                  )}
                  onInputChange={(text: string) => (
                    onUpdateProduct(
                      product.id,
                      {
                        field: 'title',
                        data: text
                      }
                    )
                  )}
                />
              ))}
            </List>
          )}
        </View>
      )}
    </View>
  )

export default LisfOfProducts;