import React from 'react';
import PropTypes from 'prop-types';
import {
  // StatusBar,
  // View,
  // ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1714',
  },
  bookButton: {
    width: '90%',
    height: '80%',
    backgroundColor: 'whitesmoke',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookText: {
    fontSize: 30,
    fontFamily: 'Poppins-ExtraLight',
  },
  homeContainer: { height: '25%' },
  createEventContainer: { height: '150%' },
});

export default function HomeScreenView(props) {
  const { onCreateEvent, onMyEvents, onAccount, onMenu } = props;
  return (
    <View style={styles.container}>
      <Text>PANTS</Text>
    </View>
  );
}

HomeScreenView.propTypes = {
  onMenu: PropTypes.func.isRequired,
  onCreateEvent: PropTypes.func.isRequired,
  onMyEvents: PropTypes.func.isRequired,
  onAccount: PropTypes.func.isRequired,
};
