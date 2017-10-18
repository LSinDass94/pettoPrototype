import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';
import Register from '../screens/Register';
import Categories from '../screens/Categories';
import Previews from '../screens/Previews';
import Previews2 from '../screens/Previews2';
import Previews3 from '../screens/Previews3';

const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    Options: {
      screen: Options,
      navigationOptions: {
        headerTitle: 'Options',
      },
    },
    Themes: {
      screen: Themes,
      navigationOptions: {
        headerTitle: 'Themes',
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        headerTitle: 'Register pet',
      },
    },
    Categories: {
      screen: Categories,
      navigationOptions: {
        header: () => null,
      },
    },
    Previews: {
      screen: Previews,
      navigationOptions: {
        header: () => null,
      },
    },
    Previews2: {
      screen: Previews2,
      navigationOptions: {
        header: () => null,
      },
    },
    Previews3: {
      screen: Previews3,
      navigationOptions: {
        header: () => null,
      },
    },
  },
  {
    headerMode: 'screen',
  },
);

const CurrencyListStack = StackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
});

export default StackNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    CurrencyList: {
      screen: CurrencyListStack,
    },
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode: 'none',
  },
);
