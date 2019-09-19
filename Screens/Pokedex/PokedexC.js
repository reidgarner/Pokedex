import React, { Component } from 'react';

import PokedexV from 'PokedexFrontEnd/Screens/Pokedex/PokedexV';

const API_URL = 'http://localhost:3000/pokemon';

export default class PokedexC extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    return fetch(API_URL)
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({ pokemon: responseJson.pokemon });
      });
  }


  render() {
    const { pokemon } = this.state;

    return (
      <PokedexV
        pokemon={pokemon}
      />
    );
  }
}
