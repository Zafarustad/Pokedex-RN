import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Pokemons from './Components/Pokemons';
import Details from './Components/Details';

const stackNavigator = createStackNavigator(
  {
    Home: {
      screen: Pokemons,
    },
    Details: {
      screen: Details,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(stackNavigator);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
