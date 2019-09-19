import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SignUpV from 'PokedexFrontEnd/Screens/SignUp/SignUpV';

export default class SignUpC extends Component {
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
      <SignUpV
        onPokedex={onPokedex}
      />
    );
  }
}

SignUpC.propTypes = (
  {
    navigation:
      PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  }
);
