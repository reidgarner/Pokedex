import React from 'react';
import { Animated, Dimensions } from 'react-native';
import {createStackNavigator, createDrawerNavigator, createAppContainer} from 'react-navigation';

import InitialC from 'Pokedex/Screens/Initial/InitialC'
// import SignUpCred from './Screens/SignUpCredentials'
// import SignUpInfo from './Screens/SignUpInfo'
// import Brewery from './Screens/Brewery'
// import Store from './Screens/Store'
// import Account from './Screens/Account'
// import MenuDrawer from './Navigation/MenuDrawer'
// import MenuButton from './Components/MenuButton';


const StackNavigator = createStackNavigator(
  {
    InitialC: {screen: InitialC},
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

const DrawerConfig = {
    drawerWidth: WIDTH*0.75,
    // contentComponent: ({ navigation }) => {
    // return(<MenuDrawer navigation={navigation} />)
    // }
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
