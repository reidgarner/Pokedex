import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFCC02',
    height: 'auto',
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 4,
    borderLeftColor: 'khaki',
    borderRightColor: 'dimgray',
    borderTopColor: 'darkgoldenrod',
    borderBottomColor: '#434343',
  },
  label: {
    fontFamily: 'PokemonGB',
    fontSize: 20,
    lineHeight: 25,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 10,
  }
});

export default function Button(props) {
  const {
    label,
    onPress,
  } = props;

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => onPress()}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}