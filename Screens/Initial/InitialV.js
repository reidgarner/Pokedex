import React from 'react';
import PropTypes from 'prop-types';
import styles from 'PokedexFrontEnd/Screens/Initial/InitialS';

import Button from 'PokedexFrontEnd/Components/Button';

import {
  View,
  ImageBackground,
} from 'react-native';

export default function InitialV(props) {
  const { onHome } = props;

  const {
    container,
    buttonBox,
  } = styles;

  return (
    <ImageBackground
      style={container}
      source={require('PokedexFrontEnd/assets/pokedex_background.png')}
    >
      <View style={buttonBox}>
        <Button
          label="Enter"
          onPress={onHome}
        />
      </View>
    </ImageBackground>
  );
}

InitialV.propTypes = { onHome: PropTypes.func.isRequired };
