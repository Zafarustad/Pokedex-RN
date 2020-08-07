import React, {Component} from 'react';
import {StatusBar, Dimensions, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Pokemons from './Components/Pokemons';
import Details from './Components/Details';
import Items from './Components/Items';
import Profile from './Components/Profile';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Pokemons"
      tabBarPosition="bottom"
      tabBarOptions={{
        style: {
          marginHorizontal: 7,
          paddingBottom: 10,
          shadowOpacity: 0,
          shadowOffset: {
            height: 0,
            width: 0,
          },
          elevation: 0,
          shadowRadius: 0,
        },
        indicatorStyle: {
          backgroundColor: 'darkgreen',
          marginBottom: 5,
          width: '25%',
          marginLeft: '10%',
        },
        activeTintColor: 'darkgreen',
        inactiveTintColor: 'grey',
      }}>
      <Tab.Screen name="Pokemons" component={Pokemons} />
      <Tab.Screen name="Items" component={Items} />
    </Tab.Navigator>
  );
};

class App extends Component {
  render() {
    return (
      <>
        <StatusBar hidden />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" headerMode="none">
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Home" component={TabNavigator} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

export default App;
