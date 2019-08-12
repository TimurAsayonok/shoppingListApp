import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import {
  Text,
  Icon,
  Button,
  List,
  ListItem,
  CheckBox,
  Input,
} from 'native-base';
import { TextInputWithCheckBox } from '../../common';
import { TextStyle, LIST_TYPES_STYLES, COLORS } from '../../../constants/UIStyles';
import { ShoppingListCardStyles } from './styles';

const LisfOfProducts = ({
  onAddNewProduct,
  products,
  onUpdateProduct,
  listType,
  listTypeColor,
  disable
}: {}) => (
    <View style={{
      marginTop: 25
    }}>
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