import React, { Component } from 'react';

import MyPokeV from 'PokedexFrontEnd/Screens/MyPoke/MyPokeV';

const API_URL = 'http://localhost:3000/pokemon';

export default class MyPokeC extends Component {
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
      <MyPokeV
        pokemon={pokemon}
      />
    );
  }
}
