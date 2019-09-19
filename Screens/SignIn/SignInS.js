import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1 },
  button: {
    backgroundColor: 'white',
    height: 20,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInContainer: {
    width: '100%',
    height: '25%',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: '30%',
  },
});

export default styles;
