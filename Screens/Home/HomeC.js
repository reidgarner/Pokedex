import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HomeV from 'PokedexFrontEnd/Screens/Home/HomeV';

export default class HomeC extends Component {
  static navigationOptions = {
    // header: null,
    headerBackTitle: null,
  };

  render() {
    return (
      <HomeV/>
    );
  }
}

