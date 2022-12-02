import React from 'react';
import { Text, View,Button,ImageBackground,Image,Dimensions,StyleSheet,picker,TouchableOpacity } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
const { width, height } = Dimensions.get("window");
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';



function CustomDrawer(props) {
    return (
      <DrawerContentScrollView {...props} style={styles.menuContainer}>
        <View style={{padding:width*0.066,borderBottomWidth:2,borderColor: '#C60031'}}>
        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:8}}>
        <MaterialCommunityIcons name="map-marker-circle" color={"#000"} size={width*0.044} />
        <Text style={{ color: '#000',fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:4 }}>
        Shaharukh</Text>
        <TouchableOpacity style={{position: 'absolute',right:0}} onPress={()=>props.navigation.navigate("Restaurants")}>
        <MaterialCommunityIcons name="account-edit" color={"#B30929"} size={width*0.044} />
        </TouchableOpacity>
        </View>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={() => {props.navigation.navigate('Dashboard')}}>
        <MaterialCommunityIcons name="view-dashboard" color={props.state.index === props.state.routes.findIndex(e => e.name === 'Dashboard')? "#B30929":"#fff"} size={width*0.044} />
        <Text style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Dashboard')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        Dashboard</Text>
       </TouchableOpacity>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={() => {props.navigation.navigate('Restaurants')}}>
        <MaterialCommunityIcons name="store" color={props.state.index === props.state.routes.findIndex(e => e.name === 'Restaurants')? "#B30929":"#fff"} size={width*0.044} />
        <Text style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Restaurants')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        MyBids</Text>
       </TouchableOpacity>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={() => {props.navigation.navigate('New Orders')}}>
        <MaterialCommunityIcons name="new-box"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'New Orders')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'New Orders')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        My Profile</Text>
       </TouchableOpacity>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={() => {props.navigation.navigate('Want')}}>
        <MaterialCommunityIcons name="alpha-s-box" color={props.state.index === props.state.routes.findIndex(e => e.name === 'Scheduled Orders')? "#B30929":"#fff"} size={width*0.044} />
        <Text style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Scheduled Orders')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        My WantList</Text>
       </TouchableOpacity>
        </View>
      <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',
        alignItems:'center'}}
        onPress={() => {props.navigation.navigate('Track')}}>
        <MaterialCommunityIcons name="alpha-o-box"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'Ongoing Orders')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Ongoing Orders')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        My TrackedLots</Text>
       </TouchableOpacity>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={() => {props.navigation.navigate('Order')}}>
        <MaterialCommunityIcons name="alpha-r-box"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'Rejected Orders')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Rejected Orders')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        My Orders</Text>
       </TouchableOpacity>
        </View>
      
      </DrawerContentScrollView>
    );
  }
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Dashboard" screenOptions={{headerShown:true,
      headerTitleAlign:"left",headerTitleStyle:{fontFamily: "Montserrat-SemiBold"},
      headerTintColor: 'white',
    headerStyle: {
        backgroundColor: '#FF8F62',
    },activeBackgroundColor: '#5cbbff', activeTintColor: '#ffffff',drawerItemStyle: {
       display: "none",
     }
    }} 
        drawerContent={(props) => < CustomDrawer {...props}/>}>
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Restaurants" component={Restaurants}options={{headerTitle:"My Bids"}} />
        <Drawer.Screen name="New Orders" component={NewOrders} options={{headerTitle:"My Profile"}}/>
      </Drawer.Navigator>
    )
}
const Stack = createStackNavigator();

function LoginStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="MainScreen" screenOptions={{ ...(Platform.OS === "android" && TransitionPresets.SlideFromRightIOS) }}>
      <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    flex: 1,
    backgroundColor:'#D8C367'
  },
  menuItemsCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  circleContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    padding: 10,
  },
});

export default LoginStackNavigator;