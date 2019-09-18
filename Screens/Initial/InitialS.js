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
  buttonBox: {
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '20%',
  },
});

export default styles;
