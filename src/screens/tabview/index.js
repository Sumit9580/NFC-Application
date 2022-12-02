import { Switch, Animated, Text, View, ImageBackground, Dimensions, TouchableOpacity, Image, TextInput, ScrollView, StyleSheet,TouchableNativeFeedback } from 'react-native'
import React, { Component,useState } from 'react'
const { width, height } = Dimensions.get("window");
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabView, SceneMap } from 'react-native-tab-view';
import {
  AppButton,
  LinkText,
  FloatingLabelInput,
  BackButtonHeader,
  BackButtonHeader1
} from '../../components/index';
const FirstRoute = ({navigation}) => (
  <View style={[styles.container, { backgroundColor: '#ffffff' }]} >
  </View>

);
const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#ffffff' }]} />
);


const ThirdRoute = () => (
  <View style={[styles.container, { backgroundColor: '#FFFFFF' }]} />
);
const FourRoute = () => (
    <View style={[styles.container, { backgroundColor: '#FFFFFF' }]} />
  );
export default class Cart extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Wallet' },
      { key: 'second', title: 'Add Card' },
      { key: 'third', title: 'Transaction' },
      { key: 'four', title: 'Card Details' },
    ],

  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <ScrollView>
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>
              <Animated.Text style={{ color: "black", opacity, fontWeight: "bold", borderBottomColor: "#c4d8ff", fontSize:15 }}>{route.title}</Animated.Text>
            </TouchableOpacity>
            </ScrollView>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    four: FourRoute,
  });


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Home')} style={styles.arrowview}>
         <Ionicons name='arrow-back' size={30} style={{ color: 'black',}} />
        </TouchableOpacity>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ width: width, height: height, backgroundColor: '#FFFFFF' }}>
            <TabView
              navigationState={this.state}
              renderScene={this._renderScene}
              renderTabBar={this._renderTabBar}
              onIndexChange={this._handleIndexChange}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  tabBarStyle: {
    flexDirection: "row",
    elevation: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,

    height: 50,
    width: 180,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5
  },
  container: {
    width: width,
    height: '100%'
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: "space-evenly"

  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical:6,
  },
  arrowview:{
    height:50,
    width:'100%',
    justifyContent:'center',
    paddingLeft:20,
  }
})