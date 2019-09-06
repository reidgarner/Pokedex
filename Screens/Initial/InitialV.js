import React from 'react';
import PropTypes from 'prop-types';
import {
  // StatusBar,
  StyleSheet,
  View,
  Text,
  // ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#1C1714',
  },
});

export default function InitialV(props) {
  const { } = props;
  return (
    <View style={styles.container}>
      <Text>PANTS</Text>
    </View>
  );
}

InitialV.propTypes = {

};

