import React from 'react';
import PropTypes from 'prop-types';
import { DrawerActions } from 'react-navigation-drawer';
import { Image, TouchableOpacity } from 'react-native';

export default function NavLogo(props) {
  const { navigation } = props;

  const onDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <TouchableOpacity onPress={() => onDrawer()}>
      <Image
        style={{ width: 40, height: 40, marginRight: 17.5 }}
        source={require('PokedexFrontEnd/assets/pokeball.png')}
      />
    </TouchableOpacity>
  );
}

NavLogo.propTypes = {
  navigation:
    PropTypes.shape({ dispatch: PropTypes.func.isRequired }).isRequired,
};
