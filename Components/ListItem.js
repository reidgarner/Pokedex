import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'whitesmoke',
    height: 90,
    width: '100%',
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  labelBox: {
    height: '100%',
    justifyContent: 'center',
  },
  label: {
    fontFamily: 'PokemonGB',
    fontSize: 20,
    lineHeight: 25,
  },
  image: {
    height: 80,
    width: 100,
  },
});

export default function ListItem(props) {
  const {
    species,
    image,
  } = props;

  const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${image}.png`

  const pokeName = species.name.charAt(0).toUpperCase() + species.name.slice(1);

  return (
    <View>
      <TouchableOpacity
        style={styles.listItem}
        // onPress={() => onPress()}
      >
        <View style={styles.labelBox}>
          <Text style={styles.label}>{pokeName}</Text>
          <Text style={styles.label}>Type</Text>
        </View>
        <Image
          style={styles.image}
          resizeMethod="scale"
          defaultSource={require('PokedexFrontEnd/assets/loadingPokeball.png')}
          source={{ uri: picture }}
        />
      </TouchableOpacity>
    </View>
  );
}

ListItem.propTypes = {
  species: PropTypes.arrayOf(PropTypes.object),
};

ListItem.defaultProps = { species: {} };
