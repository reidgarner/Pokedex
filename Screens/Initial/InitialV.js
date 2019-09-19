import React from 'react';
import PropTypes from 'prop-types';
import styles from 'PokedexFrontEnd/Screens/Initial/InitialS';

import Button from 'PokedexFrontEnd/Components/Button';
import Input from 'PokedexFrontEnd/Components/Input';

import {
  View,
  ImageBackground,
  StatusBar,
} from 'react-native';

export default function InitialV(props) {
  const {
    onSignIn,
    onSignUp,
  } = props;

  const {
    container,
    buttonBox,
  } = styles;

  return (
    <ImageBackground
      style={container}
      source={require('PokedexFrontEnd/assets/pokedex_background.png')}
    >
      <StatusBar barStyle="light-content" />
      <View style={buttonBox}>
        <Button
          label="Sign In"
          onPress={onSignIn}
        />
        <Button
          label="Sign Up"
          onPress={onSignUp}
        />
      </View>
    </ImageBackground>
  );
}

InitialV.propTypes = {
  onSignIn: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
};
