import React from 'react';
import PropTypes from 'prop-types';
import { styles } from 'PokedexFrontEnd/Screens/Initial/InitialS'

import Button from 'PokedexFrontEnd/Components/Button'

import {
  View,
  ImageBackground,
} from 'react-native';

export default function InitialV(props) {
  const { } = props;
  const {
    container,
    buttonBox,
    button,
  } = styles
  return (
    <ImageBackground
      style={container}
      source={require('PokedexFrontEnd/assets/pokedex_background.png')}
    >
      <View style={buttonBox}>
        <Button label="Enter" />
      </View>
    </ImageBackground>
  );
}

InitialV.propTypes = {

};

