import React from 'react';
import PropTypes from 'prop-types';
import styles from 'PokedexFrontEnd/Screens/SignUp/SignUpS';

import Button from 'PokedexFrontEnd/Components/Button';
import Input from 'PokedexFrontEnd/Components/Input';

import {
  View,
  ImageBackground,
  StatusBar,
} from 'react-native';

export default function SignUpV(props) {
  const { onPokedex } = props;

  const {
    container,
    signUpContainer,
  } = styles;

  return (
    <ImageBackground
      style={container}
      source={require('PokedexFrontEnd/assets/pokedex_background_no_logo.png')}
    >
      <StatusBar barStyle="light-content" />
      <View style={signUpContainer}>
        <Input
          placeholder="Email"
        />
        <Input
          placeholder="Password"
        />
        <Input
          placeholder="Confirm"
        />
        <Button
          label="Go!"
          onPress={onPokedex}
        />
      </View>
    </ImageBackground>
  );
}

SignUpV.propTypes = { onPokedex: PropTypes.func.isRequired };
