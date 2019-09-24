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
  selectedLink: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    backgroundColor: 'black',
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

    // const onHighlight = (id) => {
    //   this.setState({ selected: id });
    // };

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

    return (
      <ImageBackground
        style={styles.container}
        source={require('PokedexFrontEnd/assets/Gameboy.png')}
      >
        <View style={styles.linkContainer}>
          <TouchableOpacity
            style={selected === 1 ? styles.selectedLink : styles.screenLinks}
            onPress={() => onHighlight(1)}
          >
            <Text style={selected === 1 ? styles.selectedText : styles.linkText}>Pokédex</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={selected === 2 ? styles.selectedLink : styles.screenLinks}
            onPress={() => onHighlight(2)}
          >
            <Text style={selected === 2 ? styles.selectedText : styles.linkText}>My Pokémon</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={selected === 3 ? styles.selectedLink : styles.screenLinks}
            onPress={() => onHighlight(3)}
          >
            <Text style={selected === 3 ? styles.selectedText : styles.linkText}>Exit</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.up}
          onPress={onUp}
        />
        <TouchableOpacity
          style={styles.down}
          onPress={onDown}
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
