import React from 'react';
import PropTypes from 'prop-types';
import styles from 'PokedexFrontEnd/Screens/Home/HomeS';

import ListItem from 'PokedexFrontEnd/Components/ListItem';

import {
  View,
  Image,
  Text,
  ScrollView,
} from 'react-native';

export default function HomeV(props) {
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
      <Text style={header}>Pokédex</Text>
      <ScrollView style={scrollContainer}>
        {pokeList}
      </ScrollView>
    </View>
  );
}

HomeV.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.object).isRequired,
};