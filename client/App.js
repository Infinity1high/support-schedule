/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import { Provider } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import {loadUsers} from "./src/store/actions";


import store from './src/store/store';
import { Button } from 'react-native'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Schedule from './src/views/schedule' ;
import People from './src/views/people'
import {withNavigation} from "react-navigation";


const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);


const Tab = createBottomTabNavigator();


function Navigator() {
  useEffect(() => {}, [])

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Schedule') {
              iconName = focused
                ? 'calendar'
                : 'calendar-outline';
            } else if (route.name === 'People') {
              iconName = focused ? 'people' : 'people-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Schedule"
          component={Schedule}
        />
        <Tab.Screen name="People" component={People} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;