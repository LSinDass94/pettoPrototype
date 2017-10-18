import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width;
const imageHeight = Dimensions.get('window').height;

export default EStyleSheet.create({
  $smallImageSize: imageWidth / 3,
  $largeImageSize: imageWidth / 1.5,
  $smallImageHeight: imageHeight / 5,
  $largeImageHeight: imageHeight / 2.5,
  container: {
    alignItems: 'center',
  },
  logo: {
    width: '$largeImageSize',
    height: '$largeImageHeight',
  },
  text: {
    color: '$white',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    fontWeight: '600',
  },
});
