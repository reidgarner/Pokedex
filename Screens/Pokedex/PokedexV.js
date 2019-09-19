import React from 'react';
import PropTypes from 'prop-types';
import styles from 'PokedexFrontEnd/Screens/Pokedex/PokedexS';

import ListItem from 'PokedexFrontEnd/Components/ListItem';

import {
  View,
  Image,
  Text,
  ScrollView,
  StatusBar,
} from 'react-native';

export default function PokedexV(props) {
  const {
    container,
    header,
    scrollContainer,
  } = styles;

  const { pokemon } = props;

  console.log(pokemon);

  const pokeList = pokemon && pokemon.map((p, i) => (
    <ListItem
      species={p.pokemon_species}
      sprites={p.sprites}
      image={i + 1}
    />
  ));

  return (
    <View style={container}>
      <StatusBar barStyle="light-content" />
      <Text style={header}>Pokédex</Text>
      <ScrollView style={scrollContainer}>
        {pokeList}
      </ScrollView>
    </View>
  );
}

PokedexV.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.object).isRequired,
};