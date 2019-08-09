/**
 * 
 *
 */

import React, { Fragment, PureComponent } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

class ShippingListsScreen extends PureComponent {
  constructor(props) {
    super(props);

    Navigation.events().bindComponent(this);
    this.pushViewPostScreen = this.pushViewPostScreen.bind(this);
    this.showAddPostModal = this.showAddPostModal.bind(this);
  }

  static get options() {
    return {
      topBar: {
        rightButtons: [
          {
            id: 'addPost',
            text: 'Add'
          }
        ]
      }
    };
  }

  componentDidMount() {
  }

  navigationButtonPressed({ buttonId }) {
    if (buttonId === 'addPost') {
      this.showAddPostModal();
    }
  }

  pushViewPostScreen() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'blog.ViewPost',
        passProps: {
          text: 'Some props that we are passing'
        },
        options: {
          topBar: {
            title: {
              text: 'Post1'
            }
          }
        }
      }
    });
  }

  showAddPostModal() {
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: 'blog.AddPost',
          }
        }]
      }
    });
  }

  render() {
    console.log(this.props);
    return (
      <SafeAreaView style={{ flex: 1}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{ flexGrow: 1 }}
          style={styles.scrollView}
        >
          <View style={{
            flexDirection: 'column'
          }}>
            <Text style={{
              fontSize: 34,
              fontWeight: '500'
            }}>
              Shipping
            </Text>
            <Text style={{
              fontSize: 28
            }}>
              Lists
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shippingLists: state.shoppingLists
  };
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    paddingHorizontal: 15
  },
});

export default connect(mapStateToProps, {})(ShippingListsScreen);