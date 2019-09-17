import React from 'react';
import PropTypes from 'prop-types';
import { styles } from 'PokedexFrontEnd/Screens/Home/HomeS'

import Button from 'PokedexFrontEnd/Components/Button'

import {
  View,
  Text,
  Image,
} from 'react-native';

export default function HomeV(props) {
  const { } = props;
  const {
    container
  } = styles
  return (
    <View style={container}>
      <Image source={require('PokedexFrontEnd/assets/pika.png')} />
    </View>
  );
}

HomeV.propTypes = {

};

