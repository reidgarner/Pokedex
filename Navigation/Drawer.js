import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

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
  up: {
    height: 60,
    width: 70,
    position: 'absolute',
    top: 485,
    left: 64,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: 'green',
  },
  down: {
    height: 60,
    width: 70,
    position: 'absolute',
    top: 577,
    left: 64,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: 'green',
  },
});

export default class Drawer extends React.Component {
  navLink(nav, text) {
    const { navigation } = this.props;
    const { navigate } = navigation;
    return (
      <TouchableOpacity style={styles.screenLinks} onPress={() => navigate(nav)}>
        <Text style={styles.linkText}>{text}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require('PokedexFrontEnd/assets/Gameboy.png')}
      >
        <View style={styles.linkContainer}>
          {this.navLink('Pokédex', 'Pokédex')}
          {this.navLink('My Pokémon', 'My Pokémon')}
          {this.navLink('Exit', 'Exit')}
        </View>
        <TouchableOpacity style={styles.up} />
        <TouchableOpacity style={styles.down} />
      </ImageBackground>
    );
  }
}

Drawer.propTypes = (
  {
    navigation:
      PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  }
);
