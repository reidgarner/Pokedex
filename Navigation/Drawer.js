import React from 'react';
import { Platform, Dimensions, StyleSheet, ImageBackground, View, Text, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const styles = StyleSheet.create({
  container: {
      flex: 1,
      borderBottomLeftRadius: 10,
      borderBottomStartRadius: 10,
      backgroundColor: 'transparent',
  },
  linkContainer: {
    position: 'absolute',
    width: '100%',
    top: '17%',
    left: '44%',
  },
  screenLinks: {
    width: '100%',
    height: 60,
    // backgroundColor: 'green',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  linkText: {
    fontFamily: 'PokemonGB',
    fontSize: 16,
    lineHeight: 25,
    // textAlign: 'center',
  },
})

export default class Drawer extends React.Component {
    navLink(nav, text) {
        return(
            <TouchableOpacity style={styles.screenLinks} onPress={() => this.props.navigation.navigate(nav)}>
                <Text style={styles.linkText}>{text}</Text>
            </TouchableOpacity>
        ) 
    }
    render() {
        return(
          <ImageBackground
            style={styles.container}
            source={require('PokedexFrontEnd/assets/Gameboy.png')}
          >
            <View style={styles.linkContainer}>
              {this.navLink('Pokédex', 'Pokédex')}
              {this.navLink('My Pokémon', 'My Pokémon')}
              {this.navLink('Exit', 'Exit')}
            </View>
          </ImageBackground>
        )
    }
}
