import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InitialV from 'PokedexFrontEnd/Screens/Initial/InitialV';

export default class InitialC extends Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: null,
  };

  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;

    const onHome = () => {
      navigate('HomeC');
    };

    return (
      <InitialV
        onHome={onHome}
      />
    );
  }
}

