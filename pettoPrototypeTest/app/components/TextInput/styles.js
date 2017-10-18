import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 30;
const BORDER_RADIUS = 20;

export default EStyleSheet.create({
  container: {
    backgroundColor: '$white',
    width: '90%',
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 11,
  },
  input: {
    height: INPUT_HEIGHT,
    fontSize: 14,
    width: '65%',
    paddingHorizontal: 10,
  },
  inputField: {
    height: 50,
    width: 230,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderRadius: 30,
    backgroundColor: '#ffdca4',
    padding: 10,
    marginTop: 12,
  },
});
