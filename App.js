import React from 'react';
import { Animated, Dimensions } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import InitialC from 'PokedexFrontEnd/Screens/Initial/InitialC'
import HomeC from 'PokedexFrontEnd/Screens/Home/HomeC'
// import SignUpCred from './Screens/SignUpCredentials'
// import SignUpInfo from './Screens/SignUpInfo'
// import Brewery from './Screens/Brewery'
// import Store from './Screens/Store'
// import Account from './Screens/Account'
import Drawer from './Navigation/Drawer'
import NavLogo from './Navigation/NavLogo';


const StackNavigator = createStackNavigator(
  {
    InitialC: {screen: InitialC},
    HomeC: {screen: HomeC},
    // SignUpCred: {screen: SignUpCred},
    // SignUpInfo: {screen: SignUpInfo},
    // Brewery: {screen: Brewery},
  },
  // {
  //   defaultNavigationOptions: ({navigation}) => {
  //     return {
  //       headerLeft: ( 
  //         <MenuButton
  //         navigation={navigation}
  //         />
  //         ),
  //     }
  //   },
  // },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerRight: (
        <NavLogo navigation={navigation} />
      ),
      headerStyle: {
        backgroundColor: 'white',
        borderBottomWidth: 0,
      },
      headerTintColor: '#2E6DB4',
      cardStack: { gesturesEnabled: false },
    }),
    // transitionConfig: () => ({
    //   transitionSpec: {
    //     duration: 0,
    //     timing: Animated.timing,
    //   },
    // }),
  },
);

// const LoginStackNavigator = createStackNavigator(
  // {
  //   Login: {screen: Login},
  //   SignUpCred: {screen: SignUpCred},
  //   SignUpInfo: {screen: SignUpInfo},
  //   Brewery: {screen: Brewery},
  // },
  // {
  //   defaultNavigationOptions: ({navigation}) => {
  //     return {
  //       headerLeft: ( 
  //         <MenuButton
  //         navigation={navigation}
  //         />
  //         ),
  //     }
  //   },
  // },
// );

// const MainStackNavigator = createStackNavigator({
  //   Brewery: {screen: Brewery},
  //   Store: {screen: Store},
  //   Account: {screen: Account},
  // },
  // {
  //   defaultNavigationOptions: ({navigation}) => {
  //     return {
  //       headerLeft: ( 
  //         <MenuButton
  //         navigation={navigation}
  //         />
  //         ),
  //     }
  //   },
  //   transitionConfig : () => ({
  //     transitionSpec: {
  //       duration: 0,
  //       timing: Animated.timing,
  //     },
  //   }),
//   },
// );

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const DrawerConfig = {
    drawerWidth: WIDTH*0.8,
    drawerPosition: 'right',
    contentComponent: ({ navigation }) => {
    return(<Drawer navigation={navigation} />)
    }
}

const DrawerNavigator = createDrawerNavigator(
  {
    Stack: {
      screen: StackNavigator,
    },
  //   MainStack: {
  //     screen: MainStackNavigator,
  //   },
  },
  DrawerConfig,
);

export default App = createAppContainer(DrawerNavigator);
