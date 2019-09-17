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
    top: '13.5%',
    left: '37%',
  },
  screenLinks: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
  },
  linkText: {
    fontFamily: 'PokemonGB',
    fontSize: 16,
    lineHeight: 25,
    position: 'absolute',
    left: '5%',
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
