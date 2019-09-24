import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  Vibration,
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
    color: '#035838',
  },
  selectedLink: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    backgroundColor: '#035838',
  },
  selectedText: {
    fontFamily: 'PokemonGB',
    color: '#80932C',
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
  },
  down: {
    height: 60,
    width: 70,
    position: 'absolute',
    top: 577,
    left: 64,
    backgroundColor: 'transparent',
  },
  select: {
    height: 70,
    width: 165,
    position: 'absolute',
    top: 645,
    right: 0,
    backgroundColor: 'transparent',
  },
});

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
    };
  }

  render() {
    const { selected } = this.state;
    const { navigation } = this.props;
    const { navigate } = navigation;

    const onUp = () => {
      if (selected > 1) {
        this.setState({ selected: selected - 1 });
      }
    };

    const onDown = () => {
      if (selected < 3) {
        this.setState({ selected: selected + 1 });
      }
    };

    const navigateTo = () => {
      if (selected === 1) {
        navigate('PokedexC');
      } else if (selected === 2) {
        navigate('MyPokeC');
      } else {
        navigate('InitialC');
      }
    };

    return (
      <ImageBackground
        style={styles.container}
        source={require('PokedexFrontEnd/assets/Gameboy.png')}
      >
        <View style={styles.linkContainer}>
          <View
            style={selected === 1 ? styles.selectedLink : styles.screenLinks}
          >
            <Text style={selected === 1 ? styles.selectedText : styles.linkText}>Pokédex</Text>
          </View>
          <View
            style={selected === 2 ? styles.selectedLink : styles.screenLinks}
          >
            <Text style={selected === 2 ? styles.selectedText : styles.linkText}>My Pokémon</Text>
          </View>
          <View
            style={selected === 3 ? styles.selectedLink : styles.screenLinks}
          >
            <Text style={selected === 3 ? styles.selectedText : styles.linkText}>Exit</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.up}
          onPress={() => {
            onUp();
            Vibration.vibrate();
          }}
        />
        <TouchableOpacity
          style={styles.down}
          onPress={() => {
            onDown();
            Vibration.vibrate();
          }}
        />
        <TouchableOpacity
          style={styles.select}
          onPress={() => {
            navigateTo();
            Vibration.vibrate();
          }}
        />
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
