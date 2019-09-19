import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SignInV from 'PokedexFrontEnd/Screens/SignIn/SignInV';

export default class SignInC extends Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: null,
  };

  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;

    const onPokedex = () => {
      navigate('PokedexC');
    };

    return (
      <SignInV
        onPokedex={onPokedex}
      />
    );
  }
}

SignInC.propTypes = (
  {
    navigation:
      PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  }
);
