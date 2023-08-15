import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  userImageContainer: {
    position: 'relative',
    borderWidth: 1,
    borderColor: '#F35BAC',
    padding: 3,
    borderRadius: 50,
  },
  initialLetterContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initialLetter: {
    fontSize: 30,
    color: 'white',
  },
});

export default style;
