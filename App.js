//import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
//
import {NavigationContainer} from '@react-navigation/native';
import MainStack  from './src/stacks/MainStack';
import UserContextProvider from './src/contexts/UserContext';




export default()=> {
  return (
    <UserContextProvider>
    <NavigationContainer>
      <MainStack/>

    </NavigationContainer>
    </UserContextProvider>
  
  );
}

