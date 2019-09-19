import React from 'react';
import PropTypes from 'prop-types';
import styles from 'PokedexFrontEnd/Screens/SignIn/SignInS';

import Button from 'PokedexFrontEnd/Components/Button';
import Input from 'PokedexFrontEnd/Components/Input';

import {
  View,
  ImageBackground,
  StatusBar,
} from 'react-native';

export default function SignInV(props) {
  const { onPokedex } = props;

  const {
    container,
    signInContainer,
  } = styles;

  return (
    <ImageBackground
      style={container}
      source={require('PokedexFrontEnd/assets/pokedex_background_no_logo.png')}
    >
      <StatusBar barStyle="light-content" />
      <View style={signInContainer}>
        <Input
          placeholder="Email"
        />
        <Input
          placeholder="Password"
        />
        <Button
          label="Go!"
          onPress={onPokedex}
        />
      </View>
    </ImageBackground>
  );
}

SignInV.propTypes = { onPokedex: PropTypes.func.isRequired };
