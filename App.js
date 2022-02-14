import React from 'react';
import {View, Text} from 'react-native';
import {NativeRouter, Route, Routes, Link} from 'react-router-native';

import FinishedTodos from './components/FinishedTodos';
import TodoHome from './components/TodoHome';
import GlobalStateProvider from './context/GlobalState';
import SignIn from './components/SignIn';
import CreateAccount from './components/CreateAccount';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';
import Profile from './components/Profile';
import Search from './components/Search';

const Stack = createNativeStackNavigator();

const AuthStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const FinishedStack = createStackNavigator();
const SearchStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={Search} />
    </SearchStack.Navigator>
  );
};

function App() {
  return (
    <GlobalStateProvider>
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen name="TodoHome" component={HomeStackScreen} />
          <Tabs.Screen name="FinishedTodos" component={SearchStackScreen} />
        </Tabs.Navigator>
      </NavigationContainer>
      {/* <NavigationContainer>
        <AuthStack.Navigator initialRouteName="SignIn">
          <AuthStack.Screen
            name="SignIn"
            options={{title: 'Sign In'}}
            component={SignIn}
          />
          <AuthStack.Screen
            name="CreateAccount"
            options={{title: 'Create Account'}}
            component={CreateAccount}
          />
        </AuthStack.Navigator>
      </NavigationContainer> */}
      {/* <NavigationContainer>
        <Stack.Navigator initialRouteName="TodoHome">
          <Stack.Screen
            name="TodoHome"
            component={TodoHome}
            options={{
              title: 'Todos Home',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="FinishedTodos"
            component={FinishedTodos}
            options={{title: 'Finished Todos'}}
          />
        </Stack.Navigator>
      </NavigationContainer> */}
    </GlobalStateProvider>
  );
}

export default App;
