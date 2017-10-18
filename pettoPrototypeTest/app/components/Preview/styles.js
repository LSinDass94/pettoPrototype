import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  overall: {
    flex: 1,
    flexDirection: 'column',
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iLogo: {
    width: 50,
    height: 50,
  },
  iPic: {
    marginTop: 10,
    width: 300,
    height: 400,
    borderRadius: 10,
  },
  vDetails: {
    alignSelf: 'stretch',
    flex: 1,
    flexDirection: 'row',
    marginTop: -5,
  },
  vPet: {
    alignSelf: 'flex-start',
    width: 100,
    marginLeft: -5,
  },
  vInfo: {
    marginLeft: 140,
    marginTop: -40,
  },
  vInfoButton: {
    width: 30,
    height: 30,
    backgroundColor: 'rgba(210,210,210,0.5)',
    borderRadius: 50,
  },
  tInfo: {
    marginLeft: 12,
    marginTop: 3,
    color: '#FFF',
    fontSize: 20,
  },
  vButtonHolder: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: -10,
  },
  iSize: {
    width: 50,
    height: 50,
  },
  nField: {
    fontSize: 25,
    marginTop: -60,
    color: '#FFF',
    alignSelf: 'flex-start',
  },
  lField: {
    fontSize: 12,
    marginTop: -2,
    alignSelf: 'flex-start',
    color: '#FFF',
  },
  bStyle: {
    width: 50,
    height: 50,
  },
});
