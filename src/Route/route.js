import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import Auth from '../screens/authentication';
const { width, height } = Dimensions.get("window");
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import Splash from '../screens/splash';
import Home from '../screens/home';
import Logout from '../screens/logout';
import Payments from '../screens/payments';
import Profile from '../screens/profile';
import Notification from '../screens/notification';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Cart from '../screens/tabview';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props} style={styles.menuContainer}>
      <View style={{}}>
        <TouchableOpacity style={styles.touchable_opacity}
          onPress={() => { props.navigation.navigate('Profile') }}>
          <View style={{ marginLeft: -30, marginVertical: 10 }}>
            <Image source={require('../images/nfc.png')} resizeMode='contain' style={styles.profile_dp} />
          </View>
          <View style={{ justifyContent: 'center', marginHorizontal: 5, }}>
            <Text style={styles.drawertext}>
              Update Your Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.draweritems}>
        <TouchableOpacity style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}
          onPress={() => { props.navigation.navigate('Home') }}>
        <Entypo name={'home'} size={22} style={{ color:'black' }} />
         <Text style={styles.drawertext1}> Home</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.draweritems}>
        <TouchableOpacity style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}
          onPress={() => { props.navigation.navigate('Notification') }}>
        <Entypo name={'bell'} size={22} style={{ color:'black' }} />
         <Text style={styles.drawertext1}> Notification</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.draweritems}>
        <TouchableOpacity style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}
          onPress={() => { props.navigation.navigate('Payments') }}>
        <MaterialIcons name={'payment'} size={22} style={{ color:'black' }} />
      <Text style={styles.drawertext1}> Payments</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.draweritems}>
        <TouchableOpacity style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}
          onPress={() => { props.navigation.navigate('Splash') }}>
        <MaterialIcons name={'logout'} size={22} style={{ color:'black' }} />
         <Text style={styles.drawertext1}> Logout</Text>
        </TouchableOpacity>
      </View>
     
    </DrawerContentScrollView>
  );
}
function Root() {
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{
      headerShown: false,
      headerStyle: { backgroundColor: 'transparent' },
      drawerPosition: 'right'
    }}
      drawerContent={(props) => < CustomDrawer {...props} />}>


      <Drawer.Screen name="Payments" component={Payments} options={{ headerShown:false}} />
      <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Drawer.Screen name="Logout" component={Logout} options={{ headerShown: false }} />
      <Drawer.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
      <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Drawer.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
    </Drawer.Navigator>
  )
}

export default function AppNavigator({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Splash'}>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
        <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
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
    backgroundColor: '#c4d8ff'
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
  profile_dp: {
    height: 70,
    width: 70,
    borderRadius: 55,
    marginLeft: 20,
  },
  touchable_opacity: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 55,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    marginHorizontal: 15
  },
  draweritems:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
    padding:15
  },
  drawertext:{
    fontSize: 15,
     color: 'black',
     fontWeight: 'bold' 
  },
  drawertext1:{
    fontSize: 22,
    color: 'black',
    fontWeight:'400',
    marginLeft:10
  }
});