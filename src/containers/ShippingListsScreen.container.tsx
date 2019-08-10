/**
 * 
 *
 */
import React, { PureComponent } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import { Segment, Button, Text, Icon } from 'native-base';
import { ShippingListCard } from '../components/shippingList';

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
    const { shippingLists } = this.props;

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
              Shopping
            </Text>
            <Text style={{
              fontSize: 28
            }}>
              Lists
            </Text>
          </View>
          <View style={{
            marginTop: 20
          }}>
            <Segment style={{
              backgroundColor: 'white'
            }}>
              <Button
                first
                active
                style={{ backgroundColor: '#FBD388', borderColor: 'transparent' }}
              >
                <Text style={{ color: '#060606' }}>
                  Active
              </Text>
              </Button>
              <Button
                last
                style={{ backgroundColor: '#F6F6F6', borderColor: 'transparent' }}
              >
                <Text style={{ color: '#060606' }}>Arhived</Text>
              </Button>
            </Segment>
          </View>
          <View style={{
            marginTop: 20,
            flex: 1,
            flexDirection: 'column'
          }}>
            {shippingLists.length != 0 && (
              shippingLists.map(list => (
                <ShippingListCard
                  key={list.id}
                  shippingListItem={list}
                />
              ))
            )}
            <View style={{ marginTop: 15 }}>
              <View
                style={{
                  height: 55,
                  width: 55,
                  backgroundColor: '#FBD388',
                  borderColor: '#C49F4F',
                  borderRadius: 10
                }}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <View
                style={{
                  height: 55,
                  width: 55,
                  backgroundColor: '#EB5542',
                  borderColor: '#BA5639',
                  borderRadius: 10
                }}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <View
                style={{
                  height: 55,
                  width: 55,
                  backgroundColor: '#6E72ED',
                  borderColor: '#6D69C1',
                  borderRadius: 10
                }}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <View
                style={{
                  height: 55,
                  width: 55,
                  backgroundColor: '#FBD388',
                  borderColor: '#C49F4F',
                  borderRadius: 10
                }}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <View
                style={{
                  height: 55,
                  width: 55,
                  backgroundColor: '#EB5542',
                  borderColor: '#BA5639',
                  borderRadius: 10
                }}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <View
                style={{
                  height: 55,
                  width: 55,
                  backgroundColor: '#CCC4FB',
                  borderColor: '#9A91CA',
                  borderRadius: 10
                }}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <View
                style={{
                  height: 55,
                  width: 55,
                  backgroundColor: '#EB5542',
                  borderColor: '#BA5639',
                  borderRadius: 10
                }}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <View
                style={{
                  height: 55,
                  width: 55,
                  backgroundColor: '#CCC4FB',
                  borderColor: '#9A91CA',
                  borderRadius: 10
                }}
              />
            </View>
          </View>
          
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shippingLists: state.shoppingLists.lists
  };
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    paddingHorizontal: 15
  },
});

export default connect(mapStateToProps, {})(ShippingListsScreen);