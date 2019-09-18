import React, { Component } from 'react';

import HomeV from 'PokedexFrontEnd/Screens/Home/HomeV';

const API_URL = 'http://localhost:3000/pokemon';

export default class HomeC extends Component {
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
      <HomeV
        pokemon={pokemon}
      />
    );
  }
}
