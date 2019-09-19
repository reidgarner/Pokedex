import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, TextInput, View, Image } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: { flexDirection: 'row' },
  input: {
    borderBottomColor: '#FFCC02',
    borderBottomWidth: 3,
    width: 230,
    fontSize: 20,
    paddingLeft: 10,
    fontFamily: 'PokemonGB',
    lineHeight: 25,
    color: 'black',
  },
  pokeball: {
    height: 35,
    width: 35,
  },
  pokeballContainer: {
    borderBottomColor: '#FFCC02',
    borderBottomWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
});

export default function Input(props) {
  const { placeholder } = props;

  return (
    <View style={styles.inputContainer}>
      <View style={styles.pokeballContainer}>
        <Image
          style={styles.pokeball}
          source={require('PokedexFrontEnd/assets/pokeball2.png')}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="black"
      />
    </View>
  );
}

Input.propTypes = {

};
