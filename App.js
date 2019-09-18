/* eslint-disable react/prop-types */
import React from 'react';
import { Dimensions, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import InitialC from 'PokedexFrontEnd/Screens/Initial/InitialC';
import HomeC from 'PokedexFrontEnd/Screens/Home/HomeC';

import Drawer from './Navigation/Drawer';
import NavLogo from './Navigation/NavLogo';


const StackNavigator = createStackNavigator(
  {
    InitialC: { screen: InitialC },
    HomeC: { screen: HomeC },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerRight: (
        <NavLogo navigation={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#C90B2B',
        borderBottomWidth: 0,
      },
      headerTitle: (
        <Image
          style={{ width: 130, height: 50, position: 'relative', bottom: 5 }}
          source={require('PokedexFrontEnd/assets/logo.png')}
        />
      ),
      headerBackTitle: null,
      headerTintColor: '#2E6DB4',
      cardStack: { gesturesEnabled: false },
    }),
  },
);

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.8,
  drawerPosition: 'right',
  contentComponent: ({ navigation }) => (
    <Drawer navigation={navigation} />
  ),
};

const DrawerNavigator = createDrawerNavigator(
  { Stack: { screen: StackNavigator } },
  DrawerConfig,
);

const App = createAppContainer(DrawerNavigator);

export default App;
