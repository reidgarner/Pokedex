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

    const onSignIn = () => {
      navigate('SignInC');
    };
    const onSignUp = () => {
      navigate('SignUpC');
    };

    return (
      <InitialV
        onSignIn={onSignIn}
        onSignUp={onSignUp}
      />
    );
  }
}

InitialC.propTypes = (
  {
    navigation:
      PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  }
);
